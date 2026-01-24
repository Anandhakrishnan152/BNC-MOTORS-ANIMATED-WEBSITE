import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap, Terminal } from 'lucide-react';
import { BikeModel } from '../types';

interface Props {
  bike: BikeModel | null;
  onClose: () => void;
}

const BikeDetailPanel: React.FC<Props> = ({ bike, onClose }) => {
  if (!bike) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full md:w-[650px] z-[120] bg-white border-l border-black/10 shadow-2xl overflow-y-auto"
      >
        <div className="p-10 relative">
          <div className="flex justify-between items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Terminal size={14} className="text-emerald-600" />
                <span className="text-emerald-600 font-heading text-[10px] tracking-[0.5em] uppercase font-bold">CORE_BLUEPRINT_v2.0</span>
              </div>
              <h3 className="text-5xl font-heading font-black tracking-tighter text-black uppercase">{bike.name}</h3>
            </div>
            <button 
              onClick={onClose}
              className="w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-emerald-600 transition-all shadow-lg"
            >
              <X size={28} />
            </button>
          </div>

          <div className="space-y-16">
            <div className="relative aspect-video rounded-none overflow-hidden border border-black/5 bg-slate-50 group">
              <img 
                src={bike.image} 
                alt={bike.name} 
                className="w-full h-full object-contain p-12 opacity-80 group-hover:opacity-100 transition-all duration-1000" 
              />
              <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-4 left-4 text-[8px] font-heading tracking-[0.5em] text-emerald-600/40">GEO_SYNC: ACTIVE</div>
                 <div className="absolute bottom-4 right-4 text-[8px] font-heading tracking-[0.5em] text-emerald-600/40">RENDER: WIREFRAME_VFX</div>
              </div>
              <div className="absolute inset-0 border border-black/5 pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 gap-12">
              <section>
                <h4 className="flex items-center gap-4 font-heading text-[11px] tracking-[0.6em] text-emerald-600 mb-8 uppercase font-bold">
                  <Zap size={16} /> POWERTRAIN_DATA
                </h4>
                <div className="grid grid-cols-2 gap-px bg-black/10 border border-black/5">
                  {[
                    { l: "Drive_Type", v: "BLDC Hub Engine" },
                    { l: "Peak_Density", v: "4.2 kW Unit" },
                    { l: "Energy_Node", v: "Etrol Cell Hub" },
                    { l: "Modality", v: "ECO / RIDE / MAX" }
                  ].map((s, i) => (
                    <div key={i} className="bg-white p-6 hover:bg-emerald-50 transition-colors">
                      <p className="text-[9px] text-gray-400 uppercase font-heading tracking-[0.2em] mb-2">{s.l}</p>
                      <p className="text-xs font-heading tracking-widest text-black uppercase">{s.v}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="flex items-center gap-4 font-heading text-[11px] tracking-[0.6em] text-emerald-600 mb-8 uppercase font-bold">
                  <Shield size={16} /> BALLISTIC_CHASSIS
                </h4>
                <div className="grid grid-cols-2 gap-px bg-black/10 border border-black/5">
                  {[
                    { l: "Brake_Sys", v: "Dual Disc CBS" },
                    { l: "Damping", v: "Telescopic Fork" },
                    { l: "Traction", v: "17\" Multi-Alloy" },
                    { l: "Skeletal", v: "Tubular Steel" }
                  ].map((s, i) => (
                    <div key={i} className="bg-white p-6 hover:bg-emerald-50 transition-colors">
                      <p className="text-[9px] text-gray-400 uppercase font-heading tracking-[0.2em] mb-2">{s.l}</p>
                      <p className="text-xs font-heading tracking-widest text-black uppercase">{s.v}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <button className="w-full bg-emerald-600 py-7 text-white font-heading text-[11px] font-black tracking-[0.5em] hover:bg-black transition-all shadow-xl uppercase">
              RESERVE_UNIT_NOW
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BikeDetailPanel;