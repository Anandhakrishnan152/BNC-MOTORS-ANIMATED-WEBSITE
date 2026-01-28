import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, HardDrive, Zap, Info, Layers, CheckCircle2, CloudSync, ArrowUpRight } from 'lucide-react';

const EtrolDeepDive: React.FC = () => {
  const safetyLayers = [
    { label: "PHYSICAL", desc: "Reinforced casing with IP67 protection." },
    { label: "THERMAL", desc: "Dual-loop management preventing hotspots." },
    { label: "ELECTRICAL", desc: "Multi-point surge and short-circuit protection." },
    { label: "SOFTWARE", desc: "Real-time algorithmic monitoring & throttling." },
    { label: "SYSTEM", desc: "Automated disconnect in critical fault states." }
  ];

  const features = [
    {
      icon: <Layers size={20} />,
      title: "MODULAR ARCHITECTURE",
      desc: "Our unique modular design ensures that servicing and upgrades are lightning fast. Replace individual cell units rather than the whole pack."
    },
    {
      icon: <CloudSync size={20} />,
      title: "AI-DRIVEN BMS",
      desc: "Every Etrol unit is cloud-connected. Our AI predicts cell degradation and optimizes charging cycles for maximum longevity."
    },
    {
      icon: <Zap size={20} />,
      title: "PEAK DISCHARGE",
      desc: "Engineered for high-torque demands. Etrol delivers consistent power even at low states of charge without throttling performance."
    }
  ];

  return (
    <section id="etrol" className="py-40 px-6 bg-white relative overflow-hidden border-b border-black/5">
      {/* Background Tech Overlays */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none select-none">
        <div className="font-heading text-[20rem] font-black leading-none text-black">TECH</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* Left Column: Core Identity */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-emerald-600 font-heading text-[10px] tracking-[0.8em] uppercase font-black mb-8 block">PROPRIETARY_ENERGY_NODE</span>
              <h2 className="font-heading text-6xl md:text-8xl font-black text-black uppercase tracking-tighter mb-10 leading-[0.85]">
                ETROL <br /><span className="text-emerald-500 italic">4.0 GEN</span>
              </h2>
              <p className="text-black font-heading text-[11px] tracking-[0.3em] leading-relaxed uppercase mb-12 font-bold">
                Designed from the ground up to solve the challenges of Indian mobility. Etrol isn't just a battery; it's a complete intelligent energy ecosystem.
              </p>

              <div className="space-y-4">
                <h4 className="font-heading text-sm tracking-[0.4em] text-black font-black mb-6 flex items-center gap-3">
                  <ShieldAlert size={18} className="text-emerald-500" />
                  5-LAYER SAFETY PROTOCOL
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {safetyLayers.map((layer, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-5 bg-slate-50 border border-black/5 group hover:bg-emerald-50 transition-all"
                    >
                      <span className="text-xs font-heading font-black tracking-widest text-black group-hover:text-emerald-600">{layer.label}</span>
                      <span className="text-[11px] font-heading text-black tracking-wider text-right max-w-[200px] font-bold">{layer.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <h4 className="font-heading text-sm tracking-[0.4em] text-black font-black mb-6 flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  SAFEST BATTERY IN INDIA
                </h4>
                <div className="bg-emerald-50/50 border border-emerald-500/20 p-6">
                  <ul className="space-y-4">
                    {[
                      "Tested to > 300°C continuous internal temperature",
                      "Tested to extreme electrical abuses in worst case failure-modes",
                      "IP67 rated",
                      "Compliant to latest Govt standards: AIS-156 Amendment 3, Phase 2"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-emerald-600 mt-1.5 rounded-full shrink-0" />
                        <span className="text-xs font-heading tracking-wider text-black font-bold uppercase leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Breakdown */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 border border-black/5 hover:border-emerald-500/30 transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all text-emerald-600">
                    {feat.icon}
                  </div>
                  <h5 className="font-heading text-xs font-black mb-4 tracking-tighter text-black uppercase">{feat.title}</h5>
                  <p className="text-black text-[10px] font-heading tracking-[0.2em] leading-relaxed uppercase font-black">{feat.desc}</p>
                </motion.div>
              ))}

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-black p-8 text-white flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-heading tracking-[0.4em] uppercase text-emerald-500 font-black">WARRANTY_METRIC</span>
                  <ArrowUpRight size={20} className="text-emerald-500" />
                </div>
                <div>
                  <div className="text-5xl font-heading font-black tracking-tighter mb-2">5 <span className="text-xs font-bold">YEARS</span></div>
                  <p className="text-[9px] font-heading tracking-widest text-white/50 uppercase">OR 1,20,000 KM OF ZERO DEGRADATION GUARANTEE</p>
                </div>
              </motion.div>
            </div>

            {/* Exploded Tech Visualization Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-emerald-50/50 border border-emerald-500/10 flex flex-col md:flex-row items-center gap-12 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 w-full md:w-1/2">
                <h4 className="font-heading text-xl font-black text-black mb-4">INSPECT THE ARCHITECTURE</h4>
                <p className="text-[10px] font-heading tracking-[0.2em] text-black uppercase leading-loose font-black">
                  Etrol batteries feature a reinforced "Skull" chassis to withstand vibrations, extreme temperatures, and Indian weather conditions.
                </p>
                <button className="mt-8 flex items-center gap-3 text-[10px] font-heading font-black tracking-[0.4em] text-emerald-600 hover:text-black transition-colors">
                  DOWNLOAD_TECH_WHITEPAPER <Info size={14} />
                </button>
              </div>
              <div className="relative w-full md:w-1/2 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <img
                    src="/etrol.png.jpeg"
                    alt="Etrol Battery Module"
                    className="w-64 h-auto object-contain drop-shadow-2xl hover:drop-shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 rotate-[-5deg] hover:rotate-0"
                  />

                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-emerald-500/10 blur-2xl -z-10"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EtrolDeepDive;