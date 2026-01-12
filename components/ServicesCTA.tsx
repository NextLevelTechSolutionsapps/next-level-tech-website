
import React from 'react';
import { ArrowRight, Zap, Target } from 'lucide-react';

interface ServicesCTAProps {
  onOpenBooking: () => void;
}

const ServicesCTA: React.FC<ServicesCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-32 px-6 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2)_0%,#020617_80%)] reveal-on-scroll">
      <div className="max-w-5xl mx-auto bg-slate-900/60 border border-slate-800 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
          <Zap className="w-64 h-64 text-blue-500" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/20">
            <Target className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Stop Letting Leads<br />
            <span className="text-blue-400">Slip Through the Cracks</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
            Ready to turn your website into a high-performance sales engine? Let's implement these services for your business today.
          </p>
          
          <button 
            onClick={onOpenBooking}
            className="group flex items-center gap-4 bg-gradient-to-r from-blue-500 to-indigo-600 px-12 py-6 rounded-2xl font-black text-2xl text-white shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all"
          >
            Get Started Now
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <p className="mt-8 text-slate-500 font-bold uppercase tracking-widest text-sm flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Accepting New Partners for {new Date().toLocaleString('default', { month: 'long' })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
