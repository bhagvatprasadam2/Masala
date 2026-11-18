import React from 'react';
import { Sun, ShieldCheck, Sparkles, Truck } from 'lucide-react';

export default function HighlightsStrip() {
  const highlights = [
    {
      icon: Sun,
      title: '100 Percent Sun Cured Wholesome Spices',
      description: 'Harvested at peak maturity and slow cured under natural sunshine without electrical dehydrators'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Artificial Dyes or Fillers',
      description: 'Tested free from metanil yellow, lead chromate, Sudan red, corn starch, or chemical polishes'
    },
    {
      icon: Sparkles,
      title: 'Traditional Stone Ground',
      description: 'Slow milled at gentle temperatures to protect natural essential oils, fragrance, and curcumin'
    },
    {
      icon: Truck,
      title: 'Fresh Delivery Across India',
      description: 'Sealed airtight in multi layer aroma barrier packs to preserve freshness straight to your doorstep'
    }
  ];

  return (
    <section id="why-spices" className="py-8 bg-[#f8faf8] border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div 
                key={i} 
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e2ebe5] shadow-xs hover:border-[#164e3d] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#164e3d] text-[#c27803] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#182620] text-sm leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-xs text-[#55695f] mt-1 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
