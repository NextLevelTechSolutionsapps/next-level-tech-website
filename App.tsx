import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ContactImpact from './components/ContactImpact';
import InstantFollowup from './components/InstantFollowup';
import BenefitsStrip from './components/BenefitsStrip';
import LeadsFeature from './components/LeadsFeature';
import Integration from './components/Integration';
import InstallerReality from './components/InstallerReality';
import FinalCTA from './components/FinalCTA';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';

// Page Components
import IndustriesHero from './components/IndustriesHero';
import IndustriesGrid from './components/IndustriesGrid';
import SpecializedMarketing from './components/SpecializedMarketing';
import IndustriesCTA from './components/IndustriesCTA';
import AboutHero from './components/AboutHero';
import AboutMission from './components/AboutMission';
import AboutStory from './components/AboutStory';
import AboutValues from './components/AboutValues';
import AboutExpertise from './components/AboutExpertise';
import AboutNextStep from './components/AboutNextStep';
import ContactSection from './components/ContactSection';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';
import ServicesCTA from './components/ServicesCTA';
import AutomationCRMHero from './components/AutomationCRMHero';
import AutomationCRMDetails from './components/AutomationCRMDetails';
import EmailSMSHero from './components/EmailSMSHero';
import EmailSMSDetails from './components/EmailSMSDetails';
import LocalSEOHero from './components/LocalSEOHero';
import LocalSEODetails from './components/LocalSEODetails';
import ReputationHero from './components/ReputationHero';
import ReputationDetails from './components/ReputationDetails';
import WebsiteFunnelHero from './components/WebsiteFunnelHero';
import WebsiteFunnelDetails from './components/WebsiteFunnelDetails';

type PageType = 'home' | 'services' | 'industries' | 'about' | 'contact' | 'automation-crm' | 'email-sms' | 'local-seo' | 'reputation-management' | 'website-funnel' | 'blog';

const SEO_DATA: Record<PageType, { title: string; description: string }> = {
  'home': {
    title: "Local Search Marketing for Security Installers",
    description: "Next Level Tech Solutions empowers security system installers to thrive through automation, effective reputation management, professional websites, and targeted local search marketing strategies. Elevate your business today!"
  },
  'about': {
    title: "About Next Level Tech Solutions | Helping Security Installers Succeed With Local Search Marketing",
    description: "At Next Level Tech Solutions, we specialize in local search marketing for security camera installers. Our services include CRM automation, reputation management, and conversion-focused websites to help you connect with clients and grow your business effectively."
  },
  'blog': {
    title: "Expert Tips for Local Search Marketing",
    description: "Discover expert insights on local search marketing, automation, and growth strategies tailored for security system installers. Stay updated with the latest articles and guides to enhance your business performance."
  },
  'contact': {
    title: "Contact Next Level Tech Solutions for Automation",
    description: "Discover cutting-edge tech solutions for automation, local search marketing, and lead-generation services tailored for security system installers. Schedule a call or send a message today to elevate your business!"
  },
  'industries': {
    title: "Industries We Serve Security System Installers and More | Next Level Tech Solutions",
    description: "Discover how Next Level Tech Solutions empowers security system installers and related businesses to grow through local search marketing, automation, and effective reputation management strategies."
  },
  'services': {
    title: "Local Search Marketing for Security Camera Installers | Next Level Tech Solutions",
    description: "Next Level Tech Solutions enhances your visibility on Google Maps, with local search marketing and builds your reputation. Our services are tailored for security camera installers seeking effective lead conversion and customer engagement."
  },
  'automation-crm': {
    title: "Automation & CRM for Security Installers | Next Level Tech Solutions",
    description: "Discover how Next Level Tech Solutions empowers security installers with follow-ups on automation, efficient appointment scheduling, and a smart CRM system to enhance productivity and close more jobs effortlessly."
  },
  'email-sms': {
    title: "Automated Email Campaigns & SMS Campaigns for Security Installers | Next Level Tech Solutions",
    description: "Discover how Next Level Tech Solutions empowers security installers to convert more leads through automated email campaigns and text campaigns. Stay top-of-mind, nurture your prospects, and close more jobs effortlessly."
  },
  'local-seo': {
    title: "Local Search Marketing for Security Installers | Next Level Tech Solutions",
    description: "Boost your visibility on Google Maps and local searches. Next Level Tech Solutions specializes in helping security system installers improve their rankings, attract local leads, and grow their business effectively with local search marketing."
  },
  'reputation-management': {
    title: "Reputation Management for Security Installers | Next Level Tech Solutions",
    description: "Build trust and enhance your online presence with automated reputation management. Next Level Tech Solutions empowers security installers to collect reviews and protect their reputation, leading to more installs and customer loyalty."
  },
  'website-funnel': {
    title: "Website & Sales Funnel Design for Security Installers | Next Level Tech Solutions",
    description: "Discover how Next Level Tech Solutions can help security installers build high-converting websites and sales funnel design that attract more leads and turn visitors into loyal customers."
  }
};

