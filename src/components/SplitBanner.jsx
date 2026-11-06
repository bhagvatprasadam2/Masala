import React from 'react';
import { Sun, Flame, ArrowRight } from 'lucide-react';

export default function SplitBanner({ onExploreProducts }) {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Traditional Solar Drying Heritage */}
          <div className="rounded-3xl bg-[#164e3d] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xs min-h-[320px] group border border-[#113e30]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#113e30] text-[#c27803] text-xs font-bold px-3 py-1 rounded-full border border-[#c27803]/40">
                <Sun className="w-3.5 h-3.5 text-[#c27803]" />
                <span>The Saurashtra Solar Tradition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-1 leading-snug">
                Preserving Nature's Harvest Under Golden Sunlight
              </h3>
              <p className="text-[#eaf2ee] text-sm leading-relaxed max-w-md">
                In Gujarat’s rural villages, the peak summer sun is revered as a preserver of flavors. Fresh seasonal vegetables are seasoned with rock salt, buttermilk, and spices, then naturally sun cured over weeks to lock in authentic aroma.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 text-xs font-bold bg-[#c27803] hover:bg-[#a36302] text-white px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <span>View Sun Dried Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: 30-Second Quick Magic */}
          <div className="rounded-3xl bg-[#c27803] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xs min-h-[320px] group border border-[#a36302]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#a36302] text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                <Flame className="w-3.5 h-3.5 text-white" />
                <span>Instant Meal Elevation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-1 leading-snug">
                Shatteringly Crisp in Just 30 Seconds
              </h3>
              <p className="text-white/90 text-sm leading-relaxed max-w-md">
                Simply slide into medium oil or toss into an air fryer. In less than half a minute, you have the crispy, savory soulmate for everyday Khichdi, Dal Bhat, Thepla, or your evening cup of tea.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-3">
              <a
                href="#how-to-prepare"
                className="inline-flex items-center gap-2 text-xs font-bold bg-[#164e3d] hover:bg-[#113e30] text-white px-4 py-2.5 rounded-xl transition-colors"
              >
                <span>See How to Fry and Air Fry</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
