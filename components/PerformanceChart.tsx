import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PERFORMANCE_DATA } from '../constants';
import { motion } from 'framer-motion';

const PerformanceChart: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-[500px] bg-slate-50 p-10 rounded-none border border-black/5 mt-12 relative overflow-hidden shadow-sm"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
      
      <h3 className="font-heading text-xs tracking-[0.5em] mb-12 flex items-center gap-4 uppercase font-bold text-black">
        <div className="w-3 h-3 bg-emerald-500 shadow-sm" />
        DATA_STREAM: FORCE_CURVE_ANALYSIS
      </h3>
      
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={PERFORMANCE_DATA}>
          <defs>
            <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="1 10" stroke="#e2e8f0" vertical={false} />
          <XAxis 
            dataKey="rpm" 
            stroke="#94a3b8" 
            fontSize={9} 
            fontFamily="Orbitron"
            tickFormatter={(val) => `${val} RPM`}
          />
          <YAxis stroke="#94a3b8" fontSize={9} fontFamily="Orbitron" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #10b981', borderRadius: '0', fontFamily: 'Orbitron', fontSize: '9px' }}
            itemStyle={{ color: '#10b981' }}
            cursor={{ stroke: '#10b981', strokeWidth: 1 }}
          />
          <Area
            type="monotone"
            dataKey="power"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorPower)"
            strokeWidth={4}
            animationDuration={1000}
          />
          <Area
            type="monotone"
            dataKey="torque"
            stroke="#000"
            fill="transparent"
            strokeWidth={1}
            strokeDasharray="10 5"
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-8 flex justify-center gap-12 text-[9px] font-heading tracking-[0.4em] text-black uppercase font-bold">
        <div className="flex items-center gap-3">
          <div className="w-6 h-1 bg-emerald-500" /> OUTPUT_kW
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-black border-dashed" /> MOMENTUM_Nm
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceChart;