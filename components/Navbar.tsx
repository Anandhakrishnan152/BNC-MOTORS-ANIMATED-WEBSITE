import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, User, ShoppingCart, X, ChevronRight, Home, ShoppingBag, UserCircle, Zap, UserPlus } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'shop' | 'profile' | 'register') => void;
  currentView: 'home' | 'shop' | 'profile' | 'register';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (view: 'home' | 'shop' | 'profile' | 'register') => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const menuVariants: Variants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 glass-electric px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-500 hover:bg-white border-b border-black/5">
        <div 
          className="flex items-center space-x-5 cursor-pointer group"
          onClick={() => handleNavigate('home')}
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <motion.img
              src="/BNC_logo_big.png"
              alt="BNC Motors"
              className="w-10 h-10 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#10b981]"
            />
            <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-black tracking-tighter text-black uppercase leading-none">
              BNC <span className="text-emerald-500">MOTORS</span>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex space-x-10 font-heading text-[10px] tracking-[0.5em] text-gray-500">
          {['MODELS', 'ETROL', 'ENERGY', 'TECH'].map((link) => (
            <button key={link} onClick={() => scrollToSection(link.toLowerCase())} className="hover:text-black transition-all uppercase relative group font-bold">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <button onClick={() => handleNavigate('shop')} className={`relative ${currentView === 'shop' ? 'text-emerald-500' : 'text-gray-400 hover:text-black'}`}>
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] w-4 h-4 rounded-full flex items-center justify-center font-black">2</span>
          </button>
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-500 hover:text-black transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" />
            <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[110] shadow-2xl flex flex-col p-12 border-l border-black/5">
              <div className="flex justify-between items-center mb-16">
                <span className="font-heading text-[10px] tracking-[0.4em] text-gray-400 font-black uppercase">NAVIGATION_SYSTEM_v4.0</span>
                <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-black text-white hover:bg-emerald-600 transition-all">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 space-y-4">
                {[
                  { id: 'home', label: 'DASHBOARD_HOME', icon: <Home size={18} /> },
                  { id: 'shop', label: 'STORE_MARKET', icon: <ShoppingBag size={18} /> },
                  { id: 'profile', label: 'OWNER_ACCOUNT', icon: <UserCircle size={18} /> },
                  { id: 'register', label: 'IDENTITY_SETUP', icon: <UserPlus size={18} /> }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => handleNavigate(item.id as any)}
                    className={`w-full flex items-center justify-between p-6 border transition-all ${currentView === item.id ? 'border-emerald-500 bg-emerald-50' : 'border-black/5 hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className={currentView === item.id ? 'text-emerald-600' : 'text-gray-400'}>{item.icon}</span>
                      <span className="font-heading text-xs tracking-[0.3em] font-black uppercase">{item.label}</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-300" />
                  </motion.button>
                ))}
              </div>

              <div className="pt-10 border-t border-black/5">
                <div className="bg-slate-50 p-6 mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap size={14} className="text-emerald-500" />
                    <span className="text-[9px] font-heading font-black tracking-widest uppercase">System Status</span>
                  </div>
                  <div className="h-1 w-full bg-slate-200 relative overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-emerald-500 w-1/3" />
                  </div>
                </div>
                <button className="w-full bg-black text-white py-5 font-heading text-[10px] font-black tracking-[0.3em] hover:bg-emerald-600 transition-all">
                  CUSTOMER_SUPPORT_NODE
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;