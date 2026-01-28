import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Zap } from 'lucide-react';
import { BIKE_MODELS } from '../constants';
import { ColorVariant } from '../types';
import ColorSelector from './ColorSelector';
import BikeImageWithColor from './BikeImageWithColor';

interface ShopProps {
  onBack: () => void;
}

const Shop: React.FC<ShopProps> = ({ onBack }) => {
  // Initialize color selection state for each bike
  const [selectedColors, setSelectedColors] = useState<Record<string, ColorVariant>>(
    BIKE_MODELS.reduce((acc, bike) => {
      acc[bike.id] = bike.colorVariants[0];
      return acc;
    }, {} as Record<string, ColorVariant>)
  );

  const handleColorChange = (bikeId: string, color: ColorVariant) => {
    setSelectedColors(prev => ({
      ...prev,
      [bikeId]: color
    }));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-emerald-600 font-heading text-[10px] tracking-[0.8em] uppercase font-black mb-4 block">MARKET_ACCESS_NODE</span>
            <h1 className="font-heading text-6xl md:text-8xl font-black text-black uppercase tracking-tighter">BNC <span className="text-emerald-500">STORE</span></h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] font-heading text-black tracking-widest uppercase mb-1 font-black">CART_STATUS</p>
              <p className="text-sm font-heading font-black text-black">01 ITEM(S) // ACTIVE</p>
            </div>
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer">
              <ShoppingBag size={24} />
            </div>
          </div>
        </div>

        <div className="flex gap-8 border-b border-black/5 pb-8 mb-16 font-heading text-[10px] tracking-[0.4em] text-black uppercase font-black overflow-x-auto whitespace-nowrap">
          <button className="text-black border-b-2 border-emerald-500 pb-8 -mb-[33px]">ALL_MODELS</button>
          <button className="hover:text-black transition-colors pb-8">COMMUTER</button>
          <button className="hover:text-black transition-colors pb-8">PERFORMANCE</button>
          <button className="hover:text-black transition-colors pb-8">ACCESSORIES</button>
          <button className="hover:text-black transition-colors pb-8">ETROL_UPGRADES</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BIKE_MODELS.map((bike, i) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border border-black/5 relative overflow-hidden flex flex-col"
            >
              <div
                className="aspect-[4/5] relative flex items-center justify-center p-4 overflow-hidden bg-slate-50"
              >
                <BikeImageWithColor
                  image={selectedColors[bike.id].image}
                  alt={`${bike.name} - ${selectedColors[bike.id].name}`}
                  selectedColor={selectedColors[bike.id]}
                  className="w-full h-full object-contain transition-all duration-150 scale-100"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="bg-black text-white px-4 py-1 text-[8px] font-heading font-black tracking-widest uppercase">
                    {bike.id === 'bnc-boss' ? 'LIMITED_EDITION' : 'IN_STOCK'}
                  </div>
                  <div className="bg-emerald-500 text-white px-4 py-1 text-[8px] font-heading font-black tracking-widest uppercase">
                    5Y_WARRANTY
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-[1px] border-emerald-500/30 m-4">
                  <div className="absolute top-0 right-0 p-2 text-[7px] font-heading text-emerald-600 font-black tracking-tighter">SCAN_V04.2</div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading text-2xl font-black text-black tracking-tighter uppercase">{bike.name}</h3>
                    <div className="flex text-emerald-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                  </div>
                  <p className="text-[10px] font-heading tracking-[0.2em] text-black uppercase leading-relaxed mb-8 font-black">
                    {bike.tagline}
                  </p>

                  {/* Color Selector */}
                  <div className="mb-6">
                    <span className="text-[8px] font-heading tracking-[0.3em] text-black uppercase block mb-3 font-black">COLOR</span>
                    <ColorSelector
                      colorVariants={bike.colorVariants}
                      selectedColor={selectedColors[bike.id]}
                      onColorChange={(color) => handleColorChange(bike.id, color)}
                      size="small"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="border border-black/5 p-3">
                      <p className="text-[8px] text-black font-heading mb-1 uppercase font-black">RANGE</p>
                      <p className="text-sm font-heading font-black text-black uppercase">{bike.specs[1].value} {bike.specs[1].unit}</p>
                    </div>
                    <div className="border border-black/5 p-3">
                      <p className="text-[8px] text-black font-heading mb-1 uppercase font-black">SPEED</p>
                      <p className="text-sm font-heading font-black text-black uppercase">{bike.specs[2].value} {bike.specs[2].unit}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-black/5 pt-8">
                  <div>
                    <span className="text-[8px] font-heading text-black block mb-1 uppercase tracking-widest font-black">STARTING_AT</span>
                    <span className="text-2xl font-heading font-black text-black">{bike.price}</span>
                  </div>
                  <button className="bg-black text-white px-8 py-4 font-heading text-[10px] font-black tracking-widest hover:bg-emerald-600 transition-all transform skew-x-[-12deg]">
                    <span className="inline-block skew-x-[12deg]">ADD_TO_CART</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-emerald-600 flex items-center justify-center">
              <Zap className="text-white" size={32} />
            </div>
            <div>
              <h4 className="font-heading text-2xl font-black">ETROL POWER PACKS</h4>
              <p className="text-white/50 font-heading text-[10px] tracking-widest uppercase mt-2">Upgrade your range or add a secondary cell unit.</p>
            </div>
          </div>
          <button className="border border-emerald-500 text-emerald-500 px-12 py-5 font-heading text-[10px] font-black tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
            BROWSE_UPGRADES
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shop;