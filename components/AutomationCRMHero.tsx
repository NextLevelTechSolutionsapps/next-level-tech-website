
import React from 'react';
import { Database, ShieldCheck, ArrowRight } from 'lucide-react';

interface AutomationCRMHeroProps {
  onOpenBooking: () => void;
}

const AutomationCRMHero: React.FC<AutomationCRMHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-10">
        <Database className="w-4 h-4" />
        Automation & CRM
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl text-white">
        Never Lose<br />
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Another Customer</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
        Our Automation & CRM system keeps your pipeline full, your customers engaged, and your schedule booked so you can focus on installs instead of answering calls.
      </p>

      <button 
        onClick={onOpenBooking}
        className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl font-black text-xl text-white shadow-2xl shadow-blue-500/20 hover:-translate-y-1 transition-all flex items-center gap-3"
      >
        Book a Free Demo
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-16 flex items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest opacity-60">
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Secure Pipeline</div>
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 24/7 Follow-up</div>
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Automated Bookings</div>
      </div>
    </section>
  );
};

export default AutomationCRMHero;
