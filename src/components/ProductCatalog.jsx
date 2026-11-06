import React, { useState } from 'react';
import { Eye, Sparkles, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function ProductCatalog({ products, onSelectProduct, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState("All Spices");

  const filteredProducts = activeCategory === "All Spices"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="product-section" className="py-14 sm:py-20 bg-[#f8faf8] border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#164e3d] font-1 tracking-tight">
            Our Authentic Indian Spices & Kitchen Essentials
          </h2>
          <p className="text-[#55695f] text-sm sm:text-base mt-2.5 max-w-xl mx-auto">
            100% pure, stone ground, and unadulterated spices: Turmeric, Red Chili Powder, 1KG Barni Jar Pack, Himalayan Sindhav Salt, and Sonth Powder.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#164e3d] text-white'
                    : 'bg-white text-[#182620] hover:bg-[#eaf2ee] border border-[#e2ebe5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((p) => {
            return (
              <div
                key={p.id}
                className="group bg-white rounded-3xl border border-[#e2ebe5] hover:border-[#164e3d] transition-colors flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-square overflow-hidden bg-[#f8faf8] p-3 border-b border-[#e2ebe5]">
                    <a
                      href={p.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Buy ${p.name} on Bhagvat Prasadam`}
                      className="block w-full h-full cursor-pointer flex items-center justify-center"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                    
                    {/* Gujarati Name Pill */}
                    <div className="absolute top-3 left-3 bg-white/95 px-2 py-0.5 rounded-lg text-xs font-bold font-gujarati text-[#c27803] border border-[#e2ebe5]">
                      {p.gujaratiName}
                    </div>

                    {/* Weight Pill */}
                    <div className="absolute top-3 right-3 bg-white/95 text-[#164e3d] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#e2ebe5]">
                      {p.weight}
                    </div>

                    {/* Quick View Button */}
                    <button
                      onClick={() => onQuickView(p)}
                      aria-label={`Quick view ${p.name}`}
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-[#164e3d] border border-[#e2ebe5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#eaf2ee] cursor-pointer shadow-xs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] bg-[#eaf2ee] text-[#164e3d] font-bold px-2 py-0.5 rounded-full border border-[#c8ded4]">
                        {p.category}
                      </span>
                      <span className="text-[10px] text-[#55695f] font-semibold">
                        {p.weight}
                      </span>
                    </div>

                    <a
                      href={p.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-1 text-sm font-bold text-[#182620] group-hover:text-[#164e3d] transition-colors line-clamp-1"
                    >
                      {p.name}
                    </a>

                    <p className="text-[11px] text-[#55695f] line-clamp-2 leading-relaxed">
                      {p.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={p.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#164e3d] hover:bg-[#113e30] text-white text-xs font-bold py-2.5 rounded-xl transition-colors active:scale-95 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Buy Now</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
