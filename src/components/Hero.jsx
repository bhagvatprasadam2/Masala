import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronDown } from 'lucide-react';

export default function Hero({ products, activeProduct, onSelectProduct, onQuickView }) {
  const p = activeProduct;
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expanded state whenever user switches spice variety
  useEffect(() => {
    setIsExpanded(false);
  }, [p?.id]);

  return (
    <section id="hero" className="relative bg-white border-b border-[#e2ebe5] py-3 sm:py-4 md:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">

        {/* ============================================================== */}
        {/* MOBILE VIEW (< md): Optimized to fit nicely on phone screens  */}
        {/* ============================================================== */}
        <div className="block md:hidden space-y-3">
          {/* 1. Header: Product Title, Gujarati Badge & Subheading */}
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-1 text-xl sm:text-2xl font-extrabold text-[#164e3d] leading-tight tracking-tight">
                {p.name}
              </h1>
              <span className="font-gujarati text-xs sm:text-sm font-bold text-[#c27803] bg-[#fdf6e9] px-2 py-0.5 rounded-md border border-[#f5dfb8]">
                {p.gujaratiName}
              </span>
            </div>
            <p className="font-2 text-xs text-[#c27803] font-medium mt-0.5 leading-snug">
              {p.subheading}
            </p>
          </div>

          {/* 2. Middle Row: Text & Action on Left, Product Cutout Image on Right */}
          <div className="grid grid-cols-12 gap-2.5 items-center">
            {/* Left: Concise Description, Badges, and Action Buttons */}
            <div className="col-span-7 space-y-2">

              <div>
                <p className={`text-[#55695f] text-[11px] sm:text-xs leading-relaxed transition-all duration-200 ${
                  isExpanded ? '' : 'line-clamp-3'
                }`}>
                  {p.description}
                </p>
                {p.description && (
                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-1 text-[11px] font-bold text-[#164e3d] hover:text-[#c27803] transition-colors cursor-pointer inline-flex items-center gap-0.5 focus:outline-none"
                  >
                    <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Buy Now Button */}
              <div className="pt-0.5">
                <a
                  href={p.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#164e3d] hover:bg-[#113e30] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Buy Now</span>
                </a>
              </div>
            </div>

            {/* Right: Floating Product Image */}
            <div className="col-span-5 flex items-center justify-center">
              <a
                href={p.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Buy ${p.name}`}
                className="block w-full max-h-[170px] flex items-center justify-center cursor-pointer"
              >
                <img
                  key={p.id}
                  src={p.transparentImage || p.bannerImage || p.mainImage}
                  alt={p.name}
                  className="max-h-[160px] w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)] transition-transform duration-300 active:scale-105"
                />
              </a>
            </div>
          </div>

          {/* 3. Bottom Strip: Horizontal Swipe Variety Switcher */}
          <div className="pt-2 border-t border-[#e2ebe5]">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#164e3d]">
                Choose a Pure Spice:
              </p>
              <span className="text-[9px] text-[#55695f] font-medium">5 Authentic Varieties</span>
            </div>
            <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar snap-x">
              {products.map((item) => {
                const isSelected = item.id === p.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectProduct(item)}
                    className={`flex-shrink-0 snap-start flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all text-left cursor-pointer ${
                      isSelected
                        ? 'bg-[#eaf2ee] border-[#164e3d] ring-1.5 ring-[#164e3d]'
                        : 'bg-white border-[#e2ebe5] hover:border-[#164e3d]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-[#e2ebe5]"
                    />
                    <div className="min-w-0 pr-1">
                      <span className={`block text-xs font-bold whitespace-nowrap ${isSelected ? 'text-[#164e3d]' : 'text-[#182620]'}`}>
                        {item.shortName || item.name}
                      </span>
                      <span className="font-gujarati text-[10px] text-[#c27803] block truncate">
                        {item.gujaratiName}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= md): Single-Screen 2-Column Showcase */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Product Information & Dynamic Details */}
          <div className="md:col-span-7 space-y-3.5 lg:space-y-4">

            {/* Heading & Gujarati Script */}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-1 text-2xl lg:text-4xl xl:text-5xl font-extrabold text-[#164e3d] leading-tight tracking-tight">
                  {p.name}
                </h1>
                <span className="font-gujarati text-lg lg:text-2xl xl:text-3xl font-bold text-[#c27803] bg-[#fdf6e9] px-2.5 py-0.5 rounded-lg border border-[#f5dfb8]">
                  {p.gujaratiName}
                </span>
              </div>
              <p className="font-2 text-sm lg:text-lg xl:text-xl text-[#c27803] font-medium mt-1 leading-snug">
                {p.subheading}
              </p>
            </div>

            {/* Description with Read More Button */}
            <div>
              <p className={`text-[#55695f] text-xs lg:text-sm xl:text-base leading-relaxed font-normal transition-all duration-200 ${
                isExpanded ? '' : 'line-clamp-3'
              }`}>
                {p.description}
              </p>
              {p.description && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-1.5 text-xs lg:text-sm font-bold text-[#164e3d] hover:text-[#c27803] transition-colors cursor-pointer inline-flex items-center gap-1 focus:outline-none"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            {/* Buy Now Button */}
            <div className="pt-1">
              <a
                href={p.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#164e3d] hover:bg-[#113e30] text-white px-8 lg:px-10 py-3 lg:py-3.5 rounded-xl font-bold text-xs lg:text-sm xl:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Buy Now</span>
              </a>
            </div>

            {/* Product Switcher: Compact 5-Column Grid */}
            <div className="pt-3 border-t border-[#e2ebe5]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#164e3d]">
                  Select Spice Variety:
                </p>
                <span className="text-[11px] text-[#55695f] font-medium">5 Pure Kitchen Essentials</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {products.map((item) => {
                  const isSelected = item.id === p.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSelectProduct(item)}
                      className={`group flex flex-col items-center text-center p-2 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#eaf2ee] border-[#164e3d] ring-2 ring-[#164e3d] shadow-sm'
                          : 'bg-white border-[#e2ebe5] hover:border-[#164e3d] hover:bg-[#f8faf8]'
                      }`}
                    >
                      {/* Image on Top */}
                      <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#f8faf8] flex-shrink-0 border border-[#e2ebe5] mb-1.5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Name & Gujarati Script */}
                      <div className="w-full px-0.5">
                        <span className={`block text-[11px] font-bold leading-tight line-clamp-1 ${isSelected ? 'text-[#164e3d]' : 'text-[#182620]'}`}>
                          {item.shortName || item.name}
                        </span>
                        <span className="font-gujarati text-[10px] text-[#c27803] block leading-tight mt-0.5 truncate">
                          {item.gujaratiName}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-full flex items-center justify-center p-4">
              <a
                href={p.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Buy ${p.name} on Bhagvat Prasadam`}
                className="group relative block w-full cursor-pointer flex items-center justify-center"
              >
                <img
                  key={p.id}
                  src={p.transparentImage || p.bannerImage || p.mainImage}
                  alt={p.name}
                  className="w-full max-h-[340px] md:max-h-[380px] lg:max-h-[440px] xl:max-h-[500px] object-contain filter drop-shadow-[0_22px_38px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
