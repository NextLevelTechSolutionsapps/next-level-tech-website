
import React from 'react';
import { Settings, CheckCircle2, Star, Briefcase } from 'lucide-react';

const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-10 shadow-lg">
        <Settings className="w-4 h-4 animate-spin-slow" />
        Our Expertise
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-12 max-w-4xl text-white">
        Why Our Services Work for<br />
        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Security Installers</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          {
            icon: <Star className="w-8 h-8 text-blue-400" />,
            title: "All-in-One Growth Partner",
            desc: "Marketing, automation, and reputation tools under one roof."
          },
          {
            icon: <CheckCircle2 className="w-8 h-8 text-blue-400" />,
            title: "Proven to Increase Installs",
            desc: "Designed to get you more qualified leads and booked jobs."
          },
          {
            icon: <Briefcase className="w-8 h-8 text-blue-400" />,
            title: "Tailored for Your Industry",
            desc: "We don’t use generic strategies; everything is built for security installers."
          }
        ].map((item, i) => (
          <div key={i} className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 flex flex-col items-center group transition-all hover:border-blue-500/50 hover:-translate-y-2">
            <div className="mb-6 bg-blue-500/10 p-4 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHero;
