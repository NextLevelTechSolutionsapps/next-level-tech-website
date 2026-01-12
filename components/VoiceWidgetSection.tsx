
import React from 'react';
import { MessageSquare, Phone, CheckCircle, FileText, TrendingUp } from 'lucide-react';

const VoiceWidgetSection: React.FC = () => {
  return (
    <section id="voice-widget" className="relative py-32 px-6 flex flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_center_top,rgba(168,85,247,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="text-center mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
          <MessageSquare className="w-4 h-4" />
          AI Chat Assistant
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Every Visitor Handled<br />
          <span className="text-purple-500">By Intelligent AI 💬</span>
        </h2>
        <p className="text-lg text-slate-400">
          In the corner of this page, you'll see our smart chat assistant. It changes everything.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl w-full items-start">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center flex flex-col items-center">
          <div className="relative flex items-center justify-center h-44 mb-6">
            <div className="absolute w-32 h-32 border-2 border-blue-500 rounded-full animate-vws-ring-pulse"></div>
            <div className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-vws-pulse z-10 shadow-lg shadow-purple-500/20">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-6">Visitors can:</p>
          <div className="grid grid-cols-2 gap-3 w-full mb-8">
            {["Ask questions", "Get instant quotes", "Book consultations", "Leave details 24/7"].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/5 py-3 rounded-lg text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-xl text-white font-semibold w-full">
            To them, it feels like white-glove service.
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">To you, it means:</h3>
          <div className="space-y-4">
            {[
              { icon: <Phone className="w-5 h-5" />, text: "Leads captured even when you're on a ladder" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Qualified prospects delivered to your phone" },
              { icon: <FileText className="w-5 h-5" />, text: "Full contact info saved automatically" },
              { icon: <TrendingUp className="w-5 h-5" />, text: "A 24/7 sales team that never sleeps" },
            ].map((benefit, i) => (
              <div key={i} className="group flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/5 hover:border-purple-500/30 hover:bg-white/10 hover:translate-x-2 transition-all cursor-default">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 text-purple-400 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <span className="text-slate-200 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl text-lg font-bold leading-snug">
            This is how you secure the contract before they even think about calling another installer.
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceWidgetSection;
