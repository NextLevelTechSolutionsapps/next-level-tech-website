
import React from 'react';
import { AlertCircle, Mail, Smartphone, MousePointer2, Clock, BarChart3, CheckCircle, ArrowRight, Target, PenTool, TrendingUp } from 'lucide-react';

interface EmailSMSDetailsProps {
  onOpenBooking: () => void;
}

const EmailSMSDetails: React.FC<EmailSMSDetailsProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-950">
      {/* Problem Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-4xl mx-auto bg-rose-500/5 border border-rose-500/10 rounded-[40px] p-10 md:p-16 text-center shadow-2xl shadow-rose-500/5">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-500/20 rounded-2xl text-rose-500 mb-8">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">Calls Go Cold Without Follow-Up</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Security system prospects often compare multiple installers. If you’re not staying in touch, they’ll choose someone else. Manual follow-ups are time consuming and easy to forget, costing you jobs and revenue.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-rose-500 text-lg font-black uppercase tracking-widest mb-4">The Solution</h3>
            <h2 className="text-4xl md:text-6xl font-black text-white">Automated Email &<br /><span className="text-rose-400 text-5xl md:text-7xl">Text Marketing</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-7 h-7" />,
                title: "Smart Email Sequences",
                desc: "Welcome new customers, send reminders, and share offers automatically."
              },
              {
                icon: <Smartphone className="w-7 h-7" />,
                title: "Instant SMS Follow-Ups",
                desc: "Respond to inquiries in seconds to increase appointment bookings."
              },
              {
                icon: <MousePointer2 className="w-7 h-7" />,
                title: "Behavior-Based Triggers",
                desc: "Messages go out when prospects click, open, or visit key pages."
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: "Automated Scheduling",
                desc: "Set it and forget it; we handle timing for maximum impact."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Performance Tracking",
                desc: "See open rates, click rates, and conversions in one dashboard."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 hover:border-rose-500/30 hover:bg-slate-900 transition-all group">
                <div className="w-14 h-14 bg-rose-500/10 text-rose-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-all">
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
              Turn More Inquiries<br />
              <span className="text-rose-400">into Installations</span>
            </h2>
            <div className="space-y-6">
              {[
                "Convert calls faster with near-instant responses",
                "Keep your brand top-of-mind while customers research",
                "Educate prospects on your services and build trust",
                "Increase repeat business and referrals with post-install follow-ups",
                "Save time with fully automated campaigns"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 text-lg font-bold">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 flex-shrink-0">
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
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-rose-600 to-pink-700 rounded-[50px] p-12 md:p-20 text-center shadow-2xl shadow-rose-500/20 overflow-hidden relative">
          <div className="absolute -bottom-10 -left-10 opacity-10 pointer-events-none">
            <Mail className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to Automate<br />Your Follow-Ups?</h2>
            <p className="text-xl text-rose-100 mb-12 max-w-2xl font-medium">Don't let another hot lead go cold. Let's launch your automated engagement engine today.</p>
            <button 
              onClick={onOpenBooking}
              className="group flex items-center gap-4 bg-white px-12 py-6 rounded-2xl font-black text-2xl text-rose-600 shadow-2xl hover:scale-[1.02] transition-all"
            >
              Launch My Campaigns
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSMSDetails;
