
import React, { useEffect } from 'react';

const BookingCalendar: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.nextleveltechsolutions.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
      <iframe 
        src="https://link.nextleveltechsolutions.com/widget/booking/9GYNg65eJcOdqj89SitD" 
        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
        scrolling="no" 
        id="yq5TaSKX8CTBDYZ2U5UO_1768244281136"
        title="Booking Calendar"
      ></iframe>
    </div>
  );
};

export default BookingCalendar;
