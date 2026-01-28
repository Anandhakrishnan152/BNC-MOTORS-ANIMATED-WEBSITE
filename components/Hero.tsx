import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <div className="relative w-full max-w-6xl aspect-video">
          <motion.img
            src="/bnc-home-header.jpg"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)] grayscale"
            alt="BNC Engineering"
            loading="lazy"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute left-0 top-1/2 w-full h-[1px] bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3
            }
          }
        }}
      >
        <motion.h1
          className="font-heading text-7xl md:text-[12rem] font-black mb-8 tracking-tighter leading-[0.75] text-black uppercase"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <GlitchText text="BNC" className="block" glitchColor1="#ef4444" glitchColor2="#10b981" />
          <span className="text-emerald-500 block italic -skew-x-6">MOTORS</span>
        </motion.h1>

        <motion.p
          className="text-black text-[10px] md:text-xs max-w-2xl mx-auto mb-20 font-heading tracking-[0.8em] uppercase leading-loose font-black"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } }
          }}
        >
          [ INDUSTRIAL STRENGTH ] [ PURE ELECTRIC ] [ CONNECTED INTELLIGENCE ]
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-10"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#059669' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-black text-white px-20 py-7 font-heading text-[11px] font-black tracking-[0.4em] transition-all hover:bg-emerald-600"
          >
            BOOK NOW
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)', scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border border-black/10 text-black px-20 py-7 font-heading text-[11px] tracking-[0.4em] transition-all"
          >
            EXPLORE_FLEET
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Aesthetic Framing */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 border-t border-l border-black/5"
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{ width: 96, height: 96, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-black/5"
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{ width: 96, height: 96, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      />
    </section>
  );
};

export default Hero;
