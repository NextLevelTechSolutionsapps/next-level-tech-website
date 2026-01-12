
import React from 'react';
import { Layout, Laptop, ArrowRight, Zap, Globe } from 'lucide-react';

interface WebsiteFunnelHeroProps {
  onOpenBooking: () => void;
}

const WebsiteFunnelHero: React.FC<WebsiteFunnelHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold mb-10">
        <Layout className="w-4 h-4" />
        Website & Funnel Design
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl text-white">
        Websites That Work as<br />
        <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Hard as You Do</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
        Your website should be more than an online brochure. We design websites and sales funnels built specifically for security system installers to generate sales and close deals.
      </p>

      <button 
        onClick={onOpenBooking}
        className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl font-black text-xl text-white shadow-2xl shadow-orange-500/20 hover:-translate-y-1 transition-all flex items-center gap-3"
      >
        Build My Website
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="mt-16 flex items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest opacity-60">
        <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> SEO Ready</div>
        <div className="flex items-center gap-2"><Laptop className="w-4 h-4" /> Responsive</div>
        <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> Fast Loading</div>
      </div>
    </section>
  );
};

export default WebsiteFunnelHero;
