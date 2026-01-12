
import React from 'react';
import { Shield, Video, Key, Zap } from 'lucide-react';

const IndustriesGrid: React.FC = () => {
  const industries = [
    {
      title: "Security System Installers",
      desc: "Our specialty: Answer all incoming messages, close jobs, and automate follow-ups for residential and commercial installers.",
      icon: <Shield className="w-6 h-6 text-white" />,
      color: "from-sky-500 to-blue-700",
      shadow: "hover:shadow-blue-500/10"
    },
    {
      title: "CCTV & Surveillance Integrators",
      desc: "Win large commercial bids with advanced local SEO and targeted campaigns.",
      icon: <Video className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-indigo-700",
      shadow: "hover:shadow-indigo-500/10"
    },
    {
      title: "Access Control Specialists",
      desc: "Attract property managers and enterprises seeking advanced access solutions.",
      icon: <Key className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-purple-700",
      shadow: "hover:shadow-purple-500/10"
    },
    {
      title: "Low-Voltage Contractors",
      desc: "Grow recurring service contracts and showcase your technical expertise.",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "from-orange-500 to-orange-700",
      shadow: "hover:shadow-orange-500/10"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 reveal-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Industries Served</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className={`bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-10 transition-all hover:-translate-y-2 border-transparent hover:border-indigo-500/30 ${ind.shadow}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${ind.color} mb-8 shadow-xl`}>
                {ind.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{ind.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-b from-slate-900/50 to-slate-950 border border-slate-800 rounded-3xl p-10 md:p-14 text-center max-w-5xl mx-auto shadow-2xl">
          <p className="text-slate-300 leading-relaxed text-xl font-medium">
            At <strong className="text-white">Next Level Tech Solutions</strong>, we understand that every industry has its own challenges like different buying cycles, service areas, and competition. Our strategies are built to fit those unique needs while staying focused on one goal: helping you win more business through local search marketing, smart automation, and customer retention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
