
import React from 'react';
import { Shield, Zap, MessageSquare, Lock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center_top,rgba(44,193,255,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-blue-500/5 text-blue-400 text-sm font-medium mb-10">
        <Shield className="w-4 h-4" />
        For Security Installers
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-4xl">
        The Smart Website That<br />
        <span className="text-blue-400">Protects Your Leads</span><br />
        — Automatically
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
        Your website shouldn't just look good. It should <span className="text-white font-semibold">answer</span>, <span className="text-white font-semibold">follow up</span>, and <span className="text-white font-semibold">protect every lead</span> the moment they reach out.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          { icon: <Zap className="w-4 h-4 text-blue-400" />, label: "Instant Response" },
          { icon: <MessageSquare className="w-4 h-4 text-blue-400" />, label: "Every Lead Captured" },
          { icon: <Lock className="w-4 h-4 text-blue-400" />, label: "Every Conversation Tracked" },
        ].map((feat, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-white/5 text-slate-300 text-sm">
            {feat.icon}
            {feat.label}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button 
          onClick={onOpenBooking}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all"
        >
          Book a Quick Demo
        </button>
      </div>

      <p className="text-sm text-slate-600">
        Works with your existing website or we build you a new one
      </p>
    </section>
  );
};

export default Hero;
