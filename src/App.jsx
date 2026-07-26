import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CompareProvider } from './context/CompareContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { DemoFormModal } from './components/common/DemoFormModal';

// 12 Pages
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ComparePage } from './pages/ComparePage';
import { ConsultingPage } from './pages/ConsultingPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookDemoPage } from './pages/BookDemoPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Page transition animation wrapper
const pageVariants = {
  initial: { opacity: 0, y: 24, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, scale: 0.99, transition: { duration: 0.25, ease: 'easeIn' } }
};

const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

// Inner app that has access to useLocation
const AppInner = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#05050A] text-white flex flex-col selection:bg-pink-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"           element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/product"    element={<PageWrapper><ProductPage /></PageWrapper>} />
            <Route path="/solutions"  element={<PageWrapper><SolutionsPage /></PageWrapper>} />
            <Route path="/compare"    element={<PageWrapper><ComparePage /></PageWrapper>} />
            <Route path="/consulting" element={<PageWrapper><ConsultingPage /></PageWrapper>} />
            <Route path="/industries" element={<PageWrapper><IndustriesPage /></PageWrapper>} />
            <Route path="/resources"  element={<PageWrapper><ResourcesPage /></PageWrapper>} />
            <Route path="/pricing"    element={<PageWrapper><PricingPage /></PageWrapper>} />
            <Route path="/about"      element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/contact"    element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="/book-demo"  element={<PageWrapper><BookDemoPage /></PageWrapper>} />
            <Route path="*"           element={<PageWrapper><NotFoundPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <DemoFormModal />
    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <CompareProvider>
        <Router>
          <ScrollToTop />
          <AppInner />
        </Router>
      </CompareProvider>
    </AuthProvider>
  );
}

export default App;
