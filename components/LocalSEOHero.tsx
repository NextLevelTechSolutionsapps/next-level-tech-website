
import React from 'react';
import { Search, MapPin, ArrowRight, Shield } from 'lucide-react';

interface LocalSEOHeroProps {
  onOpenBooking: () => void;
}

const LocalSEOHero: React.FC<LocalSEOHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-10">
        <Search className="w-4 h-4" />
        Local Search Marketing
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl text-white">
        Local SEO Services for<br />
        <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Security Installers</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
        When homeowners and businesses search for a security installer or alarm company, your business should appear first. Our nationwide Local SEO services help security companies across the U.S. rank higher in search results, generate more local calls, and grow their customer base.
      </p>

      <button 
        onClick={onOpenBooking}
        className="group px-10 py-5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl font-black text-xl text-white shadow-2xl shadow-indigo-500/20 hover:-translate-y-1 transition-all flex items-center gap-3"
      >
        Boost My Visibility
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-16 flex items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest opacity-60">
        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Nationwide Coverage</div>
        <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Trusted Ranking</div>
        <div className="flex items-center gap-2"><Search className="w-4 h-4" /> Dominant Presence</div>
      </div>
    </section>
  );
};

export default LocalSEOHero;
