import React, { useState, useEffect } from 'react';
import { ChevronDown, Utensils, Check, HelpCircle } from 'lucide-react';

export default function IngredientsAndFaq({ activeProduct }) {
  const p = activeProduct;
  const [openIndex, setOpenIndex] = useState(null);

  // Keep FAQs closed by default, including when switching active product
  useEffect(() => {
    setOpenIndex(null);
  }, [activeProduct?.id]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-12 sm:py-16 bg-white border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#164e3d] font-1">
            Ingredients & FAQs for {p.name}
          </h2>
          <p className="text-[#55695f] text-sm sm:text-base mt-2">
            Single-origin purity, wholesome preparation, and everyday culinary tips for your family meals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Ingredients & Pairings Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Ingredients Card */}
            <div className="bg-[#f8faf8] rounded-3xl p-6 sm:p-8 border border-[#e2ebe5]">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e2ebe5]">
                <div className="w-10 h-10 rounded-xl bg-[#164e3d] text-white flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-[#c27803]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#182620]">
                    Clean Ingredients
                  </h3>
                  <p className="text-xs text-[#c27803] font-semibold">
                    Zero Artificial Colors, Starch, or Preservatives
                  </p>
                </div>
              </div>

              {/* Ingredients List */}
              <div className="mt-5 space-y-2.5">
                {p.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#182620] bg-white px-3.5 py-2.5 rounded-xl border border-[#e2ebe5]">
                    <div className="w-5 h-5 rounded-full bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-medium">{ing}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Accordion FAQs */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#164e3d] mb-1">
              <HelpCircle className="w-4 h-4 text-[#c27803]" />
              <span>Frequently Asked Questions:</span>
            </div>

            {p.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-colors overflow-hidden ${
                    isOpen
                      ? 'bg-[#f8faf8] border-[#164e3d]'
                      : 'bg-white border-[#e2ebe5] hover:border-[#164e3d]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className={`text-sm sm:text-base font-bold ${
                      isOpen ? 'text-[#164e3d]' : 'text-[#182620]'
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isOpen ? 'bg-[#164e3d] text-white rotate-180' : 'bg-[#f8faf8] text-[#55695f]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#55695f] leading-relaxed border-t border-[#e2ebe5]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {/* General FAQs Box */}
            <div className="p-5 rounded-2xl bg-[#eaf2ee] border border-[#c8ded4] flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="text-sm font-bold text-[#164e3d]">Have questions or need bulk catering packs?</p>
                <p className="text-xs text-[#55695f] mt-0.5">We reply instantly on WhatsApp with product and shipping details!</p>
              </div>
              <a
                href={`https://wa.me/918850011652?text=Hello%20Bhagvat%20Prasadam!%20I%20have%20a%20question%20about%20${encodeURIComponent(p.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#164e3d] hover:bg-[#113e30] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex-shrink-0 transition-colors shadow-xs"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
