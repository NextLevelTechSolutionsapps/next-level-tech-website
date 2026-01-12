
import React from 'react';
import { Target, Sparkles } from 'lucide-react';

const AboutMission: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,#02040a_70%)] reveal-on-scroll">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 text-sky-400 text-sm font-medium mb-10 shadow-lg">
          <Target className="w-4 h-4" />
          Our Mission
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          Empowering Security<br />
          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">Professionals</span>
        </h2>

        <div className="bg-slate-900/50 backdrop-blur-md border border-sky-500/15 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start text-left">
          <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-slate-400 leading-relaxed">
              Our mission is to give security system installers the <strong className="text-white">same level of marketing sophistication</strong> that big companies use, but at a cost and scale that works for local businesses.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              We're here to level the playing field with <span className="text-cyan-400 font-semibold">automation, reputation building</span>, and <span className="text-cyan-400 font-semibold">targeted local marketing strategies</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
