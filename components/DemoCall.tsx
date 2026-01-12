
import React from 'react';
import { Phone, Headphones, HelpCircle, MessageSquare, CheckCircle2 } from 'lucide-react';

const DemoCall: React.FC = () => {
  return (
    <section id="demo" className="py-32 px-6 flex flex-col items-center bg-[radial-gradient(circle_at_center_top,rgba(34,197,94,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
        Call the Demo Number — <br />
        <span className="text-green-500 block mt-2">Experience It Yourself</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl w-full mb-20">
        <div className="bg-slate-900/80 border border-slate-800 rounded-[40px] p-10 md:p-16 flex flex-col justify-center items-center shadow-2xl shadow-green-500/10 hover:border-green-500 transition-all group">
          <p className="text-red-500 font-extrabold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            Call This Number Right Now:
          </p>
          <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-6 tracking-widest group-hover:scale-105 transition-transform">
            720-459-4793
          </div>
          <p className="text-slate-500 text-sm mb-10 text-center">This number is connected directly to the Voice AI demo.</p>
          <a href="tel:7204594793" className="flex items-center gap-3 bg-green-500 hover:bg-green-600 px-10 py-5 rounded-2xl font-black text-xl text-white shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1">
            <Phone className="w-6 h-6 fill-current" />
            Call Now
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-2xl font-bold mb-8">When you call, you'll experience:</p>
          
          <div className="space-y-4 mb-10">
            {[
              { icon: <Headphones className="w-6 h-6 text-green-500" />, text: "How the AI answers" },
              { icon: <HelpCircle className="w-6 h-6 text-green-500" />, text: "How it asks questions" },
              { icon: <MessageSquare className="w-6 h-6 text-green-500" />, text: "How it handles real conversations" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 bg-slate-900/50 p-6 rounded-2xl border border-transparent hover:bg-slate-800 hover:border-slate-700 transition-all cursor-default">
                {item.icon}
                <span className="text-lg font-bold text-slate-200">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-8 rounded-[32px] border border-white/5 space-y-4">
            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              This is exactly what your prospects experience when they contact your website.
            </p>
            <p className="text-slate-500 font-bold">No video. No explanation. Just real-world proof.</p>
          </div>
        </div>
      </div>

      <h3 className="text-3xl font-extrabold text-center mb-10 text-white/80">Imagine Every Missed Call Working Like This</h3>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="bg-red-950/20 border border-red-900/30 p-10 rounded-3xl hover:scale-[1.02] transition-transform">
          <p className="text-red-400 font-black text-xl mb-6">Instead of:</p>
          <ul className="space-y-3 font-bold text-slate-400 text-lg">
            <li>• Voicemail</li>
            <li>• Lost opportunities</li>
            <li>• "I'll call them back later"</li>
          </ul>
        </div>
        <div className="bg-green-950/20 border border-green-900/30 p-10 rounded-3xl hover:scale-[1.02] transition-transform shadow-green-900/10">
          <p className="text-green-400 font-black text-xl mb-6">You get:</p>
          <ul className="space-y-3 font-bold text-slate-200 text-lg">
            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" /> Conversations captured</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" /> Leads organized</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" /> Revenue protected</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DemoCall;
