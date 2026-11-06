import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, Sun } from 'lucide-react';
import { TRUST_STATS } from '../data/products';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-20 bg-white border-b border-[#e2ebe5]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-1 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#164e3d] tracking-tight leading-tight">
            Pure Indian Spices, Crafted the Sacred Way
          </h2>

          <p className="font-2 text-xl sm:text-2xl text-[#c27803] mt-2 font-medium">
            Inspired by Nilkanthdham Poicha Traditions and 100 Percent Satvik Purity
          </p>

          <p className="text-[#55695f] leading-relaxed text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            In Indian culinary culture, spices are revered as divine nourishment. At Bhagvat Prasadam, inspired by the sacred traditions of Nilkanthdham Poicha, we prepare kitchen spices the way our grandmothers intended: whole sun cured spices stone ground at gentle temperatures with zero synthetic dyes, lead chromate, chalk, or chemical preservatives. Pure, honest, and healing.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#e2ebe5] bg-[#f8faf8] p-4 flex items-center justify-center">
                <a
                  href="https://www.bhagvatprasadam.com/products/turmeric-powder-pure-and-potent-spice-by-bhagvat-prasadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Pure Turmeric on Bhagvat Prasadam"
                  className="block w-full h-full cursor-pointer flex items-center justify-center group"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0673/6723/9829/files/turmeric_powder.png?v=1782468218"
                    alt="Bhagvat Prasadam Pure Spices Heritage"
                    className="w-full h-[360px] sm:h-[420px] object-contain rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Pillars & Philosophy */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#e2ebe5] hover:border-[#164e3d] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center font-bold mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#164e3d]" />
                </div>
                <h3 className="font-bold text-[#182620] text-sm mb-1">
                  Uncompromised Purity
                </h3>
                <p className="text-xs text-[#55695f] leading-relaxed">
                  Lab tested and guaranteed zero lead chromate, metanil yellow, Sudan dyes, or corn starch fillers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#e2ebe5] hover:border-[#164e3d] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-5 h-5 text-[#c27803]" />
                </div>
                <h3 className="font-bold text-[#182620] text-sm mb-1">
                  Cold Stone Grinding
                </h3>
                <p className="text-xs text-[#55695f] leading-relaxed">
                  Milled slowly at low RPM to ensure natural volatile oils and active curcuminoids are never burnt.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#e2ebe5] hover:border-[#164e3d] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center font-bold mb-3">
                  <Sun className="w-5 h-5 text-[#c27803]" />
                </div>
                <h3 className="font-bold text-[#182620] text-sm mb-1">
                  Sun Cured Rhizomes and Pods
                </h3>
                <p className="text-xs text-[#55695f] leading-relaxed">
                  Natural solar curing enhances the natural aroma, vibrant color pigments, and rich taste without dehydration machinery.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#e2ebe5] hover:border-[#164e3d] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center font-bold mb-3">
                  <HeartHandshake className="w-5 h-5 text-[#164e3d]" />
                </div>
                <h3 className="font-bold text-[#182620] text-sm mb-1">
                  100 Percent Satvik and Vrat Safe
                </h3>
                <p className="text-xs text-[#55695f] leading-relaxed">
                  Hygienically handled and completely unrefined, making them ideal for sacred temple offerings, Upvas, and daily family nourishment.
                </p>
              </div>

            </div>

            {/* Trust Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#e2ebe5]">
              {TRUST_STATS.map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-[#eaf2ee]/50 border border-[#c8ded4]">
                  <p className="text-lg sm:text-xl font-black text-[#164e3d]">{stat.value}</p>
                  <p className="text-[11px] font-bold text-[#182620] leading-tight">{stat.label}</p>
                  <p className="text-[10px] text-[#55695f] mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
