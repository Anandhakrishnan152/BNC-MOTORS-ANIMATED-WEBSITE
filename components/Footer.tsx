import React, { useState } from 'react';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import SupportModal from './SupportModal';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.25,
      rotate: 360,
      transition: { duration: 0.5 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <footer className="py-32 px-6 border-t border-black/5 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-50 blur-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Footer Background Bike */}
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] opacity-5 pointer-events-none z-0"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <img src="/services/images/challenger_black.png" alt="Footer Bike" className="w-full" />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="col-span-1 md:col-span-1" variants={itemVariants}>
          <motion.div
            className="flex items-center space-x-4 mb-10 group"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <motion.img
                src="/BNC_logo_big.png"
                alt="BNC Logo"
                className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
                animate={{
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <span className="font-heading text-2xl font-black tracking-tighter text-black">BNC <span className="text-emerald-500">MOTORS</span></span>
          </motion.div>
          <motion.p
            className="text-black text-sm mb-10 leading-relaxed font-heading tracking-widest text-[10px] uppercase font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Pure Electric Paradigm. Engineering the next era of mobility for the Indian sub-continent and beyond.
          </motion.p>
          <div className="flex space-x-6">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="text-black hover:text-emerald-500 transition-colors"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h4
            className="font-heading text-sm tracking-[0.5em] mb-10 uppercase text-emerald-600 font-black underline decoration-emerald-500/20 underline-offset-8"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Fleet_Access
          </motion.h4>
          <ul className="space-y-6 text-xs font-heading tracking-[0.3em] text-black uppercase font-black">
            {['Challenger_S110', 'Perfetto_EV', 'The_Boss_S150', 'Pre_Order_Link'].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <motion.a
                  href="#"
                  className={`hover:text-emerald-600 transition-colors ${item === 'Pre_Order_Link' ? 'font-black' : ''}`}
                  whileHover={{ x: 5, color: '#10b981' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h4
            className="font-heading text-sm tracking-[0.5em] mb-10 uppercase text-emerald-600 font-black underline decoration-emerald-500/20 underline-offset-8"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Core_Nodes
          </motion.h4>
          <ul className="space-y-6 text-xs font-heading tracking-[0.3em] text-gray-500 uppercase">
            {['Etrol_Power', 'Service_Hubs', 'Tech_Stack', 'Careers'].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <motion.a
                  href="#"
                  className="hover:text-black transition-colors"
                  whileHover={{ x: 5, color: '#000000' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h4
            className="font-heading text-sm tracking-[0.5em] mb-10 uppercase text-emerald-600 font-black underline decoration-emerald-500/20 underline-offset-8"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Data_Stream
          </motion.h4>
          <motion.p
            className="text-xs text-black mb-8 uppercase tracking-[0.2em] font-heading leading-relaxed font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join the movement and synchronize with the BNC Motors frequency.
          </motion.p>
          <div className="flex flex-col gap-4">
            <motion.input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="bg-slate-50 border border-black/5 rounded-none px-6 py-4 text-xs font-heading text-black focus:ring-1 focus:ring-emerald-500 outline-none flex-1 uppercase tracking-widest"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileFocus={{ scale: 1.02, borderColor: '#10b981' }}
            />
            <motion.button
              className="bg-black text-white px-10 py-4 font-heading text-xs font-black tracking-widest hover:bg-emerald-600 transition-all"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: '#10b981' }}
              whileTap={{ scale: 0.95 }}
            >
              SYNCHRONIZE
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* CEO Section */}
      {/* CEO Section */}
      <motion.div
        className="max-w-7xl mx-auto mt-20 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-500/20 p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-300/30 transition-colors duration-700"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* CEO Image Placeholder */}
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-48 h-48 bg-gradient-to-br from-emerald-600 to-black rounded-none flex items-center justify-center border-4 border-white shadow-2xl group-hover:border-emerald-500 transition-colors duration-300">
                  <span className="text-white font-heading text-6xl font-black">AN</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 font-heading text-[8px] tracking-widest font-black group-hover:bg-emerald-600 transition-colors">
                  FOUNDER_CEO
                </div>
              </motion.div>
            </div>

            {/* CEO Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <motion.h3
                  className="font-heading text-4xl font-black text-black tracking-tighter uppercase mb-2"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ANIRUDH NARAYANAN
                </motion.h3>
                <motion.p
                  className="font-heading text-sm text-emerald-600 tracking-[0.3em] uppercase font-black"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  FOUNDER & CEO // BNC MOTORS
                </motion.p>
              </div>

              <motion.p
                className="text-black text-sm leading-relaxed font-heading tracking-wide max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "Engineering the next era of mobility for the Indian sub-continent and beyond. At BNC Motors, we're not just building electric vehicles – we're creating a sustainable future with cutting-edge technology and Indian innovation."
              </motion.p>

              <div className="flex flex-wrap gap-6 items-center">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-heading text-[10px] tracking-widest uppercase font-bold text-black">
                    Languages: English, Tamil, Kannada
                  </span>
                </motion.div>

                <motion.a
                  href="https://www.linkedin.com/in/anirudh-narayanan-26b0a121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-6 py-3 font-heading text-[10px] font-black tracking-widest hover:bg-emerald-600 transition-all group"
                  whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={16} className="group-hover:rotate-12 transition-transform" />
                  CONNECT_ON_LINKEDIN
                </motion.a>
              </div>

              <div className="pt-6 border-t border-black/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "FOUNDED", val: "2014", color: "text-black" },
                    { label: "VEHICLES", val: "10K+", color: "text-emerald-600" },
                    { label: "EXPORTS", val: "GLOBAL", color: "text-black" },
                    { label: "INNOVATION", val: "ETROL", color: "text-emerald-600" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      whileHover={{ y: -5 }}
                    >
                      <p className="font-heading text-[8px] text-gray-400 tracking-widest uppercase mb-1">{stat.label}</p>
                      <p className={`font-heading text-lg font-black ${stat.color}`}>{stat.val}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-black font-heading tracking-[0.4em] gap-8 font-bold">
        <div>© 2024 BNC MOTORS // ALL RIGHTS RESERVED // PRECISION_SECURED</div>
        <div className="flex gap-12">
          <button onClick={() => setShowPrivacy(true)} className="hover:text-emerald-500 transition-colors uppercase cursor-pointer">PRIVACY_POLICY</button>
          <button onClick={() => setShowTerms(true)} className="hover:text-emerald-500 transition-colors uppercase cursor-pointer">TERMS_OF_USE</button>
          <button onClick={() => setShowSupport(true)} className="hover:text-emerald-500 transition-colors uppercase cursor-pointer">SUPPORT_CENTER</button>
        </div>
      </div>
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <SupportModal isOpen={showSupport} onClose={() => setShowSupport(false)} />
    </footer>
  );
};

export default Footer;