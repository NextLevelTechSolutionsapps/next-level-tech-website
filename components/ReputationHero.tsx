
import React from 'react';
import { ShieldCheck, Star, ArrowRight, Award } from 'lucide-react';

interface ReputationHeroProps {
  onOpenBooking: () => void;
}

const ReputationHero: React.FC<ReputationHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-10">
        <ShieldCheck className="w-4 h-4" />
        Reputation Management
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl text-white">
        Turn Happy Customers into<br />
        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">5-Star Reviews</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
        In the security industry, trust is everything. Our Reputation Management system helps you collect, manage, and showcase reviews that make your business the obvious choice.
      </p>

      <button 
        onClick={onOpenBooking}
        className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl font-black text-xl text-white shadow-2xl shadow-emerald-500/20 hover:-translate-y-1 transition-all flex items-center gap-3"
      >
        Build My Reputation
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-16 flex items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest opacity-60">
        <div className="flex items-center gap-2"><Star className="w-4 h-4 text-emerald-400" /> Trusted Proof</div>
        <div className="flex items-center gap-2"><Award className="w-4 h-4 text-emerald-400" /> Award Winning Presence</div>
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Secure Brand</div>
      </div>
    </section>
  );
};

export default ReputationHero;
