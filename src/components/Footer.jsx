import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import logoImg from '../assets/logo.png';

export default function Footer({ onOpenPolicy, onOpenBulkOrder }) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/?scrollTo=${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-[#164e3d] text-white border-t border-[#113e30]">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Bhagvat Prasadam Heritage Pure Spices Logo"
                className="w-14 h-14 object-contain drop-shadow-sm"
              />
              <div>
                <span className="font-1 text-2xl font-extrabold text-white">
                  MASALA
                </span>
                <span className="font-gujarati text-sm font-bold text-[#c27803] ml-1.5 bg-[#113e30] px-1.5 py-0.5 rounded border border-[#c27803]/40">
                  મસાલા
                </span>
                <p className="text-[10px] uppercase tracking-wider text-[#eaf2ee] font-semibold">
                  Bhagvat Prasadam Heritage
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#eaf2ee] leading-relaxed">
              Pure Turmeric Powder, Authentic Red Chili, Sindhav Salt, and Pure Sonth Powder inspired by sacred Nilkanthdham Poicha traditions. Stone ground and delivered fresh to homes across India.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#c27803] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Artificial Dyes and 100 Percent Satvik Purity</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#c27803]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#eaf2ee]">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left">
                  Our Pure Spices (5 Varieties)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-spices')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left">
                  Why Pure Stone Ground?
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('purity-guide')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left">
                  Kitchen Purity Tests & Uses
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left">
                  Our Sacred Heritage
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('order-funnel')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left">
                  Custom Spice Box Builder
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('blog-section')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left">
                  Blogs & Wellness Guides
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq-section')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={onOpenBulkOrder} className="hover:text-white transition-colors cursor-pointer font-semibold text-[#c27803] text-left">
                  Bulk & Temple Inquiries ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Official Store Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#c27803]">
              Store Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#eaf2ee]">
              <li>
                <a
                  href="https://www.bhagvatprasadam.com/products/turmeric-powder-pure-and-potent-spice-by-bhagvat-prasadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c27803] transition-colors block truncate"
                >
                  Turmeric Powder
                </a>
              </li>
              <li>
                <a
                  href="https://www.bhagvatprasadam.com/products/chili-powder-authentic-indian-chili-powder-intensely-flavorful-spice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c27803] transition-colors block truncate"
                >
                  Red Chili Powder
                </a>
              </li>
              <li>
                <a
                  href="https://www.bhagvatprasadam.com/products/authentic-indian-red-chili-powder-1-kg-pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c27803] transition-colors block truncate"
                >
                  Chili 1 KG Barni Jar
                </a>
              </li>
              <li>
                <a
                  href="https://www.bhagvatprasadam.com/products/sindhav-salt-pure-and-mineral-rich-himalayan-salt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c27803] transition-colors block truncate"
                >
                  Sindhav Rock Salt
                </a>
              </li>
              <li>
                <a
                  href="https://www.bhagvatprasadam.com/products/sonth-powder-aromatic-ginger-spice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c27803] transition-colors block truncate"
                >
                  Sonth Ginger Powder
                </a>
              </li>
              <li className="pt-2">
                <button onClick={() => onOpenPolicy('terms')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left block">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('shipping')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left block">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('return')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left block">
                  Return Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-[#c27803] transition-colors cursor-pointer text-left block">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#c27803]">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#eaf2ee]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#c27803] flex-shrink-0 mt-0.5" />
                <a href="tel:+918850011652" className="hover:text-[#c27803] transition-colors">
                  +91 88500 11652
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 fill-[#c27803] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/918850011652?text=Hello%20Bhagvat%20Prasadam!%20I%20want%20to%20order%20pure%20spices."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c27803] transition-colors"
                >
                  WhatsApp Ordering Available
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#c27803] flex-shrink-0 mt-0.5" />
                <a href="mailto:support@bhagvatprasadam.com" className="hover:text-[#c27803] transition-colors">
                  support@bhagvatprasadam.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c27803] flex-shrink-0 mt-0.5" />
                <span>
                  Gujarat, India (Inspired by Nilkanthdham Poicha)
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://www.bhagvatprasadam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#fdf6e9] bg-[#113e30] border border-[#c27803]/40 px-3 py-2 rounded-xl hover:bg-[#c27803] hover:text-white transition-colors"
              >
                <span>Visit Official Store</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#113e30] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#eaf2ee]">
          <p>© {currentYear} Bhagvat Prasadam. All rights reserved. Powered by <a href="https://megascale.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#a7a7a7] ">Megascale</a></p>
        </div>

      </div>
    </footer>
  );
}
