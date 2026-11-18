import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  return (
    <aside aria-label="WhatsApp Chat" className="fixed bottom-5 right-5 z-40">
      <a
        href="https://wa.me/918850011652?text=Hello%20Bhagvat%20Prasadam!%20I%20would%20like%20to%20inquire%20and%20order%20Pure%20Indian%20Spices%20(Turmeric,%20Chili,%20Sindhav%20Salt,%20Sonth)."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
}
