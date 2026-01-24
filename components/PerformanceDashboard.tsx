import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Activity, Battery, Zap } from 'lucide-react';

const PerformanceDashboard: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const speedValue = useTransform(scrollYProgress, [0, 0.5], [0, 110]);
  const displaySpeed = useSpring(speedValue, { stiffness: 50, damping: 20 });
  const [roundedSpeed, setRoundedSpeed] = useState(0);

  useEffect(() => {
    return displaySpeed.on("change", (latest) => {
      setRoundedSpeed(Math.round(latest));
    });
  }, [displaySpeed]);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white relative overflow-hidden border-b border-black/5">
      {/* Background Decor */}
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-heading text-[10px] tracking-[0.5em] uppercase mb-4 block font-bold">Diagnostics_Feed</span>
            <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter text-black uppercase">SYSTEM <span className="text-emerald-500">OPTIMIZED</span></h2>
          </motion.div>
          <div className="mt-8 md:mt-0 glass-electric px-10 py-4 rounded-none flex items-center gap-4 border-black/10">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-heading tracking-[0.3em] text-black font-bold uppercase">ETROL_CORE_MONITOR // NOMINAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Velocity Gauge */}
          <div className="bg-white p-10 rounded-none flex flex-col items-center justify-center relative border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-6 left-8 flex items-center gap-3 text-emerald-600">
              <Activity size={18} />
              <span className="text-[10px] font-heading tracking-widest uppercase font-bold">Velocity_Output</span>
            </div>

            <div className="relative w-72 h-72 mt-12">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                <motion.circle
                  cx="50" cy="50" r="45" fill="none"
                  stroke="#10b981" strokeWidth="6"
                  strokeDasharray="282"
                  initial={{ strokeDashoffset: 282 }}
                  animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 282 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className="text-7xl font-heading font-black tracking-tighter text-black"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  110
                </motion.span>
                <span className="text-xs text-emerald-600 font-heading tracking-widest font-bold">KM/H</span>
              </div>
            </div>
          </div>

          {/* Range Density */}
          <div className="bg-white p-10 rounded-none flex flex-col items-center relative border border-black/5 shadow-sm overflow-hidden">
             <div className="absolute top-6 left-8 flex items-center gap-3 text-emerald-600">
              <Battery size={18} />
              <span className="text-[10px] font-heading tracking-widest uppercase font-bold">Charge_Density</span>
            </div>

            <div className="flex-1 w-full flex items-end justify-center gap-6 mt-16 mb-8">
              {[0.6, 0.8, 1, 0.9, 0.7].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height * 100}%` } : {}}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                  className="w-10 bg-emerald-500 rounded-none"
                />
              ))}
            </div>
            
            <div className="w-full flex justify-between items-end border-t border-black/5 pt-6">
               <div>
                  <span className="text-5xl font-heading font-black text-black">150</span>
                  <span className="text-xs text-emerald-600 font-heading tracking-widest ml-2 font-bold">KM</span>
               </div>
               <span className="text-[9px] text-gray-400 font-heading tracking-[0.3em] mb-1 font-bold">RANGE_EXT</span>
            </div>
          </div>

          {/* Torque Force */}
          <div className="bg-white p-10 rounded-none flex flex-col items-center justify-center relative border border-black/5 shadow-sm">
            <div className="absolute top-6 left-8 flex items-center gap-3 text-emerald-600">
              <Zap size={18} />
              <span className="text-[10px] font-heading tracking-widest uppercase font-bold">Torque_Pressure</span>
            </div>

            <div className="relative w-56 h-56 mt-12">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-emerald-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-heading font-black text-black">120</span>
                <span className="text-xs text-emerald-600 font-heading tracking-widest font-bold">NM</span>
              </div>
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-20">
                 <circle cx="50" cy="50" r="48" fill="none" stroke="#000" strokeWidth="0.5" strokeDasharray="1 10" />
              </svg>
            </div>
            <p className="text-black text-[9px] mt-10 text-center font-heading tracking-[0.3em] uppercase font-black">HUB_MOTOR: PEAK</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PerformanceDashboard;