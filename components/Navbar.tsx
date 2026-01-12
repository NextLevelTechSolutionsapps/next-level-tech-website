
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Database, Search, ShieldCheck, Layout, MessageSquareCode, Star, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services' | 'industries' | 'about' | 'contact' | 'automation-crm' | 'email-sms' | 'local-seo' | 'reputation-management' | 'website-funnel') => void;
  currentPage: string;
  onOpenBooking: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onOpenBooking }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      timeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 150);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [currentPage]);

  const subServices = [
    { id: 'automation-crm', label: 'Automation & CRM', icon: <Database className="w-4 h-4" />, desc: 'Pipeline & lead management' },
    { id: 'email-sms', label: 'Email & SMS Campaigns', icon: <MessageSquareCode className="w-4 h-4" />, desc: 'Automated follow-up sequences' },
    { id: 'local-seo', label: 'Local Search Marketing', icon: <Search className="w-4 h-4" />, desc: 'Nationwide Local SEO strategies' },
    { id: 'reputation-management', label: 'Reputation Management', icon: <Star className="w-4 h-4" />, desc: 'Automated 5-star review growth' },
    { id: 'website-funnel', label: 'Website & Funnel Design', icon: <Layout className="w-4 h-4" />, desc: 'High-converting sales funnels' },
    { id: 'services', label: 'View All Services', icon: <ChevronDown className="w-4 h-4 rotate-[-90deg]" />, desc: 'Explore our full suite' }
  ];

  const handleMobileNavigate = (page: any) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 transition-all duration-300">
        <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-6 py-2.5 bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-full shadow-2xl">
          {/* Logo Section */}
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer overflow-hidden flex-shrink-0" onClick={() => onNavigate('home')}>
            {/* Logo image hidden on mobile, shown on lg screens */}
            <div className="hidden lg:flex h-8 w-8 md:h-10 md:w-10 overflow-hidden items-center justify-center flex-shrink-0">
              <img src="https://assets.zyrosite.com/d95ZyNGQqDC9pWrj/next-level-logo-new-jaSt43SCP2vV002B.png" alt="Logo" className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
            {/* Full text visible on mobile since logo is gone */}
            <span className="font-bold text-base md:text-lg tracking-tight whitespace-nowrap text-white">
              Next Level Tech Solutions
            </span>
          </div>

          {/* Desktop Links - Now correctly centered in the available space */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium text-slate-300 px-4">
            <button onClick={() => onNavigate('home')} className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white font-bold' : ''}`}>Home</button>
            <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button onClick={() => onNavigate('services')} className={`flex items-center gap-1 hover:text-white transition-colors py-2 ${['services', 'automation-crm', 'email-sms', 'local-seo', 'reputation-management', 'website-funnel'].includes(currentPage) ? 'text-white font-bold' : ''}`}>
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-300 transform ${isServicesOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
                <div className="flex flex-col gap-1">
                  {subServices.map((sub) => (
                    <button key={sub.id} onClick={() => { onNavigate(sub.id as any); setIsServicesOpen(false); }} className={`flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-white/5 group text-left ${currentPage === sub.id ? 'bg-white/5 border-l-2 border-blue-500' : ''}`}>
                      <div className="mt-1 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">{sub.icon}</div>
                      <div><div className="text-white font-bold text-sm">{sub.label}</div><div className="text-slate-500 text-[11px] leading-tight mt-0.5">{sub.desc}</div></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => onNavigate('about')} className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-white font-bold' : ''}`}>About Us</button>
            <button onClick={() => onNavigate('industries')} className={`hover:text-white transition-colors ${currentPage === 'industries' ? 'text-white font-bold' : ''}`}>Industries</button>
            <button onClick={() => onNavigate('contact')} className={`hover:text-white transition-colors ${currentPage === 'contact' ? 'text-white font-bold' : ''}`}>Contact</button>
          </div>

          {/* Right Section: Mobile Toggle + CTA */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <button 
              onClick={onOpenBooking} 
              className="hidden lg:block bg-blue-500 hover:bg-blue-600 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all text-white shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap"
            >
              Get Started
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white active:scale-90 transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] lg:hidden bg-slate-950 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-28 pb-10 px-6 overflow-y-auto">
          <div className="space-y-4">
            <button onClick={() => handleMobileNavigate('home')} className={`w-full text-left text-2xl font-bold py-3 transition-colors ${currentPage === 'home' ? 'text-blue-400' : 'text-white'}`}>
              Home
            </button>
            
            <div className="border-t border-white/5 pt-4">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                className={`w-full flex items-center justify-between text-2xl font-bold py-3 transition-colors ${['services', 'automation-crm', 'email-sms', 'local-seo', 'reputation-management', 'website-funnel'].includes(currentPage) ? 'text-blue-400' : 'text-white'}`}
              >
                Services
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'max-h-[600px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-1 gap-2 pl-4 border-l border-blue-500/20">
                  {subServices.map((sub) => (
                    <button 
                      key={sub.id} 
                      onClick={() => handleMobileNavigate(sub.id as any)}
                      className={`flex items-center gap-4 p-3 rounded-xl transition-all ${currentPage === sub.id ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:text-white'}`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${currentPage === sub.id ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-400'}`}>
                        {sub.icon}
                      </div>
                      <span className="font-semibold text-base">{sub.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => handleMobileNavigate('about')} className={`w-full text-left text-2xl font-bold py-3 border-t border-white/5 transition-colors ${currentPage === 'about' ? 'text-blue-400' : 'text-white'}`}>
              About Us
            </button>
            <button onClick={() => handleMobileNavigate('industries')} className={`w-full text-left text-2xl font-bold py-3 border-t border-white/5 transition-colors ${currentPage === 'industries' ? 'text-blue-400' : 'text-white'}`}>
              Industries
            </button>
            <button onClick={() => handleMobileNavigate('contact')} className={`w-full text-left text-2xl font-bold py-3 border-t border-white/5 transition-colors ${currentPage === 'contact' ? 'text-blue-400' : 'text-white'}`}>
              Contact
            </button>
          </div>

          <div className="mt-auto pt-10">
            <button 
              onClick={() => { onOpenBooking(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 py-5 rounded-2xl text-white font-bold text-lg shadow-xl shadow-blue-500/20"
            >
              Book Strategy Session
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-8 flex justify-center gap-6 text-slate-500">
              <span className="text-xs uppercase tracking-widest font-bold">Follow Our Success</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
