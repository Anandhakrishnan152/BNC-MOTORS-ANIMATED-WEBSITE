import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIKE_MODELS } from '../constants';
import { BikeModel, ColorVariant } from '../types';
import { ChevronRight, Maximize2, Zap, Terminal } from 'lucide-react';
import BikeDetailPanel from './BikeDetailPanel';
import ColorSelector from './ColorSelector';
import BikeImageWithColor from './BikeImageWithColor';

const ModelShowcase: React.FC = () => {
  const [activeModel, setActiveModel] = useState<BikeModel>(BIKE_MODELS[0]);
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(BIKE_MODELS[0].colorVariants[0]);
  const [showDetail, setShowDetail] = useState(false);

  const handleModelChange = (model: BikeModel) => {
    setActiveModel(model);
    setSelectedColor(model.colorVariants[0]); // Reset to first color when switching models
  };

  return (
    <section id="models" className="py-40 px-6 max-w-7xl mx-auto relative bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 border-b border-black/5 pb-12">
        <div className="relative overflow-hidden">
          <motion.span
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-emerald-600 font-heading text-[10px] tracking-[0.6em] uppercase mb-4 block font-black"
          >
            Fleet_Catalog_v4.1
          </motion.span>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-6xl md:text-9xl font-black tracking-tighter text-black uppercase leading-none"
          >
            THE <span className="text-emerald-500 inline-block hover:animate-pulse">LINEUP</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {BIKE_MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => handleModelChange(m)}
              className={`relative px-12 py-5 font-heading text-[10px] tracking-[0.3em] uppercase skew-x-[-12deg] transition-all z-10 group ${activeModel.id === m.id ? 'text-white' : 'text-gray-400 hover:text-black'
                }`}
            >
              {activeModel.id === m.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black shadow-xl shadow-emerald-500/20 -z-10 border border-emerald-500/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {/* Border for inactive state */}
              {activeModel.id !== m.id && (
                <div className="absolute inset-0 border border-black/10 group-hover:border-black/30 -z-10 transition-colors" />
              )}

              <span className="relative z-10 inline-block skew-x-[12deg] font-black">{m.name.split(' ').pop()}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center min-h-[600px]">
        <div className="lg:col-span-6 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6 whitespace-nowrap">
                <Terminal className="text-emerald-600 shrink-0" size={20} />
                <span className="font-heading text-xs md:text-sm tracking-[0.2em] text-emerald-600 uppercase font-black">
                  IDENTIFIER // <motion.span key={activeModel.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{activeModel.id}</motion.span>
                </span>
              </div>

              <motion.h3
                key={activeModel.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-black via-black to-emerald-600 uppercase tracking-tighter leading-none mb-6 filter drop-shadow-sm pb-4 whitespace-pre-line"
              >
                {activeModel.id === 'S110_EV' ? 'CHALLENGER\nS110' : activeModel.name}
              </motion.h3>
              <p className="text-gray-400 font-heading text-[11px] tracking-[0.2em] uppercase leading-relaxed max-w-md">{activeModel.tagline}</p>

              <div className="grid grid-cols-2 gap-4 mt-12">
                {activeModel.specs.map((spec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="bg-slate-50 p-6 border border-black/5 group hover:bg-emerald-50 transition-colors"
                  >
                    <span className="text-black text-[8px] font-heading uppercase tracking-[0.4em] block mb-2 font-black">{spec.label}</span>
                    <span className="text-3xl font-heading font-black text-black">{spec.value}<span className="text-[10px] text-emerald-600 ml-1">{spec.unit}</span></span>
                  </motion.div>
                ))}
              </div>

              {/* Color Selector */}
              <div className="mt-12 border-t border-black/5 pt-8">
                <span className="text-[9px] font-heading tracking-[0.4em] text-black uppercase block mb-4 font-black">SELECT_COLOR</span>
                <ColorSelector
                  colorVariants={activeModel.colorVariants}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                  size="large"
                />
              </div>

              <div className="flex gap-4 mt-12">
                <button
                  onClick={() => setShowDetail(true)}
                  className="flex-1 bg-black text-white py-6 font-heading text-[10px] font-black tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-emerald-600 transition-all uppercase"
                >
                  VIEW_BLUEPRINTS <Maximize2 size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-6 relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeModel.id}-${selectedColor.name}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative aspect-video flex items-center justify-center p-4 overflow-hidden border border-black/5 bg-slate-50"
            >
              <BikeImageWithColor
                image={selectedColor.image}
                alt={`${activeModel.name} - ${selectedColor.name}`}
                selectedColor={selectedColor}
                className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-150 scale-100"
              />
              <div className="absolute inset-0 opacity-10 pointer-events-none electric-grid" />

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <BikeDetailPanel bike={showDetail ? activeModel : null} onClose={() => setShowDetail(false)} />
    </section>
  );
};

export default ModelShowcase;