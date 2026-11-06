import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ShoppingBag, ArrowRight } from 'lucide-react';
import { BLOGS } from '../data/products';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BlogPostPage({ onOpenBulkOrder, onOpenPolicy }) {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = BLOGS.find((b) => b.id === blogId) || BLOGS[0];
  const otherBlogs = BLOGS.filter((b) => b.id !== blog.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${blog.title} | Bhagvat Prasadam Heritage`;
  }, [blog, blogId]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navbar */}
      <Navbar onOpenBulkOrder={onOpenBulkOrder} />

      {/* Main Article Container */}
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#e2ebe5]">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#164e3d] hover:text-[#c27803] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home and Products</span>
          </button>

          <span className="text-[11px] sm:text-xs text-[#55695f] font-medium">
            Published in <strong>Bhagvat Prasadam Pure Spices Heritage</strong>
          </span>
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-[#55695f]">
            <span className="flex items-center gap-1.5 font-semibold text-[#164e3d] bg-[#eaf2ee] px-3 py-1 rounded-full border border-[#c8ded4]">
              <Calendar className="w-3.5 h-3.5 text-[#c27803]" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#164e3d]" />
              Written by <strong>{blog.author || 'Bhagvat Prasadam Heritage'}</strong>
            </span>
          </div>

          <h1 className="font-1 text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#164e3d] leading-tight tracking-tight">
            {blog.title}
          </h1>

          <p className="text-[#55695f] text-sm sm:text-base md:text-lg leading-relaxed italic">
            "{blog.excerpt}"
          </p>
        </div>

        {/* Featured Hero Image */}
        <div className="rounded-3xl overflow-hidden aspect-video bg-[#f8faf8] border border-[#e2ebe5] shadow-xs mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formatted Article Content */}
        <article 
          className="prose prose-sm sm:prose-base max-w-none text-[#182620] leading-relaxed space-y-4 pt-2 border-t border-[#e2ebe5]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Direct Order CTA Box */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#fdf6e9] border border-[#f5dfb8] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-1 text-lg sm:text-xl font-bold text-[#164e3d]">
              Experience 100% Pure & Unadulterated Indian Spices
            </h3>
            <p className="text-xs sm:text-sm text-[#55695f]">
              Stone ground from sun-cured whole spices with zero artificial dyes, lead, or preservatives.
            </p>
          </div>

          <a
            href="https://www.bhagvatprasadam.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#164e3d] hover:bg-[#113e30] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm flex-shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#c27803]" />
            <span>Order Pure Spices Online</span>
          </a>
        </div>

        {/* Related Articles Strip */}
        <div className="pt-8 border-t border-[#e2ebe5]">
          <h3 className="font-1 text-xl font-bold text-[#164e3d] mb-6">
            More Heritage Articles and Recipes:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherBlogs.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="bg-[#f8faf8] rounded-2xl p-4 border border-[#e2ebe5] hover:border-[#164e3d] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="aspect-video rounded-xl overflow-hidden bg-[#eaf2ee] mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] text-[#55695f] font-semibold block mb-1">
                    {item.date}
                  </span>
                  <h4 className="font-1 text-xs font-bold text-[#182620] group-hover:text-[#164e3d] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                </div>

                <div className="pt-3 mt-2 border-t border-[#e2ebe5] flex items-center justify-between text-[11px] font-bold text-[#164e3d]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c27803] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer onOpenPolicy={onOpenPolicy} onOpenBulkOrder={onOpenBulkOrder} />
    </div>
  );
}

