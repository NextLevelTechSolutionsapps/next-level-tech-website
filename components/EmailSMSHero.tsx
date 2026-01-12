
import React from 'react';
import { MessageSquareCode, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

interface EmailSMSHeroProps {
  onOpenBooking: () => void;
}

const EmailSMSHero: React.FC<EmailSMSHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm font-semibold mb-10">
        <MessageSquareCode className="w-4 h-4" />
        Email & SMS Campaigns
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl text-white">
        Stay Connected and<br />
        <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Close More Installs</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
        Our automated email and SMS campaigns keep your prospects engaged and your customers coming back without you lifting a finger.
      </p>

      <button 
        onClick={onOpenBooking}
        className="group px-10 py-5 bg-gradient-to-r from-rose-500 to-rose-700 rounded-2xl font-black text-xl text-white shadow-2xl shadow-rose-500/20 hover:-translate-y-1 transition-all flex items-center gap-3"
      >
        Launch My Campaigns
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-16 flex items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest opacity-60">
        <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> Instant SMS</div>
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Trust Building</div>
        <div className="flex items-center gap-2"><MessageSquareCode className="w-4 h-4" /> Smart Drips</div>
      </div>
    </section>
  );
};

export default EmailSMSHero;
