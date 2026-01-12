
import React from 'react';
import { AlertCircle, Star, MessageSquare, ShieldCheck, BarChart3, Bell, CheckCircle, ArrowRight } from 'lucide-react';

interface ReputationDetailsProps {
  onOpenBooking: () => void;
}

const ReputationDetails: React.FC<ReputationDetailsProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-950">
      {/* Problem Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-4xl mx-auto bg-emerald-500/5 border border-emerald-500/10 rounded-[40px] p-10 md:p-16 text-center shadow-2xl shadow-emerald-500/5">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl text-emerald-400 mb-8">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">Your Reputation Can Make or Break a Sale</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Most customers check reviews before hiring a security installer. A few missing or negative reviews can cause them to choose your competitor instead. Without a system in place, asking for reviews can feel awkward and time-consuming.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-emerald-400 text-lg font-black uppercase tracking-widest mb-4">The Solution</h3>
            <h2 className="text-4xl md:text-6xl font-black text-white">Automated Reputation<br /><span className="text-emerald-400">Management</span></h2>
            <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We take the guesswork out of building a 5-star reputation. Our system automatically asks satisfied customers for reviews, directs them to the best platforms, and gives you tools to monitor feedback in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-7 h-7" />,
                title: "Automated Review Requests",
                desc: "Send review invites by text and email after each install."
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Negative Review Protection",
                desc: "Capture unhappy feedback privately before it goes public."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Centralized Dashboard",
                desc: "Track reviews from Google, Facebook, and other platforms."
              },
              {
                icon: <Star className="w-7 h-7" />,
                title: "Reputation Growth Tools",
                desc: "Showcase your best reviews to win new customers."
              },
              {
                icon: <Bell className="w-7 h-7" />,
                title: "Real-Time Alerts",
                desc: "Get notified instantly when new reviews come in."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 hover:border-emerald-500/30 hover:bg-slate-900 transition-all group">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
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
              Why Reputation Matters<br />
              <span className="text-emerald-400">More Than Ever</span>
            </h2>
            <div className="space-y-6">
              {[
                "Build instant trust with potential clients",
                "Outrank competitors with stronger social proof",
                "Improve conversion rates from your website and local search",
                "Turn satisfied customers into ongoing promoters of your business",
                "Protect your brand and online credibility"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 text-lg font-bold">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-700 rounded-[50px] p-12 md:p-20 text-center shadow-2xl shadow-emerald-500/20 overflow-hidden relative">
          <div className="absolute -bottom-10 -left-10 opacity-10 pointer-events-none">
            <Star className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to Own Your<br />Reputation?</h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl font-medium">Don't let a missing review cost you another job. Let's build your 5-star brand today.</p>
            <button 
              onClick={onOpenBooking}
              className="group flex items-center gap-4 bg-white px-12 py-6 rounded-2xl font-black text-2xl text-emerald-600 shadow-2xl hover:scale-[1.02] transition-all"
            >
              Build My Reputation
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReputationDetails;
