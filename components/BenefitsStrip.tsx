
import React from 'react';
import { Shield, TrendingUp, Clock, DollarSign } from 'lucide-react';

const BenefitsStrip: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center border-y border-white/5 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.05)_0%,#020617_80%)] reveal-on-scroll">
      <h2 className="text-cyan-400 text-lg font-bold uppercase tracking-wider mb-10">Benefits For Security Installers...</h2>
      
      <div className="flex flex-wrap justify-center gap-10 md:gap-16">
        {[
          { icon: <Shield className="w-6 h-6 text-cyan-400" />, label: "Never Miss a Lead" },
          { icon: <TrendingUp className="w-6 h-6 text-cyan-400" />, label: "Increase Conversions" },
          { icon: <Clock className="w-6 h-6 text-cyan-400" />, label: "Save Time" },
          { icon: <DollarSign className="w-6 h-6 text-cyan-400" />, label: "Boost Revenue" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            {item.icon}
            <span className="text-lg font-extrabold text-white whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsStrip;
