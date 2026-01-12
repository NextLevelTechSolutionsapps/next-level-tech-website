
import React from 'react';
import { Hammer, Truck, AlertCircle, Clock, Zap, MessageSquare, Check, DollarSign } from 'lucide-react';

const InstallerReality: React.FC = () => {
  return (
    <section className="py-32 px-6 flex flex-col items-center bg-[radial-gradient(circle_at_center_top,rgba(243,141,57,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-4">
          <span className="bg-orange-500/10 text-orange-400 px-4 py-1 rounded-full text-sm font-bold border border-orange-500/40">
            🛠 Built For You
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Why This Matters for <span className="text-orange-400">Security Installers</span>
        </h2>
        <p className="text-center text-slate-400 text-lg mb-16">
          You're not sitting at a desk all day. You're:
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Hammer className="w-8 h-8 text-orange-400" />, label: "On job sites" },
              { icon: <Truck className="w-8 h-8 text-orange-400" />, label: "Driving between installs" },
              { icon: <AlertCircle className="w-8 h-8 text-orange-400" />, label: "Handling emergencies" },
              { icon: <Clock className="w-8 h-8 text-orange-400" />, label: "Working after hours" },
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 text-center hover:bg-white/10 hover:border-orange-400 transition-all group">
                {card.icon}
                <span className="font-bold text-slate-200">{card.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-bold text-white mb-2">This system is built specifically for that reality. It:</p>
            
            {[
              { icon: <Zap className="w-5 h-5 text-cyan-400" />, text: "Follows up when you can't" },
              { icon: <MessageSquare className="w-5 h-5 text-cyan-400" />, text: "Keeps conversations organized" },
              { icon: <Check className="w-5 h-5 text-cyan-400" />, text: "Reduces missed opportunities" },
              { icon: <DollarSign className="w-5 h-5 text-cyan-400" />, text: "Proves ROI quickly (often within 7–14 days)" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-cyan-400/50 transition-all">
                <div className="bg-cyan-400/10 p-2.5 rounded-lg flex items-center justify-center">
                  {row.icon}
                </div>
                <span className="text-slate-200 font-semibold">{row.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <p className="text-slate-400 mb-2 font-medium">This isn't "marketing software."</p>
          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
            It's <span className="text-cyan-400">lead protection</span> and <span className="text-green-400">revenue recovery</span> — built directly into your website.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default InstallerReality;
