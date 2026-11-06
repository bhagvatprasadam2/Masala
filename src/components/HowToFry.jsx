import React, { useState } from 'react';
import { ShieldCheck, Flame, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowToFry() {
  const [activeTab, setActiveTab] = useState('purity'); // 'purity' or 'culinary'

  const puritySteps = [
    {
      step: '01',
      title: 'Turmeric Water Settling Test',
      icon: '🌿',
      summary: 'Detect synthetic metanil yellow and chalk in 60 seconds',
      instructions: 'Drop 1/2 teaspoon of turmeric powder into a glass of lukewarm water without stirring. Pure turmeric slowly settles down at the bottom, leaving the water clear and pale. Adulterated turmeric with synthetic dyes dissolves rapidly, turning the entire glass cloudy dark yellow.'
    },
    {
      step: '02',
      title: 'Red Chili Natural Pigment Test',
      icon: '🌶️',
      summary: 'Ensure zero Sudan red dyes, brick powder, or artificial oils',
      instructions: 'Sprinkle a pinch of red chili powder onto a glass of still water. Pure chili floats and slowly drifts down without releasing artificial color streaks. If red color immediately bleeds through the water in bright red ribbons, it indicates added synthetic food dyes.'
    },
    {
      step: '03',
      title: 'Sindhav Salt Mineral Clarity Test',
      icon: '🪨',
      summary: 'Verify authentic Himalayan rock salt vs bleached table salt',
      instructions: 'Dissolve a spoonful of Sindhav salt in pure water. It will dissolve smoothly, leaving subtle natural pink mineral trace sediment at the bottom. Refined table salt contains artificial anti caking chemicals that leave a chemical film.'
    },
    {
      step: '04',
      title: 'Sonth Unbleached Purity Check',
      icon: '✨',
      summary: 'Check for toxic chemical lime or sulphur bleaching',
      instructions: 'Observe the color and aroma. Bhagvat Prasadam Sonth Powder has a natural warm golden tan hue and a sharp pungent earthy fragrance. Avoid chalky white powders, which have been chemically bleached with lime water.'
    }
  ];

  const culinarySteps = [
    {
      step: '01',
      title: 'Golden Turmeric Milk Haldi Doodh',
      icon: '🥛',
      summary: 'Enhance curcumin bioavailability with black pepper and ghee',
      instructions: 'Gently simmer 1 cup of warm cow milk with half a teaspoon of pure turmeric powder, a tiny pinch of crushed black pepper, and 1/4 tsp ghee. Drink before bed for restful sleep, deep immunity, and joint comfort.'
    },
    {
      step: '02',
      title: 'Sizzling Cow Ghee Spice Tadka',
      icon: '🔥',
      summary: 'Release aromatic volatile oils without scorching delicate spices',
      instructions: 'Heat 1 to 2 tablespoons of pure cow ghee on medium flame. Crackle cumin or mustard seeds, then turn flame to low before stirring in Bhagvat Prasadam Chili and Turmeric Powder. Swirl for 10 to 15 seconds and pour immediately over hot dal, khichdi, or curries.'
    },
    {
      step: '03',
      title: 'Vrat and Farali Fasting Seasoning',
      icon: '🥣',
      summary: 'Wholesome Satvik nourishment with eighty four Himalayan minerals',
      instructions: 'Replace common salt with Sindhav Salt during Navratri, Ekadashi, and Maha Shivratri. Sprinkle over Sabudana Khichdi, Moraiyo, roasted makhana, or fresh cucumber and fruit salads for superior digestion and electrolyte replenishment.'
    },
    {
      step: '04',
      title: 'Ayurvedic Sonth Immunity Kadha',
      icon: '🍵',
      summary: 'Soothing throat remedy and digestive fire stimulant',
      instructions: 'Boil 2 cups of water with 1/3 tsp Bhagvat Prasadam Sonth Powder, 4 to 5 fresh tulsi leaves, and a cinnamon stick for 5 minutes. Strain and stir in pure raw honey once warm. Drink in the morning to kindle digestive agni and soothe seasonal cold.'
    }
  ];

  const currentSteps = activeTab === 'purity' ? puritySteps : culinarySteps;

  return (
    <section id="purity-guide" className="py-14 sm:py-20 bg-white border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#164e3d] font-1 tracking-tight">
            Kitchen Purity Tests and Culinary Guide
          </h2>
          <p className="text-[#55695f] text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Learn how to verify authentic unadulterated spices at home and unlock maximum flavor and Ayurvedic wellness in every meal.
          </p>

          {/* Toggle Buttons */}
          <div className="inline-flex p-1.5 bg-[#f8faf8] rounded-2xl border border-[#e2ebe5] mt-6">
            <button
              onClick={() => setActiveTab('purity')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'purity'
                  ? 'bg-[#164e3d] text-white shadow-xs'
                  : 'text-[#182620] hover:text-[#164e3d]'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#c27803]" />
              <span>Home Purity Tests (4 Steps)</span>
            </button>

            <button
              onClick={() => setActiveTab('culinary')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'culinary'
                  ? 'bg-[#164e3d] text-white shadow-xs'
                  : 'text-[#182620] hover:text-[#164e3d]'
              }`}
            >
              <Flame className="w-4 h-4 text-[#c27803]" />
              <span>Culinary & Ayurvedic Rituals</span>
            </button>
          </div>
        </div>

        {/* Steps Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8faf8] rounded-3xl p-6 sm:p-7 border border-[#e2ebe5] relative overflow-hidden group hover:border-[#164e3d] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-5xl font-black text-[#eaf2ee] absolute top-4 right-4 pointer-events-none group-hover:text-[#c8ded4] transition-colors">
                  {item.step}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-[#eaf2ee] text-[#164e3d] flex items-center justify-center text-xl mb-4 shadow-2xs">
                  {item.icon}
                </div>

                <h3 className="font-bold text-[#182620] text-base leading-snug mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#c27803] font-semibold mb-3">
                  {item.summary}
                </p>

                <p className="text-xs text-[#55695f] leading-relaxed">
                  {item.instructions}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#e2ebe5] flex items-center gap-1.5 text-[11px] font-bold text-[#164e3d]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c27803]" />
                <span>Bhagvat Prasadam Certified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
