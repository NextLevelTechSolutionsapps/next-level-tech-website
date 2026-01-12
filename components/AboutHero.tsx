
import React from 'react';
import { Shield, TrendingUp } from 'lucide-react';

interface AboutHeroProps {
  onOpenBooking: () => void;
}

const AboutHero: React.FC<AboutHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center_top,rgba(34,211,238,0.25)_0%,#020617_60%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-semibold mb-10">
        <Shield className="w-4 h-4" />
        About Us
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-4xl text-white">
        Built for Security Installers.<br />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Driven by Growth.</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
        At <strong className="text-slate-100">Next Level Tech Solutions</strong>, we believe every security business deserves access to modern tools and strategies that drive real results. Our mission is simple: help you win more installs, streamline your operations, and scale with confidence.
      </p>

      <button 
        onClick={onOpenBooking}
        className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all flex items-center gap-2"
      >
        <TrendingUp className="w-5 h-5" />
        Schedule a Free Call
      </button>
    </section>
  );
};

export default AboutHero;
