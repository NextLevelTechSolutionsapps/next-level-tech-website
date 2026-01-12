
import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

interface IndustriesHeroProps {
  onOpenBooking: () => void;
}

const IndustriesHero: React.FC<IndustriesHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-white/5 text-blue-400 text-sm font-semibold mb-10 shadow-[0_0_15px_rgba(0,198,255,0.05)]">
        <Briefcase className="w-4 h-4" />
        Industries Served
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-4xl text-white">
        We Power Growth for<br />
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Security & Tech Professionals</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
        From independent security installers to multi-location integrators, our marketing and automation solutions are designed for the unique needs of technology and security businesses.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onOpenBooking}
          className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl font-bold text-white shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2"
        >
          Book a Strategy Call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default IndustriesHero;
