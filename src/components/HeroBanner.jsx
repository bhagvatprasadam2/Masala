import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function HeroBanner({ activeProduct }) {
  const p = activeProduct;
  const bannerImage = p.transparentImage || p.bannerImage || (p.gallery && p.gallery[0]) || p.mainImage;

  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#164e3d] text-white border-b border-[#113e30]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-7 space-y-4">

            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-1">
                {p.name}
              </h2>
              <span className="font-gujarati text-2xl sm:text-3xl font-bold text-[#c27803]">
                {p.gujaratiName}
              </span>
            </div>

            <p className="text-[#eaf2ee] text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {p.tagline}. Carefully prepared following authentic Indian traditions for vibrant color, rich aroma, and wholesome family wellness.
            </p>

            {/* Pack Size */}
            <p className="text-xs sm:text-sm text-[#eaf2ee] font-medium pt-1">
              Pack Size: <span className="font-bold text-[#fdf6e9] bg-[#113e30] px-2.5 py-1 rounded-lg border border-[#c8ded4]/30">{p.weight}</span>
            </p>

            {/* Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {p.benefits.slice(0, 4).map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#eaf2ee]">
                  <CheckCircle2 className="w-4 h-4 text-[#c27803] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Buy Now Button */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={p.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c27803] hover:bg-[#a36302] text-white font-bold px-8 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Buy Now</span>
              </a>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square flex items-center justify-center">
              <a
                href={p.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Buy ${p.name} on Bhagvat Prasadam`}
                className="block w-full h-full cursor-pointer group flex items-center justify-center"
              >
                <img
                  src={bannerImage}
                  alt={`${p.name} Official Presentation`}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