const App: React.FC = () => {
  const getPageFromPath = (): PageType => {
    const path = window.location.pathname.replace('/', '') as PageType;
    return SEO_DATA[path] ? path : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromPath());
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = SEO_DATA[currentPage];
    if (meta) {
      document.title = meta.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = "description";
        newMeta.content = meta.description;
        document.head.appendChild(newMeta);
      }
    }

    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    window.scrollTo(0, 0);
    return () => observer.disconnect();
  }, [currentPage]);

  const navigate = (page: PageType) => {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    setCurrentPage(page);
  };

  const openBooking = () => setIsBookingOpen(true);

  const renderContent = () => {
    switch (currentPage) {
      case 'services':
        return (
          <>
            <ServicesHero />
            <ServicesList onNavigate={navigate} />
            <ServicesCTA onOpenBooking={openBooking} />
          </>
        );
      case 'automation-crm':
        return (
          <>
            <AutomationCRMHero onOpenBooking={openBooking} />
            <AutomationCRMDetails onOpenBooking={openBooking} />
          </>
        );
      case 'email-sms':
        return (
          <>
            <EmailSMSHero onOpenBooking={openBooking} />
            <EmailSMSDetails onOpenBooking={openBooking} />
          </>
        );
      case 'local-seo':
        return (
          <>
            <LocalSEOHero onOpenBooking={openBooking} />
            <LocalSEODetails onOpenBooking={openBooking} />
          </>
        );
      case 'reputation-management':
        return (
          <>
            <ReputationHero onOpenBooking={openBooking} />
            <ReputationDetails onOpenBooking={openBooking} />
          </>
        );
      case 'website-funnel':
        return (
          <>
            <WebsiteFunnelHero onOpenBooking={openBooking} />
            <WebsiteFunnelDetails onOpenBooking={openBooking} />
          </>
        );
      case 'industries':
        return (
          <>
            <IndustriesHero onOpenBooking={openBooking} />
            <IndustriesGrid />
            <SpecializedMarketing />
            <IndustriesCTA onOpenBooking={openBooking} />
          </>
        );
      case 'about':
        return (
          <>
            <AboutHero onOpenBooking={openBooking} />
            <AboutMission />
            <AboutStory />
            <AboutValues />
            <AboutExpertise />
            <AboutNextStep onOpenBooking={openBooking} />
          </>
        );
      case 'contact':
        return <ContactSection />;
      case 'blog':
        return (
          <div className="pt-40 pb-20 text-center min-h-screen bg-slate-950">
            <h1 className="text-5xl font-bold mb-6">Expert Tips for Local Search Marketing</h1>
            <p className="text-slate-400 text-xl">Our blog is launching soon. Stay tuned for expert insights!</p>
          </div>
        );
      default:
        return (
          <>
            <Hero onOpenBooking={openBooking} />
            <ContactImpact />
            <InstantFollowup />
            <BenefitsStrip />
            <LeadsFeature />
            <Integration />
            <InstallerReality />
            <FinalCTA onOpenBooking={openBooking} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 font-sans">
      <Navbar onNavigate={navigate} currentPage={currentPage} onOpenBooking={openBooking} />
      {renderContent()}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <footer className="py-12 px-6 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Next Level Tech Solutions. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); navigate('contact'); }}>Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default App;