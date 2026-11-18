import { PRODUCTS } from '../data/products';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import HighlightsStrip from '../components/sections/HighlightsStrip';
import HeroBanner from '../components/sections/HeroBanner';
import IngredientsAndFaq from '../components/sections/IngredientsAndFaq';
import AboutSection from '../components/sections/AboutSection';
import HowToFry from '../components/sections/HowToFry';
import OrderFunnel from '../components/sections/OrderFunnel';
import BlogSection from '../components/sections/BlogSection';
import Footer from '../components/layout/Footer';

export default function HomePage({
  activeProduct,
  setActiveProduct,
  onQuickView,
  onOpenBulkOrder,
  onOpenPolicy
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip w-full max-w-full relative">
      {/* 1 & 2. Unified Sticky Header (Announcement Bar & Navigation) */}
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

        {/* 6. Dynamic Ingredients Breakdown & Product FAQs */}
        <IngredientsAndFaq activeProduct={activeProduct} />

        {/* 7. Our Sacred Heritage & Story Section */}
        <AboutSection />

        {/* 8. Kitchen Purity Tests & Culinary Mastery Guide */}
        <HowToFry />

        {/* 9. Interactive Guided Pure Spice Box Builder with WhatsApp Order */}
        <OrderFunnel products={PRODUCTS} />

        {/* 10. Blogs & Wellness Insights */}
        <BlogSection />
      </main>

      {/* 11. Footer with Policy Links & Store Info */}
      <Footer
        onOpenPolicy={onOpenPolicy}
        onOpenBulkOrder={onOpenBulkOrder}
      />
    </div>
  );
}

