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

      {/* Decorative Background Bike */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-0 w-[800px] h-[800px] pointer-events-none z-0 hidden lg:block"
      >
        <img
          src="/services/images/perfetto_green.png"
          alt="Tech Background"
          className="w-full h-full object-contain grayscale opacity-50"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-emerald-600 font-heading text-[11px] tracking-[0.5em] uppercase mb-6 block font-black">Innovation_Matrix</span>
            <h2 className="font-heading text-6xl md:text-8xl font-black mb-8 leading-none text-black uppercase tracking-tighter">ETROL <br /><span className="text-emerald-500">SYSTEMS</span></h2>
            <p className="text-black max-w-xl font-heading text-xs tracking-[0.2em] uppercase leading-relaxed font-bold">
              BNC is an advanced energy ecosystem designed for sustainable performance across the Indian sub-continent.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/2 flex justify-center items-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full scale-75 animate-pulse" />

            {/* Main Image with Floating Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 1, 0, -1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="/etrol.png.jpeg"
                alt="Etrol Battery System"
                className="w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />

              {/* Technical Overlay Lines */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-500/50" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-500/50" />
            </motion.div>

            {/* Scanning Laser Line */}
            <motion.div
              className="absolute top-[10%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.8)] z-20 pointer-events-none"
              animate={{ top: ["10%", "90%", "10%"], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
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
              whileHover="hover"
              className="bg-white p-12 rounded-none border border-black/5 hover:border-emerald-500/30 shadow-sm transition-all group relative overflow-hidden"
            >
              <motion.div
                className="w-16 h-16 bg-emerald-50 flex items-center justify-center mb-10 transition-colors"
                variants={{
                  hover: {
                    rotate: 360,
                    backgroundColor: "#059669",
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "backOut" }
                  }
                }}
              >
                <div className="text-emerald-600 group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
              </motion.div>
              <h4 className="font-heading text-sm mb-6 tracking-[0.3em] uppercase text-black font-black group-hover:text-emerald-600 transition-colors">{f.title}</h4>
              <p className="text-black text-[10px] leading-relaxed font-heading tracking-widest uppercase font-black">{f.desc}</p>

              {/* Decorative Corner */}
              <motion.div
                className="absolute top-0 right-0 w-0 h-0 border-t-[3px] border-r-[3px] border-emerald-500 opacity-0"
                variants={{
                  hover: {
                    width: 20,
                    height: 20,
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }
                }}
              />
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