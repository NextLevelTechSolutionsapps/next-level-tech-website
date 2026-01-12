
import React, { useState, useRef, useEffect } from 'react';
import { Mic, X, PhoneOff, Loader2, Volume2 } from 'lucide-react';
import { GoogleGenAI, Modality, LiveServerMessage, Blob } from '@google/genai';

// --- Helper Functions for Audio Encoding/Decoding ---
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

function createBlob(data: Float32Array): Blob {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}
// ---------------------------------------------------

const VoiceWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);

  const sessionRef = useRef<any>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const nextStartTimeRef = useRef<number>(0);

  const startSession = async () => {
    if (isConnecting || isConnected) return;
    setIsConnecting(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Always use the API_KEY directly from process.env as per guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      inputAudioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setIsConnecting(false);
            setIsConnected(true);
            
            const source = inputAudioCtxRef.current!.createMediaStreamSource(stream);
            scriptProcessorRef.current = inputAudioCtxRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessorRef.current.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              // CRITICAL: Solely rely on sessionPromise resolves and then call `session.sendRealtimeInput`
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(scriptProcessorRef.current);
            scriptProcessorRef.current.connect(inputAudioCtxRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
              setIsAiSpeaking(true);
              const ctx = outputAudioCtxRef.current!;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              
              const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(ctx.destination);
              
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsAiSpeaking(false);
              });

              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            const interrupted = message.serverContent?.interrupted;
            if (interrupted) {
              for (const source of sourcesRef.current.values()) {
                source.stop();
                sourcesRef.current.delete(source);
              }
              nextStartTimeRef.current = 0;
              setIsAiSpeaking(false);
            }
          },
          onerror: (e) => {
            console.error('Session error:', e);
            endSession();
          },
          onclose: () => {
            console.log('Session closed');
            setIsConnected(false);
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: "You are a professional AI Assistant for 'Next Level Tech Solutions'. You help homeowners and businesses learn about CCTV, alarm systems, and smart security. Be friendly, concise, and encourage users to book a demo. You are the 'Voice Widget' on the bottom right of the page.",
        },
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error('Failed to start session:', err);
      setIsConnecting(false);
    }
  };

  const endSession = () => {
    if (sessionRef.current) {
      sessionRef.current = null;
    }
    
    if (scriptProcessorRef.current) {
      scriptProcessorRef.current.disconnect();
    }
    
    if (inputAudioCtxRef.current) inputAudioCtxRef.current.close();
    if (outputAudioCtxRef.current) outputAudioCtxRef.current.close();
    
    sourcesRef.current.forEach(s => s.stop());
    sourcesRef.current.clear();

    setIsConnected(false);
    setIsConnecting(false);
    setIsAiSpeaking(false);
  };

  const toggleWidget = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
      endSession();
    }
  };

  return (
    <div className="fixed bottom-6 right-24 z-[100] flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-80 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 text-center">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">AI Receptionist</span>
              <button onClick={toggleWidget} className="text-slate-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                {(isConnected || isConnecting) && (
                  <div className={`absolute -inset-4 rounded-full bg-blue-500/20 animate-pulse ${isAiSpeaking ? 'scale-125 opacity-40' : 'scale-100 opacity-20'}`}></div>
                )}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
                  isConnected ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-slate-800'
                }`}>
                  {isConnecting ? (
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                  ) : isConnected ? (
                    <Volume2 className={`w-8 h-8 text-white ${isAiSpeaking ? 'animate-bounce' : ''}`} />
                  ) : (
                    <Mic className="w-8 h-8 text-slate-400" />
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">
                {isConnecting ? 'Connecting...' : isConnected ? 'AI is Listening' : 'Try the Voice Demo'}
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed px-4">
                {isConnected 
                  ? "Talk to me naturally! Ask about our security systems or how this AI works."
                  : "Experience the future of customer service. Click 'Start Call' to speak with our AI assistant."}
              </p>

              {!isConnected && !isConnecting && (
                <button 
                  onClick={startSession}
                  className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
                >
                  Start Live Demo
                </button>
              )}

              {isConnected && (
                <button 
                  onClick={endSession}
                  className="w-full py-4 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 border border-rose-500/30"
                >
                  <PhoneOff className="w-4 h-4" />
                  End Call
                </button>
              )}
            </div>
          </div>
          <div className="bg-slate-800/50 p-4 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-slate-600'}`}></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Powered by Gemini 2.5 Live</span>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          onClick={toggleWidget}
          className="group relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:scale-110 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping opacity-20"></div>
          <Mic className="w-7 h-7 text-white" />
          <div className="absolute -top-12 right-0 bg-white text-slate-950 px-3 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Talk to AI assistant
            <div className="absolute top-full right-6 border-8 border-transparent border-t-white"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default VoiceWidget;
