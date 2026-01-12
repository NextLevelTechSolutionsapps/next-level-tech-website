
import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface IndustriesCTAProps {
  onOpenBooking: () => void;
}

const IndustriesCTA: React.FC<IndustriesCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-32 px-6 flex flex-col items-center text-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0%,#020617_70%)] reveal-on-scroll">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <button className="flex items-center gap-2 px-4 py-2 border border-blue-900 bg-slate-900/50 rounded-full text-sky-400 text-sm font-medium mb-10 transition-all hover:bg-sky-500/10 hover:border-sky-400">
          <MessageCircle className="w-4 h-4" />
          Let's Connect
        </button>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Not Sure Where You Fit?</h2>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
          If your business provides security or technology solutions, even if you're not listed above—let's talk. We'll design a plan that matches your market.
        </p>

        <button 
          onClick={onOpenBooking}
          className="group flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 px-10 py-5 rounded-xl font-bold text-lg text-white shadow-xl hover:shadow-sky-500/20 hover:-translate-y-1 transition-all"
        >
          Let's Talk About Your Business
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default IndustriesCTA;
