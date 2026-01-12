
import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import BookingCalendar from './BookingCalendar';

const ContactSection: React.FC = () => {
  return (
    <section id="nl-contact-section" className="bg-[#020611] text-white py-32 px-6 flex justify-center reveal-on-scroll">
      <div className="w-full max-w-4xl flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500 bg-sky-500/10 text-sky-400 text-sm font-semibold mb-6">
          <MessageSquare className="w-4 h-4" />
          Get in Touch
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
          Let's Talk About Growing<br />
          <span className="text-sky-400">Your Security Business</span>
        </h2>

        <p className="text-slate-400 text-center text-xl mb-2">Have questions or ready to start?</p>
        <p className="text-slate-500 text-center text-base mb-12">Schedule a call or reach out to us</p>

        <div className="flex flex-wrap w-full gap-5 mb-12">
          <div className="flex-1 min-w-[280px] bg-[#0f172a] border border-[#1e293b] p-6 rounded-2xl flex items-center gap-5 transition-all hover:border-sky-500/50 group">
            <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm text-slate-400 font-medium mb-1">Call Us</h4>
              <p className="text-lg font-bold text-white">720-459-4793</p>
            </div>
          </div>

          <div className="flex-1 min-w-[280px] bg-[#0f172a] border border-[#1e293b] p-6 rounded-2xl flex items-center gap-5 transition-all hover:border-sky-500/50 group overflow-hidden">
            <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <h4 className="text-sm text-slate-400 font-medium mb-1">Email Us</h4>
              <p className="text-sm md:text-lg font-bold text-white leading-tight break-words">
                partnerships@nextleveltech<wbr />solutions.com
              </p>
            </div>
          </div>
        </div>

        {/* Replaced form with BookingCalendar */}
        <div className="w-full bg-[#0b1221] border border-[#1e293b] rounded-3xl p-4 md:p-8 shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)]">
          <BookingCalendar />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
