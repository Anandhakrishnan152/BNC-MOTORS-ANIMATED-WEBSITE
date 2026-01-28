import React, { useEffect, useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import ElectricCursor from './components/ElectricCursor';

// Lazy load heavy components
const ModelShowcase = lazy(() => import('./components/ModelShowcase'));
const TechSection = lazy(() => import('./components/TechSection'));
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard'));
const BatteryShowcase = lazy(() => import('./components/BatteryShowcase'));
const WarrantySection = lazy(() => import('./components/WarrantySection'));
const EtrolDeepDive = lazy(() => import('./components/EtrolDeepDive'));
const Shop = lazy(() => import('./components/Shop'));
const Profile = lazy(() => import('./components/Profile'));
const AccountCreation = lazy(() => import('./components/AccountCreation'));

export type View = 'home' | 'shop' | 'profile' | 'register';

// Loading component for lazy-loaded components
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
  </div>
);



const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.body.style.setProperty('--scroll', scrolled.toString());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll position on view change for "app-like" feel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white relative bg-[#ffffff] text-black overflow-x-hidden">
      <ElectricCursor />
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 electric-grid bg-grid-fade opacity-[0.15]" />

        {/* Primary Orb - Emerald (Green) */}
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply"
        />

        {/* Secondary Orb - Black (Shadow) */}
        <motion.div
          animate={{ x: [0, -50, 20, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[5%] w-[35vw] h-[35vw] bg-black/5 rounded-full blur-[100px] mix-blend-multiply"
        />

        {/* Wheel Tracks Animation - Left */}
        <div className="absolute top-0 bottom-0 left-[5%] w-12 overflow-hidden opacity-[0.15] pointer-events-none">
          <motion.div
            className="w-full h-[200%]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L20 20 L40 0' fill='none' stroke='%23000' stroke-width='4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
              backgroundSize: '100% auto'
            }}
            animate={{ y: [0, -40] }} // Move up by one pattern unit (40px) to loop seamlessly
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Wheel Tracks Animation - Right */}
        <div className="absolute top-0 bottom-0 right-[5%] w-12 overflow-hidden opacity-[0.15] pointer-events-none">
          <motion.div
            className="w-full h-[200%]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L20 20 L40 0' fill='none' stroke='%23000' stroke-width='4'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
              backgroundSize: '100% auto'
            }}
            animate={{ y: [0, -40] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Technical Graphic - Rotating Radar */}
        <div className="absolute bottom-10 right-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 border border-emerald-500 rounded-full border-dashed"
          />
          <div className="absolute inset-0 m-auto w-48 h-48 border border-emerald-500/50 rounded-full" />
          <div className="absolute inset-0 m-auto w-2 h-2 bg-emerald-500 rounded-full" />
        </div>

        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent relative z-20" />
              <div id="diagnostics"><PerformanceDashboard /></div>
              <WarrantySection />
              <div id="models"><ModelShowcase /></div>
              <div id="etrol"><EtrolDeepDive /></div>
              <div id="energy"><BatteryShowcase /></div>
              <div id="tech"><TechSection /></div>

              <section className="py-40 px-6 text-center relative overflow-hidden bg-emerald-50/20 border-y border-black/5">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-heading text-6xl md:text-[10rem] font-black mb-12 tracking-tighter uppercase leading-[0.8] text-black">
                    READY TO<br /><span className="text-emerald-500 italic">SWITCH?</span>
                  </h2>
                  <p className="text-black mb-16 max-w-xl mx-auto uppercase tracking-[0.6em] text-[12px] font-heading font-black">JOIN THE BNC ECOSYSTEM // ENGINEERED FOR THE FUTURE</p>
                  <button
                    onClick={() => setCurrentView('shop')}
                    className="group relative bg-black text-white px-20 py-8 font-heading text-xs font-black tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 transform skew-x-[-15deg]"
                  >
                    <span className="relative z-10 inline-block skew-x-[15deg]">VISIT THE STORE</span>
                    <div className="absolute inset-0 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>
                </motion.div>
              </section>
            </motion.div>
          )}

          {currentView === 'shop' && <Suspense fallback={<LoadingSpinner />}><Shop key="shop" onBack={() => setCurrentView('home')} /></Suspense>}
          {currentView === 'profile' && <Suspense fallback={<LoadingSpinner />}><Profile key="profile" onNavigate={setCurrentView} /></Suspense>}
          {currentView === 'register' && <Suspense fallback={<LoadingSpinner />}><AccountCreation key="register" onBack={() => setCurrentView('profile')} /></Suspense>}
        </AnimatePresence>
      </main>

      <Footer />
      <AIChatbot />
    </div >
  );
};

export default App;