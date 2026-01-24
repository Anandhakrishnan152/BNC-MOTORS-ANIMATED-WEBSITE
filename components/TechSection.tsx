import React from 'react';
import { Cpu, Battery, ShieldCheck, Zap } from 'lucide-react';
import PerformanceChart from './PerformanceChart';
import { motion, Variants } from 'framer-motion';

const TechSection: React.FC = () => {
  const features = [
    {
      icon: <Battery className="text-emerald-600" />,
      title: "CORE_CELL_V4",
      desc: "High-density energy storage with integrated thermal management."
    },
    {
      icon: <Zap className="text-emerald-600" />,
      title: "KINETIC_FLOW",
      desc: "Optimized propulsion system delivering peak torque efficiently."
    },
    {
      icon: <ShieldCheck className="text-emerald-600" />,
      title: "SECURE_SKULL",
      desc: "Reinforced skeletal chassis for superior rider safety."
    },
    {
      icon: <Cpu className="text-emerald-600" />,
      title: "NEURAL_LINK",
      desc: "Cloud-synced telemetry for real-time health monitoring."
    }
  ];

  // Fix: Explicitly typing containerVariants as Variants to prevent TypeScript inference errors with string easing values.
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Fix: Explicitly typing itemVariants as Variants to satisfy TypeScript's strict Easing requirements.
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="tech" className="py-32 px-6 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-emerald-600 font-heading text-[11px] tracking-[0.5em] uppercase mb-6 block font-bold">Innovation_Matrix</span>
            <h2 className="font-heading text-6xl md:text-8xl font-black mb-8 leading-none text-black uppercase tracking-tighter">ETROL <br/><span className="text-emerald-500">SYSTEMS</span></h2>
            <p className="text-black max-w-xl font-heading text-xs tracking-[0.2em] uppercase leading-relaxed font-bold">
              BNC is an advanced energy ecosystem designed for sustainable performance across the Indian sub-continent.
            </p>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="w-32 h-32 border border-emerald-500/20 rounded-full flex items-center justify-center animate-spin-slow">
              <Cpu className="text-emerald-500/30" size={40} />
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
              className="bg-white p-12 rounded-none border border-black/5 hover:border-emerald-500/30 shadow-sm transition-all group relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-emerald-50 flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h4 className="font-heading text-sm mb-6 tracking-[0.3em] uppercase text-black font-black">{f.title}</h4>
                    <p className="text-black text-[10px] leading-relaxed font-heading tracking-widest uppercase font-bold">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24"
        >
          <PerformanceChart />
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;