import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIKE_MODELS } from '../constants';
import { BikeModel } from '../types';
import { ChevronRight, Maximize2, Zap, Terminal } from 'lucide-react';
import BikeDetailPanel from './BikeDetailPanel';

const ModelShowcase: React.FC = () => {
  const [activeModel, setActiveModel] = useState<BikeModel>(BIKE_MODELS[0]);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section id="models" className="py-40 px-6 max-w-7xl mx-auto relative bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 border-b border-black/5 pb-12">
        <div className="relative">
          <span className="text-emerald-600 font-heading text-[10px] tracking-[0.6em] uppercase mb-4 block font-bold">Fleet_Catalog_v4.1</span>
          <h2 className="font-heading text-6xl md:text-9xl font-black tracking-tighter text-black uppercase leading-none">THE <span className="text-emerald-500">LINEUP</span></h2>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {BIKE_MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModel(m)}
              className={`px-12 py-5 font-heading text-[10px] tracking-[0.3em] transition-all uppercase skew-x-[-12deg] border ${
                activeModel.id === m.id 
                ? 'bg-black text-white border-black shadow-xl shadow-emerald-500/10' 
                : 'bg-white text-gray-400 hover:text-black border-black/5 hover:border-black/20'
              }`}
            >
              <span className="inline-block skew-x-[12deg]">{m.name.split(' ').pop()}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center min-h-[600px]">
        <div className="lg:col-span-5 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <Terminal className="text-emerald-600" size={16} />
                 <span className="font-heading text-[10px] tracking-[0.5em] text-emerald-600 uppercase">IDENTIFIER // {activeModel.id}</span>
              </div>
              
              <h3 className="font-heading text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-tight mb-6">{activeModel.name}</h3>
              <p className="text-gray-400 font-heading text-[11px] tracking-[0.2em] uppercase leading-relaxed max-w-md">{activeModel.tagline}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-12">
                {activeModel.specs.map((spec, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 border border-black/5 group hover:bg-emerald-50 transition-colors">
                    <span className="text-black text-[8px] font-heading uppercase tracking-[0.4em] block mb-2 font-bold">{spec.label}</span>
                    <span className="text-3xl font-heading font-black text-black">{spec.value}<span className="text-[10px] text-emerald-600 ml-1">{spec.unit}</span></span>
                  </div>
                ))}
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

        <div className="lg:col-span-7 relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative aspect-video flex items-center justify-center bg-emerald-50/10 p-12 overflow-hidden border border-black/5"
            >
              <img 
                src={activeModel.image} 
                alt={activeModel.name} 
                className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 opacity-10 pointer-events-none electric-grid" />
              <div className="absolute top-10 right-10">
                 <div className="bg-black text-white px-6 py-2 font-heading text-[9px] tracking-[0.5em] uppercase font-black">ACTIVE_NODE</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <BikeDetailPanel bike={showDetail ? activeModel : null} onClose={() => setShowDetail(false)} />
    </section>
  );
};

export default ModelShowcase;