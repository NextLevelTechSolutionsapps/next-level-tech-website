
import React from 'react';
import { Database, Search, ShieldCheck, Layout, MessageSquareCode, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesListProps {
  onNavigate: (page: 'automation-crm' | 'email-sms' | 'local-seo' | 'reputation-management' | 'website-funnel') => void;
}

const ServicesList: React.FC<ServicesListProps> = ({ onNavigate }) => {
  const services = [
    {
      id: "automation-crm",
      title: "Automation & CRM",
      subtitle: "Streamline Your Sales Process",
      icon: <Database className="w-7 h-7" />,
      desc: "Stop letting leads slip through the cracks. With our automation and CRM system, every lead is tracked, followed up with automatically, and nurtured until they’re ready to book. Appointment reminders, text and email follow-ups, and centralized contact management keep your business running smoothly.",
      color: "from-blue-500 to-cyan-500",
      clickable: true
    },
    {
      id: "local-seo",
      title: "Local Search Marketing",
      subtitle: "Get Found Where It Matters Most",
      icon: <Search className="w-7 h-7" />,
      desc: "When homeowners and businesses search for “security system installers near me,” you need to show up at the top. We optimize your Google Business Profile and local search presence so you rank higher, appear in maps, and attract customers right in your service area.",
      color: "from-indigo-500 to-purple-500",
      clickable: true
    },
    {
      id: "reputation-management",
      title: "Reputation Management",
      subtitle: "Turn Happy Customers into Your Best Salespeople",
      icon: <ShieldCheck className="w-7 h-7" />,
      desc: "Trust is everything in the security industry. Our system helps you automatically request reviews from satisfied customers, showcase your best feedback, and manage negative reviews before they hurt your business. The result? More credibility and more installs.",
      color: "from-emerald-500 to-teal-500",
      clickable: true
    },
    {
      id: "website-funnel",
      title: "Website & Funnel Design",
      subtitle: "Websites That Convert Visitors into Customers",
      icon: <Layout className="w-7 h-7" />,
      desc: "Your website should do more than look good it should generate leads. We design professional, conversion-focused websites and funnels that highlight your expertise, capture leads instantly, and guide prospects toward booking your services.",
      color: "from-orange-500 to-amber-500",
      clickable: true
    },
    {
      id: "email-sms",
      title: "Email & SMS Campaigns",
      subtitle: "Stay Connected with Customers and Leads",
      icon: <MessageSquareCode className="w-7 h-7" />,
      desc: "Most installs don’t close on the first contact. That’s where smart email and SMS campaigns come in. We create automated campaigns that nurture leads, send promotions, and keep you top of mind so when they’re ready to install, they call you.",
      color: "from-rose-500 to-pink-500",
      clickable: true
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 reveal-on-scroll">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white">Our Services</h2>

        <div className="space-y-16">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`group relative flex flex-col md:flex-row gap-10 items-center bg-slate-900/40 border border-white/5 rounded-[40px] p-10 md:p-14 transition-all duration-500 shadow-2xl ${service.clickable ? 'cursor-pointer hover:border-blue-500/40' : 'hover:border-blue-500/10'}`}
              onClick={() => {
                if (service.clickable) {
                  onNavigate(service.id as any);
                }
              }}
            >
              <div className={`w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-xl shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                  {service.clickable && (
                    <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <h4 className="text-blue-400 font-bold mb-6 text-lg tracking-tight uppercase">{service.subtitle}</h4>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {["100% Automated", "Proven Strategy", "Real-time Tracking"].map((pill, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      {pill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
