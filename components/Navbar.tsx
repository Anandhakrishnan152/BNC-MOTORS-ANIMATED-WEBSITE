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
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 glass-electric px-6 md:px-12 py-5 flex justify-between items-center transition-colors duration-200 hover:bg-white border-b border-emerald-900/10 relative overflow-hidden"
      >
        {/* Animated DARK green gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-900/0 via-emerald-900/5 to-emerald-900/0 pointer-events-none"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Top Dark Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-900/20" />

        <motion.div
          className="flex items-center space-x-5 cursor-pointer group"
          onClick={() => handleNavigate('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <motion.img
              src="/BNC_logo_big.png"
              alt="BNC Motors"
              className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-80"
              style={{ maxWidth: '40px', maxHeight: '40px' }}
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Darker Green Glow */}
            <motion.div
              className="absolute inset-0 bg-emerald-900/20 blur-xl rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Additional green ring */}
            <motion.div
              className="absolute inset-0 border-2 border-emerald-800/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <motion.div
            className="flex flex-col"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="font-heading text-lg font-black tracking-tighter text-black uppercase leading-none">
              BNC <span className="text-emerald-800">MOTORS</span>
            </span>
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex space-x-10 font-heading text-xs tracking-[0.5em] text-gray-500">
          {['MODELS', 'ETROL', 'ENERGY', 'TECH'].map((link, index) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className="hover:text-emerald-900 transition-all uppercase relative group font-black"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-emerald-800 to-emerald-900"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
              {/* Green glow on hover */}
              <motion.span
                className="absolute inset-0 bg-emerald-900/0 blur-sm"
                whileHover={{ backgroundColor: 'rgba(6, 78, 59, 0.05)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        <motion.div
          className="flex items-center space-x-8"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.button
            onClick={() => handleNavigate('shop')}
            className={`relative ${currentView === 'shop' ? 'text-emerald-500' : 'text-gray-400 hover:text-emerald-500'}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={20} />
            {/* Green glow on hover */}
            <motion.div
              className="absolute inset-0 bg-emerald-500/0 blur-lg rounded-full"
              whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.3)' }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute -top-2 -right-2 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-[7px] w-4 h-4 rounded-full flex items-center justify-center font-black shadow-lg shadow-emerald-500/50"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              2
            </motion.span>
          </motion.button>
          <motion.button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-500 hover:text-emerald-500 transition-colors relative"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={24} />
            {/* Green glow on hover */}
            <motion.div
              className="absolute inset-0 bg-emerald-500/0 blur-lg rounded-full"
              whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.3)' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/50 z-[100]" />
            <motion.div variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[110] shadow-2xl flex flex-col p-12 border-l border-black/5">
              <div className="flex justify-between items-center mb-16">
                <span className="font-heading text-xs tracking-[0.4em] text-gray-400 font-black uppercase">NAVIGATION_SYSTEM_v4.0</span>
                <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-black text-white hover:bg-emerald-600 transition-all">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 space-y-4">
                {[
                  { id: 'home', label: 'DASHBOARD_HOME', icon: <Home size={22} /> },
                  { id: 'shop', label: 'STORE_MARKET', icon: <ShoppingBag size={22} /> },
                  { id: 'profile', label: 'OWNER_ACCOUNT', icon: <UserCircle size={22} /> },
                  { id: 'register', label: 'IDENTITY_SETUP', icon: <UserPlus size={22} /> }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => handleNavigate(item.id as any)}
                    className={`w-full flex items-center justify-between p-6 border transition-all ${currentView === item.id ? 'border-emerald-500 bg-emerald-50' : 'border-black/5 hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className={currentView === item.id ? 'text-emerald-600' : 'text-gray-400'}>{item.icon}</span>
                      <span className="font-heading text-sm tracking-[0.3em] font-black uppercase">{item.label}</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-300" />
                  </motion.button>
                ))}
              </div>

              <div className="pt-10 border-t border-black/5">
                <div className="bg-slate-50 p-6 mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap size={18} className="text-emerald-500" />
                    <span className="text-xs font-heading font-black tracking-widest uppercase">System Status</span>
                  </div>
                  <div className="h-1 w-full bg-slate-200 relative overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-emerald-500 w-1/3" />
                  </div>
                </div>
                <button className="w-full bg-black text-white py-5 font-heading text-xs font-black tracking-[0.3em] hover:bg-emerald-600 transition-all uppercase">
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