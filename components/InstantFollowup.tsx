
import React from 'react';
import { Sparkles, ArrowUpCircle, MousePointer2, HelpCircle, PhoneCall } from 'lucide-react';

const InstantFollowup: React.FC = () => {
  return (
    <section className="py-32 px-6 flex justify-center overflow-hidden bg-[radial-gradient(circle_at_center_top,rgba(79,209,237,0.15)_0%,#020617_70%)]">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        <div className="reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            24/7 Response
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            ⚡ Instant Follow-Up<br />
            <span className="text-cyan-400">Around the Clock</span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            The moment someone reaches out, they get an <strong className="text-white">immediate response</strong>. No waiting. No voicemail. No lost opportunity.
          </p>
          
          <p className="text-slate-300 font-semibold mb-6">The system can:</p>
          <ul className="space-y-4 mb-10">
            {[
              "Answer common questions (services, pricing, areas)",
              "Qualify homeowner vs business leads",
              "Push serious prospects toward booking a consultation"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-400">
                <ArrowUpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-white/5 border-l-4 border-cyan-400 p-6 rounded-r-xl text-lg text-slate-200">
            This means your website works like a <span className="text-cyan-400 font-bold">full-time office assistant</span> — nights, weekends, and holidays included.
          </div>
        </div>

        <div className="relative p-10 bg-white/5 border border-white/10 rounded-3xl reveal-on-scroll">
          <div className="text-center text-slate-400 text-sm mb-8">When someone:</div>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { icon: <FileTextIcon />, label: "Fills out a form" },
              { icon: <MousePointer2 className="w-8 h-8" />, label: "Clicks 'Contact Us'" },
              { icon: <HelpCircle className="w-8 h-8" />, label: "Asks a question" },
              { icon: <PhoneCall className="w-8 h-8" />, label: "Calls after hours" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center hover:bg-white/10 hover:border-cyan-400/30 transition-all cursor-pointer group">
                <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-sm font-medium text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl p-6 text-center relative text-white">
            <h4 className="text-xl font-bold">They get an immediate response</h4>
            <span className="text-sm opacity-90 font-medium">Within seconds, not hours</span>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-950 border-4 border-cyan-400 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

const FileTextIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export default InstantFollowup;
