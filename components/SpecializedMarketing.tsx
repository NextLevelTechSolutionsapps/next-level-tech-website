
import React from 'react';
import { Target, Award, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const SpecializedMarketing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,#020617_80%)] reveal-on-scroll">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Specialized Marketing for<br />
            <span className="text-cyan-400">Technical Trades</span>
          </h2>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[40px] p-10 md:p-16 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl text-slate-200 mb-10 leading-relaxed font-semibold text-center">
              Because we focus on technology and security markets, we understand the sales cycle, the importance of trust, and the competitive landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "Understand the sales cycle",
                "Importance of trust",
                "Competitive landscape",
                "Faster results & better ROI"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-medium text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl text-center">
              <p className="text-cyan-100 text-lg font-medium italic">
                "Our tailored strategies mean faster results and better ROI than one-size-fits-all marketing agencies."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedMarketing;
