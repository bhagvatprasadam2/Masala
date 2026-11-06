import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOGS } from '../data/products';

export default function BlogSection() {
  return (
    <section id="blog-section" className="py-14 sm:py-20 bg-white border-b border-[#e2ebe5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#164e3d] font-1 tracking-tight">
            Spice Stories, Health & Recipes
          </h2>
          <p className="text-[#55695f] text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Ayurvedic benefits of pure curcumin, real red chili flavor without stomach burn, and the mineral wisdom of Sindhav Salt.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#f8faf8] rounded-3xl border border-[#e2ebe5] hover:border-[#164e3d] transition-all flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md"
            >
              <div>
                <Link
                  to={`/blog/${blog.id}`}
                  className="block relative aspect-video overflow-hidden bg-[#eaf2ee] border-b border-[#e2ebe5] cursor-pointer"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-[#55695f]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#164e3d]" />
                      {blog.date}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="block font-1 text-base font-bold text-[#182620] group-hover:text-[#164e3d] transition-colors line-clamp-2 leading-snug cursor-pointer"
                  >
                    {blog.title}
                  </Link>

                  <p className="text-xs text-[#55695f] line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to={`/blog/${blog.id}`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#164e3d] hover:text-[#113e30] pt-3 border-t border-[#e2ebe5] group/btn cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#c27803]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
