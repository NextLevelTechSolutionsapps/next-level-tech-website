
import React from 'react';
import { Layers, MessageSquare, Smartphone, PhoneMissed, Monitor, CheckCircle2, XCircle } from 'lucide-react';

const LeadsFeature: React.FC = () => {
  return (
    <section id="leads" className="py-32 px-6 bg-[radial-gradient(circle_at_center_top,rgba(79,166,255,0.15)_0%,#020617_70%)] reveal-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            Game-Changer
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            All Your Leads. One Place.<br />
            <span className="text-blue-400">No Guessing.</span>
          </h2>
          <p className="flex items-center justify-center gap-3 text-xl text-slate-400 font-medium">
            <Monitor className="w-6 h-6 text-blue-400" />
            The Conversations Area — Every interaction in one clean feed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/70 border border-slate-800 rounded-[32px] p-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-8">All channels in one place:</h3>
            
            <div className="space-y-4">
              {[
                { icon: <MessageSquare className="w-5 h-5" />, label: "Website chat" },
                { icon: <Smartphone className="w-5 h-5" />, label: "Text messages" },
                { icon: <PhoneMissed className="w-5 h-5" />, label: "Missed-call follow-ups" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 flex items-center gap-4 border border-white/5">
                  <div className="text-blue-400">{item.icon}</div>
                  <span className="font-semibold text-slate-200">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-slate-500 italic text-sm">
              Instead of hunting through emails, phones, and sticky notes...
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">You can:</h3>
              <ul className="space-y-4">
                {[
                  "See every lead in one spot",
                  "Read the full conversation history",
                  "Pick up where the system left off",
                  "Know exactly who's hot and needs follow-up"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/5 border border-red-500/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">No more:</h3>
              <ul className="space-y-4">
                {[
                  "Did anyone respond to this?",
                  "Did they already call?",
                  "Did we forget this lead?"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400 font-medium">
                    <XCircle className="w-5 h-5 text-red-500/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-slate-800 p-6 rounded-2xl text-center font-bold text-white shadow-xl">
              You'll always know what's happening and what's next.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsFeature;
