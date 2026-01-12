
import React from 'react';
import { PhoneOff, Clock, MessageSquareOff, AlertTriangle, ArrowDown } from 'lucide-react';

const ContactImpact: React.FC = () => {
  return (
    <section className="py-24 px-6 flex flex-col items-center text-center bg-[radial-gradient(circle_at_center_top,rgba(255,126,126,0.1)_0%,#020617_70%)] reveal-on-scroll">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          What Happens When Someone<br />
          <span className="text-rose-400 text-5xl md:text-6xl">Tries to Contact You?</span>
        </h2>
        <p className="text-xl text-slate-400 mb-16 leading-relaxed">
          Most security installers lose leads for one simple reason:<br />
          <strong className="text-white block mt-2">They don't respond fast enough.</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <PhoneOff className="w-7 h-7 text-rose-400" />, label: "Missed calls while on jobs" },
            { icon: <Clock className="w-7 h-7 text-rose-400" />, label: "Slow response times" },
            { icon: <MessageSquareOff className="w-7 h-7 text-rose-400" />, label: "Voicemails never returned" },
            { icon: <AlertTriangle className="w-7 h-7 text-rose-400" />, label: "Leads going to competitors" },
          ].map((card, i) => (
            <div key={i} className="group bg-white/5 border border-slate-900 p-10 rounded-2xl flex flex-col items-center justify-center hover:bg-rose-500/5 hover:border-rose-500/30 hover:-translate-y-2 transition-all cursor-pointer">
              <div className="bg-rose-500/10 p-4 rounded-xl mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <span className="font-semibold text-slate-300 group-hover:text-white">{card.label}</span>
            </div>
          ))}
        </div>

        <div className="text-2xl font-bold flex items-center justify-center gap-3 animate-bounce">
          Here's what happens on <span className="text-cyan-400 border-b-2 border-cyan-400 pb-1">this site</span> instead 
          <ArrowDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default ContactImpact;
