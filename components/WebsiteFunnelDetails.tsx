
import React from 'react';
import { AlertCircle, Laptop, CheckCircle, Target, Layout, ArrowRight } from 'lucide-react';

interface WebsiteFunnelDetailsProps {
  onOpenBooking: () => void;
}

const WebsiteFunnelDetails: React.FC<WebsiteFunnelDetailsProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-950">
      {/* Problem Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-4xl mx-auto bg-orange-500/5 border border-orange-500/10 rounded-[40px] p-10 md:p-16 text-center shadow-2xl shadow-orange-500/5">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-2xl text-orange-400 mb-8">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">Most Security Websites Don’t Bring in Customers</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Many installers rely on outdated websites that don’t rank in search, load slowly, or fail to convince visitors to call. Without a clear design and strategy, you’re losing business to competitors with stronger online presence.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-orange-400 text-lg font-black uppercase tracking-widest mb-4">The Solution</h3>
            <h2 className="text-4xl md:text-6xl font-black text-white">Conversion-Focused Website<br /><span className="text-orange-400">& Funnel Design</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="w-7 h-7" />,
                title: "Custom Website Design",
                desc: "Mobile-friendly, fast, and built to impress your potential clients."
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Sales-Capturing Funnels",
                desc: "Landing pages designed to convert visitors into calls and appointments."
              },
              {
                icon: <Layout className="w-7 h-7" />,
                title: "Integrated Call-to-Actions",
                desc: "Click-to-call, instant quote forms, and booking calendars built right in."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 hover:border-orange-500/30 hover:bg-slate-900 transition-all group">
                <div className="w-14 h-14 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
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
              Websites That Drive<br />
              <span className="text-orange-400">Real Growth</span>
            </h2>
            <div className="space-y-6">
              {[
                "Generate more messasges from online traffic",
                "Showcase your services and past installs professionally",
                "Build credibility with prospects who are shopping around",
                "Capture sales even after business hours",
                "Scale faster with automated funnels that nurture new prospects"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 text-lg font-bold">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
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
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-600 to-amber-700 rounded-[50px] p-12 md:p-20 text-center shadow-2xl shadow-orange-500/20 overflow-hidden relative">
          <div className="absolute -bottom-10 -left-10 opacity-10 pointer-events-none">
            <Layout className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to Build Your<br />24/7 Sales Machine?</h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl font-medium">Stop losing sales to better-looking competitors. Let's build a website that works as hard as you do.</p>
            <button 
              onClick={onOpenBooking}
              className="group flex items-center gap-4 bg-white px-12 py-6 rounded-2xl font-black text-2xl text-orange-600 shadow-2xl hover:scale-[1.02] transition-all"
            >
              Build My Website
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteFunnelDetails;
