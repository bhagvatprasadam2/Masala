import React, { useState } from 'react';
import { X, Check, Send, ShoppingBag, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

/* 1. Quick View Modal */
export function QuickViewModal({ product, isOpen, onClose }) {
  const [selectedImg, setSelectedImg] = useState(0);

  if (!isOpen || !product) return null;

  const images = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.mainImage || product.image];

  const buyNowUrl = `https://wa.me/918850011652?text=Hello%20Bhagvat%20Prasadam!%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.gujaratiName)}).%20Please%20share%20details.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overscroll-contain touch-none animate-fade-in">
      <div 
        onClick={onClose}
        className="absolute inset-0 touch-none"
      />
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overscroll-contain p-6 sm:p-8 shadow-2xl border border-[#e2ebe5] z-10">
        
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f8faf8] hover:bg-[#eaf2ee] text-[#182620] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Gallery */}
          <div className="space-y-3">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#f8faf8] border border-[#e2ebe5] p-3 flex items-center justify-center">
              <a
                href={product.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Buy ${product.name} on Bhagvat Prasadam`}
                className="block w-full h-full cursor-pointer flex items-center justify-center"
              >
                <img
                  src={images[selectedImg] || product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0 cursor-pointer p-1 bg-[#f8faf8] ${
                      selectedImg === idx ? 'border-[#164e3d] ring-1 ring-[#164e3d]' : 'border-[#e2ebe5] opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Info */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="font-gujarati text-xs sm:text-sm font-bold text-[#c27803]">
                  {product.gujaratiName}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#164e3d] font-1 leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-[#c27803] font-medium font-2 mt-0.5">
                {product.subheading}
              </p>
            </div>

            {/* Pack Size */}
            <div className="flex items-center gap-2 py-2 border-y border-[#e2ebe5]">
              <span className="text-xs font-bold text-[#182620]">Pack Size:</span>
              <span className="text-xs font-bold text-[#164e3d] bg-[#eaf2ee] px-2.5 py-0.5 rounded border border-[#c8ded4]">
                {product.weight}
              </span>
            </div>

            <p className="text-xs text-[#55695f] leading-relaxed">
              {product.description}
            </p>

            {/* Ingredients preview */}
            <div className="pt-2 border-t border-[#e2ebe5]">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#164e3d] mb-1.5">
                Purity & Ingredients:
              </p>
              <div className="flex flex-wrap gap-1">
                {product.ingredients.slice(0, 3).map((ing, i) => (
                  <span key={i} className="text-[10px] bg-[#f8faf8] border border-[#e2ebe5] text-[#182620] px-2 py-0.5 rounded font-medium">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-2">
              <a
                href={product.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#164e3d] hover:bg-[#113e30] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Buy Now</span>
              </a>

              <a
                href={buyNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#f8faf8] hover:bg-[#eaf2ee] text-[#164e3d] border border-[#164e3d] py-3 px-4 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#164e3d]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

/* 2. Bulk Order / Commercial Procurement Modal */
export function BulkOrderModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    purpose: 'Temple / Community Kitchen / Ashram',
    quantity: '10kg to 50kg',
    notes: ''
  });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*Bulk Pure Spices Inquiry - Bhagvat Prasadam*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Purpose:* ${encodeURIComponent(form.purpose)}%0A*Estimated Quantity:* ${encodeURIComponent(form.quantity)}%0A*Spices Required:* ${encodeURIComponent(form.notes || 'Turmeric, Chili, Sindhav Salt, Sonth')}`;
    window.open(`https://wa.me/918850011652?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overscroll-contain touch-none animate-fade-in">
      <div onClick={onClose} className="absolute inset-0 touch-none" />
      <div className="relative bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto overscroll-contain p-6 sm:p-8 shadow-2xl border border-[#e2ebe5] z-10">
        
        <button
          onClick={onClose}
          aria-label="Close bulk order modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f8faf8] hover:bg-[#eaf2ee] text-[#182620] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center font-bold">
                📦
              </div>
              <div>
                <h3 className="font-1 text-xl font-bold text-[#182620] leading-snug">
                  Bulk Spices & Commercial Procurement
                </h3>
                <p className="text-xs text-[#55695f]">
                  Special wholesale pricing for temples, catering, restaurants & joint families
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#182620] mb-1">Your Name / Organization Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Ramesh Patel / Temple Trust"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2ebe5] text-xs focus:border-[#164e3d] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#182620] mb-1">Mobile / WhatsApp Number *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="e.g. 9876543210"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2ebe5] text-xs focus:border-[#164e3d] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#182620] mb-1">Purpose</label>
                <select
                  value={form.purpose}
                  onChange={e => setForm({ ...form, purpose: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#e2ebe5] text-xs focus:border-[#164e3d] outline-none bg-white"
                >
                  <option value="Temple / Ashram / Prasadam">Temple / Ashram Prasadam</option>
                  <option value="Catering / Wedding Feasts">Catering / Wedding Feasts</option>
                  <option value="Restaurant / Dining Hall">Restaurant / Dining Hall</option>
                  <option value="Joint Family Bulk Order">Joint Family Bulk Order</option>
                  <option value="Retail / Export">Retail / Export</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#182620] mb-1">Approximate Quantity</label>
                <select
                  value={form.quantity}
                  onChange={e => setForm({ ...form, quantity: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-[#e2ebe5] text-xs focus:border-[#164e3d] outline-none bg-white"
                >
                  <option value="5kg to 10kg">5kg to 10kg</option>
                  <option value="10kg to 50kg">10kg to 50kg</option>
                  <option value="50kg to 200kg">50kg to 200kg</option>
                  <option value="200kg+">200kg+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#182620] mb-1">Specific Spices Required</label>
              <textarea
                rows="2"
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
                placeholder="e.g. 20kg Turmeric Powder, 20kg Red Chili 1KG Barni Jars, 10kg Sindhav Salt..."
                className="w-full px-3.5 py-2 rounded-xl border border-[#e2ebe5] text-xs focus:border-[#164e3d] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#164e3d] hover:bg-[#113e30] text-white py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Submit and Connect on WhatsApp</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-[#182620] text-lg">Inquiry Dispatched!</h4>
            <p className="text-xs text-[#55695f] max-w-xs mx-auto">
              Our bulk spice supply team will connect with you promptly on WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="bg-[#164e3d] text-white font-bold px-4 py-2 rounded-xl text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

/* 3. Policy Modal */
export function PolicyModal({ type, isOpen, onClose }) {
  if (!isOpen || !type) return null;

  const contentMap = {
    return: {
      title: 'Purity Guarantee & Return Policy',
      effectiveDate: '01/01/2026',
      body: `
        <h3>100% Purity & Authenticity Guarantee</h3>
        <p>At Bhagvat Prasadam, we stand behind the unadulterated purity of every spice we produce. All our spices — Turmeric, Red Chili, Sindhav Salt, and Sonth — are guaranteed free from synthetic dyes, lead chromate, chalk, and chemical preservatives.</p>
        
        <h3>Eligibility for Replacement</h3>
        <p>Because spices are consumable food products:</p>
        <ul>
          <li>The pouch or barni jar must be in its original condition.</li>
          <li>In the rare event of transit damage or packaging defect, photograph the parcel and message us within <strong>48 hours</strong> of delivery.</li>
        </ul>
        
        <h3>Immediate Resolution</h3>
        <p>WhatsApp our customer care at <strong>+91 88500 11652</strong> or email <strong>support@bhagvatprasadam.com</strong> for swift replacement.</p>
      `
    },
    shipping: {
      title: 'Pan-India Shipping Policy',
      effectiveDate: '01/01/2026',
      body: `
        <h3>Pan-India Express Delivery</h3>
        <p>We deliver fresh batches of pure Indian spices across 25,000+ pincodes across India via reliable express logistics partners.</p>
        
        <h3>Dispatch & Delivery Time</h3>
        <p>Standard delivery takes 2 to 4 business days in Gujarat & Maharashtra, and 4 to 6 business days across other states.</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      effectiveDate: '01/01/2026',
      body: `
        <h3>Natural Agricultural Sourcing</h3>
        <p>Bhagvat Prasadam spices are 100% agricultural products harvested at seasonal maturity. Slight natural variations in deep golden or red hues reflect unadulterated natural batches with zero artificial standardization dyes.</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      effectiveDate: '01/01/2026',
      body: `
        <h3>Data Confidentiality</h3>
        <p>We treat your personal details with the utmost care and respect. Your phone numbers, email, and addresses are utilized solely to process and dispatch your spice orders. We never sell or share customer data with third parties.</p>
      `
    }
  };

  const current = contentMap[type] || contentMap.return;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overscroll-contain touch-none animate-fade-in">
      <div onClick={onClose} className="absolute inset-0 touch-none" />
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto overscroll-contain p-6 sm:p-8 shadow-2xl border border-[#e2ebe5] z-10">
        
        <button
          onClick={onClose}
          aria-label="Close policy modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f8faf8] hover:bg-[#eaf2ee] text-[#182620] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#e2ebe5] pb-4 mb-4">
          <h2 className="text-2xl font-bold text-[#164e3d] font-1">
            {current.title}
          </h2>
          <p className="text-xs text-[#55695f] mt-1">
            Effective Date: {current.effectiveDate}, Bhagvat Prasadam Heritage
          </p>
        </div>

        <div 
          className="prose prose-sm text-[#182620] leading-relaxed space-y-3"
          dangerouslySetInnerHTML={{ __html: current.body }}
        />

        <div className="pt-6 border-t border-[#e2ebe5] mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#164e3d] text-white px-5 py-2 rounded-xl text-xs font-bold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
