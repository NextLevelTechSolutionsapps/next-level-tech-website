
import React from 'react';
import { Zap, Target, Heart } from 'lucide-react';

const AboutValues: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      desc: "We constantly refine our strategies to keep you ahead of the curve.",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Results-Driven",
      desc: "Your success is how we measure ours.",
      icon: <Target className="w-8 h-8 text-white" />,
      color: "from-sky-400 to-sky-600"
    },
    {
      title: "Trust & Transparency",
      desc: "We believe in building honest partnerships and delivering results you can rely on.",
      icon: <Heart className="w-8 h-8 text-white" />,
      color: "from-rose-400 to-rose-600"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[radial-gradient(circle_at_center,rgba(255,152,0,0.15)_0%,#030a16_70%)] reveal-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-slate-400 text-lg">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-slate-700">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${v.color} mb-8 shadow-xl`}>
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{v.title}</h3>
              <p className="text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
