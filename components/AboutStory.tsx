
import React from 'react';
import { FileText, Hammer, Shield, Lightbulb } from 'lucide-react';

const AboutStory: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[radial-gradient(circle_at_10%_20%,rgba(108,92,231,0.15),transparent_50%),radial-gradient(circle_at_90%_80%,rgba(0,212,255,0.15),transparent_50%)] bg-slate-950 reveal-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-white/5 text-slate-400 text-sm font-medium mb-6">
            <FileText className="w-4 h-4 text-blue-500" />
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Who We Are</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-10 flex flex-col justify-center">
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              <strong className="text-white">Next Level Tech Solutions</strong> was founded to solve a common problem: many security system installers are <span className="text-cyan-400 font-semibold">great at their craft</span> but struggle with the business side of things—answering calls, managing customers, and standing out locally.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              We created a set of solutions tailored specifically to security businesses, so you can focus on what you do best—<strong className="text-white">installing and protecting</strong>—while we handle the marketing, automation, and growth systems behind the scenes.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">You focus on:</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  {/* Replaced non-existent 'Tool' icon with 'Hammer' which is standard in lucide-react */}
                  <Hammer className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold text-slate-100">Installing and protecting</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">We handle:</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold text-slate-100">Marketing automation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <span className="text-xl font-semibold text-slate-100">Growth systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
