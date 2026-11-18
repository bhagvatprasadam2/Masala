import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { PRODUCTS } from './data/products';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import { QuickViewModal, BulkOrderModal, PolicyModal } from './components/modals/Modals';
import FloatingActions from './components/common/FloatingActions';

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
          const headerOffset = 110;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, search, navigate]);

  return null;
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
