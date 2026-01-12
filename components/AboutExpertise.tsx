
import React from 'react';
import { Target, XCircle, CheckCircle2, Box, Clock, Users } from 'lucide-react';

const AboutExpertise: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden reveal-on-scroll">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            A Partner Who Knows<br />
            <span className="text-purple-400">Your Industry</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-rose-500/5 border border-rose-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-rose-400" />
                <h3 className="text-xl font-bold">Most Agencies</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Take a one-size-fits-all approach. Generic tactics that waste your time and money.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-bold">Not Us</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                By focusing on security system installers, we've learned the unique challenges you face:
              </p>

              <div className="grid gap-3">
                {[
                  { icon: <Box className="w-5 h-5" />, label: "Complex projects" },
                  { icon: <Clock className="w-5 h-5" />, label: "Long sales cycles" },
                  { icon: <Users className="w-5 h-5" />, label: "Stiff competition" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl">
                    <div className="text-cyan-400">{item.icon}</div>
                    <span className="text-slate-300 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-[40px]"></div>
            <div className="relative h-full bg-slate-900/90 border border-white/10 rounded-3xl p-10 flex flex-col justify-center">
              <p className="text-2xl font-semibold mb-8 leading-snug">
                That focus allows us to build strategies that actually work for your business.
              </p>
              <div className="bg-slate-800/50 p-8 rounded-2xl">
                <p className="text-lg text-slate-400">
                  Not generic tactics that waste your time and money—but <span className="text-cyan-400 font-bold">proven strategies</span> designed specifically for security installers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;
