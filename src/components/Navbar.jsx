import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenBulkOrder }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileMenuOpen]);

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/?scrollTo=${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { label: 'Our Spices', id: 'hero' },
    { label: 'Why Pure Spices?', id: 'why-spices' },
    { label: 'Purity Tests & Uses', id: 'purity-guide' },
    { label: 'Our Story', id: 'about' },
    { label: 'Custom Box', id: 'order-funnel' },
    { label: 'Blogs & Wellness', id: 'blog-section' },
    { label: 'FAQ', id: 'faq-section' },
  ];

  return (
    <header className={`sticky top-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#e2ebe5]' 
        : 'bg-white py-3.5 border-b border-[#e2ebe5]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Tagline */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          >
            <img
              src={logoImg}
              alt="Bhagvat Prasadam Heritage Pure Spices Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
            />
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#164e3d]">
                  MASALA
                </span>
                <span className="font-gujarati text-sm font-bold text-[#c27803] bg-[#fdf6e9] px-1.5 py-0.5 rounded border border-[#f5dfb8]">
                  મસાલા
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-[#55695f] tracking-wider uppercase">
                Bhagvat Prasadam Heritage
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#182620] hover:text-[#164e3d] font-semibold text-sm transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#164e3d] hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Single Buy Now Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="inline-flex items-center gap-2 bg-[#164e3d] hover:bg-[#113e30] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy Spices</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-xl bg-[#f8faf8] text-[#182620] hover:bg-[#eaf2ee] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2ebe5] px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2.5 px-3 rounded-lg text-sm font-bold text-[#182620] hover:bg-[#eaf2ee] hover:text-[#164e3d] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#e2ebe5] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBulkOrder();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-center border border-[#164e3d] text-[#164e3d] rounded-xl hover:bg-[#eaf2ee]"
              >
                Bulk / Temple / Catering Inquiry
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
