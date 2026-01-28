import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap, Terminal } from 'lucide-react';
import { BikeModel, ColorVariant } from '../types';
import ColorSelector from './ColorSelector';
import BikeImageWithColor from './BikeImageWithColor';

interface Props {
  bike: BikeModel | null;
  onClose: () => void;
}

const BikeDetailPanel: React.FC<Props> = ({ bike, onClose }) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant | null>(null);

  // Update selected color when bike changes
  useEffect(() => {
    if (bike) {
      setSelectedColor(bike.colorVariants[0]);
    }
  }, [bike]);

  if (!bike || !selectedColor) return null;

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
                <span className="text-emerald-600 font-heading text-[10px] tracking-[0.5em] uppercase font-black">CORE_BLUEPRINT_v2.0</span>
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
            {/* Color Selector */}
            <div>
              <span className="text-[9px] font-heading tracking-[0.4em] text-emerald-600 uppercase block mb-4 font-black">SELECT_COLOR</span>
              <ColorSelector
                colorVariants={bike.colorVariants}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                size="medium"
              />
            </div>

            <div
              className="relative aspect-video rounded-none overflow-hidden border border-black/5 bg-slate-50 group"
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <BikeImageWithColor
                  image={selectedColor.image}
                  alt={`${bike.name} - ${selectedColor.name}`}
                  selectedColor={selectedColor}
                  className="w-full h-full object-contain transition-all duration-150 scale-100"
                />
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-4 text-[8px] font-heading tracking-[0.5em] text-emerald-600/40">GEO_SYNC: ACTIVE</div>
                <div className="absolute bottom-4 right-4 text-[8px] font-heading tracking-[0.5em] text-emerald-600/40">RENDER: WIREFRAME_VFX</div>
              </div>
              <div className="absolute inset-0 border border-black/5 pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 gap-12">
              <section>
                <h4 className="flex items-center gap-4 font-heading text-[11px] tracking-[0.6em] text-emerald-600 mb-8 uppercase font-black">
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
                <h4 className="flex items-center gap-4 font-heading text-[11px] tracking-[0.6em] text-emerald-600 mb-8 uppercase font-black">
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

              <section>
                <h4 className="flex items-center gap-4 font-heading text-[11px] tracking-[0.6em] text-emerald-600 mb-8 uppercase font-black">
                  <Shield size={16} /> SAFEST BATTERY IN INDIA
                </h4>
                <div className="bg-white border border-black/5 p-8 space-y-6 hover:bg-emerald-50 transition-colors">
                  <ul className="space-y-4">
                    {[
                      "Tested to > 300°C continuous internal temperature",
                      "Tested to extreme electrical abuses in worst case failure-modes",
                      "IP67 rated",
                      "Compliant to latest Govt standards: AIS-156 Amendment 3, Phase 2"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 bg-emerald-600 mt-1.5 rounded-full shrink-0" />
                        <span className="text-sm font-heading tracking-wider text-black font-bold uppercase leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
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