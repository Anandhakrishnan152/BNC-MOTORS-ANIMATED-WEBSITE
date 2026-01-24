import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <div className="relative w-full max-w-6xl aspect-video">
          <img
            src="/bnc-home-header.jpg"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)] grayscale"
            alt="BNC Engineering"
            loading="lazy"
          />
          <div className="absolute left-0 top-1/2 w-full h-[1px] bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        </div>
      </div>

      <motion.div className="relative z-10 text-center px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block glass-electric px-8 py-2 mb-12 text-emerald-600 text-[10px] font-heading tracking-[1em] uppercase font-bold border border-emerald-500/10">
            ADVANCED MOBILITY PARADIGM
          </span>

          <h1 className="font-heading text-7xl md:text-[12rem] font-black mb-8 tracking-tighter leading-[0.75] text-black uppercase">
            <span className="block">BNC</span>
            <span className="text-emerald-500 block italic -skew-x-6">MOTORS</span>
          </h1>

          <p className="text-black text-[10px] md:text-xs max-w-2xl mx-auto mb-20 font-heading tracking-[0.8em] uppercase leading-loose font-black">
            [ INDUSTRIAL STRENGTH ] [ PURE ELECTRIC ] [ CONNECTED INTELLIGENCE ]
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-black text-white px-20 py-7 font-heading text-[11px] font-black tracking-[0.4em] transition-all hover:bg-emerald-600"
            >
              BOOK NOW
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
              className="w-full sm:w-auto border border-black/10 text-black px-20 py-7 font-heading text-[11px] tracking-[0.4em] transition-all"
            >
              EXPLORE_FLEET
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Aesthetic Framing */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-black/5" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-black/5" />
    </section>
  );
};

export default Hero;
