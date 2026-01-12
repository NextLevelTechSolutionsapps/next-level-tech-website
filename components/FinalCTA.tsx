
import React from 'react';
import { Calendar, CheckCircle, Shield, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-32 px-6 flex flex-col items-center text-center bg-[radial-gradient(circle_at_center_top,rgba(0,229,255,0.15)_0%,#020617_70%)] reveal-on-scroll">
      
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-bold mb-10">
        <Calendar className="w-4 h-4" />
        Next Step
      </div>

      <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1]">
        Want to See This on<br />
        <span className="text-cyan-400">Your Own Website?</span>
      </h2>

      <p className="text-xl font-bold text-slate-400 mb-10">If you want to:</p>

      <ul className="inline-flex flex-col items-start gap-6 mb-16 max-w-2xl text-left">
        {[
          "Stop missing leads",
          "See all conversations in one place",
          "Turn your website into a 24/7 sales assistant"
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-4 text-xl font-bold text-slate-200">
            <CheckCircle className="w-7 h-7 text-cyan-400 flex-shrink-0" strokeWidth={3} />
            {item}
          </li>
        ))}
      </ul>

      <p className="text-xl text-slate-400 mb-8 font-medium">Then the next step is simple:</p>

      <button 
        onClick={onOpenBooking}
        className="group flex items-center gap-4 bg-gradient-to-r from-cyan-400 to-blue-600 px-12 py-6 rounded-full font-black text-2xl text-white shadow-[0_4px_25px_rgba(0,198,255,0.4)] hover:shadow-[0_8px_35px_rgba(0,198,255,0.6)] hover:-translate-y-1 transition-all mb-10"
      >
        <Calendar className="w-7 h-7" />
        Book a Quick Demo
        <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
      </button>

      <div className="text-slate-500 font-bold text-lg mb-20 leading-relaxed">
        If it makes sense, we move forward.<br />
        If it doesn't, no pressure — you'll know fast.
      </div>

      <div className="relative w-full max-w-2xl bg-gradient-to-b from-white/5 to-cyan-400/10 border border-white/10 rounded-[32px] p-12 hover:border-cyan-400/40 transition-all shadow-2xl">
        <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-6" strokeWidth={1.5} />
        <p className="text-2xl font-bold text-white mb-2">
          Your website should protect your leads.
        </p>
        <span className="text-3xl font-black text-cyan-400">This one does.</span>
      </div>

    </section>
  );
};

export default FinalCTA;
