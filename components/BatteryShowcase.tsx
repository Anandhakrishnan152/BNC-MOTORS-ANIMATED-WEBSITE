import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ShieldCheck, Zap, Thermometer, RefreshCw, Power, Lock, Unlock, Loader2, Cpu, BatteryCharging } from 'lucide-react';

const BatteryShowcase: React.FC = () => {
  const [isSwapping, setIsSwapping] = useState(false);
  const [isCharging, setIsCharging] = useState(false);
  const [chargeLevel, setChargeLevel] = useState(100);
  const [swapState, setSwapState] = useState<'IDLE' | 'EJECTING' | 'ALIGNING' | 'LOCKED'>('IDLE');
  
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const triggerSwap = useCallback(() => {
    if (isSwapping || isCharging) return;
    
    setIsSwapping(true);
    setSwapState('EJECTING');
    
    // Swap Sequence Timers
    setTimeout(() => setSwapState('ALIGNING'), 1000);
    setTimeout(() => setSwapState('LOCKED'), 2500);
    setTimeout(() => {
      setSwapState('IDLE');
      setIsSwapping(false);
      setChargeLevel(100); // New battery is full
    }, 4000);
  }, [isSwapping, isCharging]);

  const triggerCharge = useCallback(() => {
    if (isCharging || isSwapping) return;
    
    setIsCharging(true);
    setChargeLevel(10); // Start from low
    
    const interval = setInterval(() => {
      setChargeLevel(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsCharging(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  }, [isCharging, isSwapping]);

  return (
    <section ref={containerRef} className="py-40 px-6 bg-white min-h-[150vh] flex flex-col items-center justify-center overflow-hidden border-y border-black/5 relative">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/bnc-perfetto.avif)' }} />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 items-center relative z-10">
        
        {/* EV Core Visual */}
        <div className="relative h-[750px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-emerald-100 blur-[180px] rounded-full"
          />
          
          <div className="relative w-80 h-[500px]">
            {/* Top Casing - Battery Lid */}
            <motion.div
              animate={isSwapping ? { y: -280 } : {}}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute top-0 left-0 w-full h-1/5 bg-white shadow-sm border border-black/5 z-30 flex flex-col items-center justify-center"
            >
               <Cpu className={`text-emerald-600 mb-2 ${isSwapping || isCharging ? 'animate-pulse' : ''}`} size={24} />
               <span className="text-[8px] font-heading tracking-[0.5em] text-black font-black">
                 {isSwapping ? 'BMS_SYNC_ACTIVE' : isCharging ? 'CHARGE_SYNC_v4' : 'ETROL_CORE_V4'}
               </span>
            </motion.div>
            
            {/* The Power Core Containment */}
            <div className="absolute inset-0 w-full h-full bg-slate-50/50 border-x border-black/5 z-20 flex flex-col p-10 gap-5 justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
               
               {/* Swappable Cell Assembly */}
               <motion.div
                 animate={
                    swapState === 'EJECTING' ? { x: -400, opacity: 0 } :
                    swapState === 'ALIGNING' ? { x: 400, opacity: 0 } :
                    swapState === 'LOCKED' ? { x: 0, opacity: 1 } :
                    { x: 0, opacity: 1 }
                 }
                 transition={{ duration: 0.6, ease: "circInOut" }}
                 className="space-y-5"
               >
                 {[...Array(8)].map((_, i) => {
                   const cellThreshold = (7 - i) * 12.5;
                   const isCellFilled = chargeLevel > cellThreshold;
                   
                   return (
                     <div key={i} className="h-4 w-full rounded-sm border border-emerald-500/10 relative overflow-hidden bg-slate-200/30">
                        <motion.div 
                          initial={false}
                          animate={{ 
                            width: isCellFilled ? '100%' : '0%',
                            backgroundColor: isCharging ? '#10b981' : '#10b981',
                            opacity: isCellFilled ? 1 : 0.2
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        />
                        {isCharging && isCellFilled && (
                          <motion.div 
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
                          />
                        )}
                     </div>
                   );
                 })}
               </motion.div>

               <div className="text-center mt-10">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={isCharging ? 'charging' : swapState}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-xs font-heading font-black text-emerald-600 tracking-[0.4em] block">
                        {isCharging && `CHARGING: ${chargeLevel}%`}
                        {!isCharging && swapState === 'IDLE' && 'STATUS: NOMINAL'}
                        {!isCharging && swapState === 'EJECTING' && 'CELL_RELEASE...'}
                        {!isCharging && swapState === 'ALIGNING' && 'ALIGN_SYNC...'}
                        {!isCharging && swapState === 'LOCKED' && 'SECURED_LINK'}
                      </span>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>

            {/* Bottom Casing - Battery Base */}
            <motion.div
              animate={isSwapping ? { y: 280 } : {}}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute bottom-0 left-0 w-full h-1/5 bg-white shadow-sm border border-black/5 z-30 flex items-center justify-center"
            >
               <div className="flex flex-col items-center gap-2">
                 {isSwapping || isCharging ? <Loader2 className="animate-spin text-emerald-600" size={18} /> : <Power className="text-black" size={18} />}
                 <span className="text-[8px] font-heading tracking-[0.5em] text-black font-black uppercase">
                    {swapState === 'LOCKED' || isCharging ? 'CORE_ACTIVE' : 'READY_SYNC'}
                 </span>
               </div>
            </motion.div>
          </div>

          {/* HUD Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-10 left-0 glass-electric px-8 py-3 border border-black/5 shadow-sm font-heading text-[10px] text-black tracking-[0.5em]"
          >
            <span className="animate-pulse">
                {isSwapping ? 'RECONFIGURING_ENERGY' : isCharging ? 'HIGH_VOLTAGE_IN' : 'VOLTAGE_SECURE'}
            </span>
          </motion.div>
        </div>

        {/* Energy Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-emerald-600 font-heading text-[10px] tracking-[0.6em] uppercase mb-8 block font-black border-l-4 border-emerald-500 pl-6">ENERGY_MODULE_S4</span>
            <h2 className="font-heading text-7xl md:text-9xl font-black mb-12 leading-[0.8] tracking-tighter text-black uppercase">ETROL<br /><span className="text-emerald-500">DRIVE</span></h2>
            
            <p className="text-gray-500 text-base mb-16 leading-relaxed font-heading tracking-[0.2em] uppercase text-[11px]">
              High-density modular power designed for extreme thermal efficiency and rapid swap capability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { 
                  icon: isCharging ? <BatteryCharging className="animate-bounce" /> : <Zap />, 
                  title: "RAPID_CHARGE", 
                  desc: isCharging ? "EST: 45 MIN TO 100%" : "Zero to 80% in 45 minutes.", 
                  action: triggerCharge,
                  highlight: isCharging 
                },
                { 
                  icon: isSwapping ? <Unlock className="animate-pulse" /> : <Lock />, 
                  title: "SYNC_SWAP", 
                  desc: isSwapping ? "RECALIBRATING..." : "Swap in under 60 seconds.",
                  action: triggerSwap,
                  highlight: isSwapping
                },
                { icon: <ShieldCheck />, title: "IP67_SEAL", desc: "Environmentally hardened cells.", action: null },
                { icon: <Thermometer />, title: "ACTIVE_COOL", desc: "Dual-loop heat management.", action: null },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  onClick={item.action || undefined}
                  className={`group border border-black/5 pl-8 transition-all p-6 glass-electric cursor-pointer shadow-sm ${item.highlight ? 'border-emerald-500 bg-emerald-50/50' : ''}`}
                >
                  <div className="text-emerald-600 mb-5 group-hover:scale-110 transition-transform flex items-center gap-4">
                    {item.icon}
                    <h4 className="font-heading text-[11px] tracking-[0.3em] uppercase text-black font-bold">{item.title}</h4>
                  </div>
                  <p className="text-black text-[9px] leading-tight font-heading tracking-widest uppercase font-bold">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BatteryShowcase;