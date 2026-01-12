
import React from 'react';
import { AlertCircle, Terminal, Layers, MessageSquare, Calendar, TrendingUp, CheckCircle, UserPlus, Cog, Play, ArrowRight } from 'lucide-react';

interface AutomationCRMDetailsProps {
  onOpenBooking: () => void;
}

const AutomationCRMDetails: React.FC<AutomationCRMDetailsProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-950">
      {/* Problem Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-4xl mx-auto bg-red-500/5 border border-red-500/10 rounded-[40px] p-10 md:p-16 text-center shadow-2xl shadow-red-500/5">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-2xl text-red-500 mb-8">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">Messages Can Slip Through the Cracks</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Security system installers often struggle to follow up with messages quickly enough. Missed calls, forgotten appointments, and manual tracking can cost you thousands in lost opportunities.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-blue-500 text-lg font-black uppercase tracking-widest mb-4">The Solution?</h3>
            <h2 className="text-4xl md:text-6xl font-black text-white">Your All-in-One Customer<br /><span className="text-blue-400">Management Hub</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-7 h-7" />,
                title: "Multi-Channel Lead Capture",
                desc: "Automatically add messages from your website, forms, calls, and social channels."
              },
              {
                icon: <MessageSquare className="w-7 h-7" />,
                title: "Automated Follow-Ups",
                desc: "Texts, emails, and voicemail drops keep prospects engaged."
              },
              {
                icon: <Calendar className="w-7 h-7" />,
                title: "Direct Calendar Booking",
                desc: "Let customers book directly on your calendar without back-and-forth."
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Pipeline Management",
                desc: "Track sales through each stage of your sales pipeline."
              },
              {
                icon: <AlertCircle className="w-7 h-7" />,
                title: "Eliminate No-Shows",
                desc: "No-shows and missed opportunities become a thing of the past."
              },
              {
                icon: <CheckCircle className="w-7 h-7" />,
                title: "Automated Sales Movement",
                desc: "Move sales automatically from “New” to “Won” when they book or pay."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 hover:border-blue-500/30 hover:bg-slate-900 transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-slate-900/40 reveal-on-scroll">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 leading-tight">
              Why Automation<br />
              <span className="text-blue-400">& CRM Changes Everything</span>
            </h2>
            <div className="space-y-6">
              {[
                "Save hours every week on manual follow-ups",
                "Convert more messages into paying installs",
                "Keep every customer organized and easy to manage",
                "Look more professional with timely communication",
                "Grow consistently without hiring extra admin staff"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 text-lg font-bold">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full flex flex-col gap-4">
             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Terminal className="w-32 h-32 text-blue-500" />
                </div>
                <h4 className="text-blue-400 text-sm font-black uppercase mb-4 tracking-tighter">Growth Engine</h4>
                <p className="text-2xl font-bold text-white leading-snug">Scaling your security business doesn't require more staff—it requires smarter systems.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[50px] p-12 md:p-20 text-center shadow-2xl shadow-blue-500/20 overflow-hidden relative">
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <Play className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to Automate<br />Your Success?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl font-medium">Stop wasting hours on manual follow-ups. Let us build your high-performance growth engine today.</p>
            <button 
              onClick={onOpenBooking}
              className="group flex items-center gap-4 bg-white px-12 py-6 rounded-2xl font-black text-2xl text-blue-600 shadow-2xl hover:scale-[1.02] transition-all"
            >
              Book Your Free Demo
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationCRMDetails;
