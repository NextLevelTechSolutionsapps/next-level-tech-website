
import React from 'react';
import { Calendar, CheckCircle, Shield, ArrowRight } from 'lucide-react';

interface AboutNextStepProps {
  onOpenBooking: () => void;
}

const AboutNextStep: React.FC<AboutNextStepProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 px-6 bg-[radial-gradient(circle_at_bottom_center,rgba(0,229,255,0.2)_0%,#01060f_70%)] text-center reveal-on-scroll">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-10">
          <Calendar className="w-4 h-4" />
          Next Step
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
          Want to See This on<br />
          <span className="text-cyan-400">Your Own Website?</span>
        </h2>

        <p className="text-lg text-slate-400 mb-8">If you want to:</p>

        <div className="flex flex-col items-start gap-4 mb-12 text-left bg-slate-900/40 p-8 rounded-3xl border border-white/5">
          {[
            "Stop missing leads",
            "See all conversations in one place",
            "Turn your website into a 24/7 sales assistant"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-slate-200 text-lg font-medium">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <p className="text-slate-400 mb-6">Then the next step is simple:</p>

        <button 
          onClick={onOpenBooking}
          className="group flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-600 px-10 py-5 rounded-full font-bold text-xl text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all mb-12"
        >
          <Calendar className="w-6 h-6" />
          Book a Quick Demo
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="text-slate-500 text-sm mb-16 italic">
          If it makes sense, we move forward.<br />
          If it doesn't, no pressure — you'll know fast.
        </div>

        <div className="w-full max-w-lg bg-gradient-to-b from-white/5 to-cyan-500/5 border border-white/10 rounded-2xl p-10 transition-all hover:border-cyan-500/30 hover:scale-[1.02] cursor-default">
          <Shield className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <p className="text-xl font-bold text-white leading-relaxed">
            <strong>Your website should protect your leads.</strong><br />
            <span className="text-cyan-400">This one does.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNextStep;
