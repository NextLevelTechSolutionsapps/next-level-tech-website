
import React from 'react';
import { AlertCircle, MapPin, Star, Search, BarChart3, Globe, CheckCircle, ArrowRight, TrendingUp, Layers, PenTool } from 'lucide-react';

interface LocalSEODetailsProps {
  onOpenBooking: () => void;
}

const LocalSEODetails: React.FC<LocalSEODetailsProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-950">
      {/* Problem Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-4xl mx-auto bg-indigo-500/5 border border-indigo-500/10 rounded-[40px] p-10 md:p-16 text-center shadow-2xl shadow-indigo-500/5">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-500/20 rounded-2xl text-indigo-400 mb-8">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">Why Local Search Matters for Security Businesses</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Most people searching for security system installers want a trusted provider nearby. That means Google’s local results are where your customers are looking. If your company doesn’t appear in those results, your competitors will. Our Local SEO strategies make sure your business dominates those local searches in every city you serve nationwide.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 reveal-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-indigo-400 text-lg font-black uppercase tracking-widest mb-4">Dominate Your Local Market</h3>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We handle every part of your Local SEO from optimizing your Google Business Profile to strengthening your presence across directories so your security business ranks higher, gains trust, and drives consistent local calls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-7 h-7" />,
                title: "Directory Listings",
                desc: "We make sure your security business information (NAP) is accurate and consistent across Google, Yelp, Angi, and more."
              },
              {
                icon: <Star className="w-7 h-7" />,
                title: "Review Growth & Management",
                desc: "We help your company earn 5-star reviews from satisfied customers in every market you serve, building credibility and improving your search rankings."
              },
              {
                icon: <MapPin className="w-7 h-7" />,
                title: "Local SEO",
                desc: "We target high-converting search phrases like ‘security installer near me’ and ‘security company in [city]’ so your business ranks wherever your customers are searching."
              },
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Tracking & Reporting",
                desc: "You’ll get detailed reports showing rankings, calls, and sales so you know exactly how your business is performing in every region."
              },
              {
                icon: <Globe className="w-7 h-7" />,
                title: "Google Business Profile Optimization",
                desc: "We fully optimize and manage your Google Business Profiles across all service locations to increase visibility nationwide."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 hover:border-indigo-500/30 hover:bg-slate-900 transition-all group">
                <div className="w-14 h-14 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
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
              Turn Local Searches<br />
              <span className="text-indigo-400">into Installs</span>
            </h2>
            <div className="space-y-6">
              {[
                "Appear at the top of search results when customers look for security installers",
                "Build a 5-star reputation across all your service areas",
                "Increase inbound calls and appointment requests",
                "Outrank competitors in every city you serve",
                "Create a predictable sales flow without relying on paid ads"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-200 text-lg font-bold">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
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
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-700 rounded-[50px] p-12 md:p-20 text-center shadow-2xl shadow-indigo-500/20 overflow-hidden relative">
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <Search className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to Own Your<br />Local Search?</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl font-medium">Stop losing local leads to competitors. Let's dominate your service areas and drive more calls starting today.</p>
            <button 
              onClick={onOpenBooking}
              className="group flex items-center gap-4 bg-white px-12 py-6 rounded-2xl font-black text-2xl text-indigo-600 shadow-2xl hover:scale-[1.02] transition-all"
            >
              Boost My Visibility
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalSEODetails;
