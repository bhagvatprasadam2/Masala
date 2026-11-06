import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { PRODUCTS } from './data/products';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsStrip from './components/HighlightsStrip';
import HeroBanner from './components/HeroBanner';
import IngredientsAndFaq from './components/IngredientsAndFaq';
import AboutSection from './components/AboutSection';
import HowToFry from './components/HowToFry';
import OrderFunnel from './components/OrderFunnel';
import BlogSection from './components/BlogSection';
import BlogPostPage from './components/BlogPostPage';
import { QuickViewModal, BulkOrderModal, PolicyModal } from './components/Modals';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function ScrollManager() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Backward compatibility for legacy ?blog= queries
    const params = new URLSearchParams(search);
    const legacyBlog = params.get('blog');
    if (legacyBlog) {
      navigate(`/blog/${legacyBlog}`, { replace: true });
      return;
    }

    const scrollToId = params.get('scrollTo');
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, search, navigate]);

  return null;
}

function HomePage({
  activeProduct,
  setActiveProduct,
  onQuickView,
  onOpenBulkOrder,
  onOpenPolicy
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip w-full max-w-full relative">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar onOpenBulkOrder={onOpenBulkOrder} />

      {/* 2. Sticky Header Navbar */}
      <Navbar onOpenBulkOrder={onOpenBulkOrder} />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* 3. Interactive Hero Section with Dynamic Product Selector & Buy Now Button */}
        <Hero
          products={PRODUCTS}
          activeProduct={activeProduct}
          onSelectProduct={setActiveProduct}
          onQuickView={onQuickView}
        />

        {/* 4. Trust Pillars & Highlights Strip */}
        <HighlightsStrip />

        {/* 5. Hero Banner Spotlight with Buy Now */}
        <HeroBanner activeProduct={activeProduct} />

        {/* 7. Dynamic Ingredients Breakdown & Product FAQs */}
        <IngredientsAndFaq activeProduct={activeProduct} />

        {/* 8. Our Sacred Heritage & Story Section */}
        <AboutSection />

        {/* 9. Kitchen Purity Tests & Culinary Mastery Guide */}
        <HowToFry />

        {/* 10. Interactive Guided Pure Spice Box Builder with WhatsApp Order */}
        <OrderFunnel products={PRODUCTS} />

        {/* 11. Blogs & Wellness Insights */}
        <BlogSection />
      </main>

      {/* 12. Footer with Store Links & Policies */}
      <Footer
        onOpenPolicy={onOpenPolicy}
        onOpenBulkOrder={onOpenBulkOrder}
      />
    </div>
  );
}

function App() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [bulkOrderOpen, setBulkOrderOpen] = useState(false);
  const [policyType, setPolicyType] = useState(null);

  // Lock background scrolling across all screen sizes when any modal is open
  useEffect(() => {
    const isModalOpen = Boolean(quickViewProduct) || bulkOrderOpen || Boolean(policyType);
    if (isModalOpen) {
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [quickViewProduct, bulkOrderOpen, policyType]);

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
              onQuickView={(p) => setQuickViewProduct(p)}
              onOpenBulkOrder={() => setBulkOrderOpen(true)}
              onOpenPolicy={(type) => setPolicyType(type)}
            />
          }
        />
        <Route
          path="/blog/:blogId"
          element={
            <BlogPostPage
              onOpenBulkOrder={() => setBulkOrderOpen(true)}
              onOpenPolicy={(type) => setPolicyType(type)}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Modals accessible from any route */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />

      <BulkOrderModal
        isOpen={bulkOrderOpen}
        onClose={() => setBulkOrderOpen(false)}
      />

      <PolicyModal
        type={policyType}
        isOpen={Boolean(policyType)}
        onClose={() => setPolicyType(null)}
      />

      {/* Floating WhatsApp & Scroll to Top */}
      <FloatingActions />
    </>
  );
}

export default App;
