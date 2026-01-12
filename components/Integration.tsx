
import React from 'react';
import { Globe, Check, ArrowRight, Layers } from 'lucide-react';

const Integration: React.FC = () => {
  return (
    <section id="integration" className="py-32 px-6 flex flex-col items-center bg-[radial-gradient(circle_at_center_top,rgba(74,222,128,0.1)_0%,#020617_70%)] reveal-on-scroll">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-10">
        <Globe className="w-4 h-4" />
        Flexible Integration
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Already Have a Good Website?</h2>
        <span className="text-green-400 text-5xl md:text-6xl font-black block">Perfect.</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full mb-10">
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-green-400/50 hover:bg-green-400/5 transition-all group">
          <div className="w-12 h-12 flex items-center justify-center bg-green-400/10 text-green-400 rounded-xl mb-8 group-hover:bg-green-400 group-hover:text-white transition-colors">
            <Globe className="w-6 h-6" />
          </div>
          <h4 className="text-2xl font-bold mb-6">If your current site:</h4>
          <ul className="space-y-4 mb-8">
            {["Looks professional", "Gets traffic", "Ranks locally"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                <Check className="w-5 h-5 text-green-400 stroke-[3]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="bg-white/5 p-5 rounded-xl font-bold text-center border border-white/5 group-hover:border-green-400/20 transition-all">
            We simply install this system on top of it.
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-blue-400/50 hover:bg-blue-400/5 transition-all group">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-xl mb-8 group-hover:bg-blue-400 group-hover:text-white transition-colors">
            <Layers className="w-6 h-6" />
          </div>
          <h4 className="text-2xl font-bold mb-6">If your site is outdated:</h4>
          <p className="text-slate-500 text-sm mb-6">We can also:</p>
          <ul className="space-y-4">
            {[
              "Replace it with a proven, SEO-ready security installer website",
              "Include service pages, location pages, and conversion pages built to rank and convert"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-300 font-medium leading-tight">
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
        <div className="font-bold text-xl mb-6">Either way, the goal is the same:</div>
        <div className="flex flex-wrap justify-center gap-4">
          {["More leads captured", "Faster follow-up", "More booked estimates"].map((pill, i) => (
            <div key={i} className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-2.5 rounded-full font-bold">
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;
