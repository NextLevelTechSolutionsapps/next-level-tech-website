
import React from 'react';
import { Mic, Check, X, Headphones, VideoOff, FileText, Users } from 'lucide-react';

const AIVoiceAssistant: React.FC = () => {
  return (
    <section className="py-32 px-6 flex flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_center_top,rgba(138,148,255,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
            <Mic className="w-4 h-4" />
            Voice AI Assistant
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white to-indigo-400 bg-clip-text text-transparent">
            AI Voice Assistant —<br />Answers the Phone When You Can't
          </h1>
          <p className="text-xl text-slate-400">Most security jobs are won by whoever answers first.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 text-center mb-16 hover:border-indigo-400/40 transition-all group">
          <p className="text-slate-400 text-lg mb-8">But when you're:</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["On a ladder", "In an attic", "Driving between installs", "On a job site", "Off the clock"].map((pill, i) => (
              <span key={i} className="bg-white/5 border border-white/20 px-6 py-2.5 rounded-full text-slate-200 font-bold group-hover:bg-indigo-500 group-hover:text-white transition-all">
                {pill}
              </span>
            ))}
          </div>
          <p className="text-slate-500 font-medium">Your phone goes unanswered — and that caller moves on to the next installer.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 opacity-90">
            <h3 className="text-2xl font-bold mb-6">This Is Where Voice AI Changes Everything</h3>
            <p className="text-slate-400 mb-8">Your website includes a built-in AI Voice Assistant that acts like a 24/7 receptionist.</p>
            
            <div className="space-y-4">
              {[
                "Answers professionally as your company",
                "Speaks naturally (not robotic)",
                "Asks the right questions",
                "Qualifies the lead (home vs business, urgency)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-transparent hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-default">
                  <Check className="text-indigo-400 w-5 h-5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-all shadow-xl">
              <p className="font-bold text-white mb-6">Instead of voicemail, prospects get a real conversation.</p>
              <div className="flex items-center gap-4 mb-4 text-slate-500 line-through">
                <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                <span>Lost lead</span>
              </div>
              <div className="flex items-center gap-4">
                <Check className="w-6 h-6 text-green-500" strokeWidth={3} />
                <span className="text-xl font-black text-white">Booked estimate</span>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-6">Every call is:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <Headphones className="w-3.5 h-3.5" />, text: "Recorded" },
                  { icon: <FileText className="w-3.5 h-3.5" />, text: "Transcribed" },
                  { icon: <Users className="w-3.5 h-3.5" />, text: "Logged" }
                ].map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg text-slate-300 text-xs font-bold">
                    {tag.icon}
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full bg-green-900/40 border border-green-500/50 text-green-400 py-6 rounded-2xl text-center font-bold text-xl shadow-lg shadow-green-900/20">
          One recovered call per week can easily pay for the entire system.
        </div>
      </div>
    </section>
  );
};

export default AIVoiceAssistant;
