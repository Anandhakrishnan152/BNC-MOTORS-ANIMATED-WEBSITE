import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Battery, Zap } from 'lucide-react';

const WarrantySection: React.FC = () => {
    const warranties = [
        {
            year: "07",
            label: "Chassis Warranty",
            icon: <ShieldCheck size={32} className="text-emerald-500" />,
            desc: "High-grade alloy frame structure."
        },
        {
            year: "05",
            label: "Battery Warranty",
            icon: <Battery size={32} className="text-emerald-500" />,
            desc: "Etrol 4.0 Gen Proprietary Tech."
        },
        {
            year: "03",
            label: "Motor Warranty",
            icon: <Zap size={32} className="text-emerald-500" />,
            desc: "High-torque magnetic drive."
        }
    ];

    return (
        <section className="py-32 px-6 bg-slate-50 border-b border-black/5 relative overflow-hidden">
            {/* Background Animated Bike */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <motion.div
                    className="absolute -right-[25%] top-1/2 -translate-y-1/2 w-[1200px] h-[800px] opacity-[0.06] mix-blend-multiply"
                    animate={{
                        x: [0, -40, 0],
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <img
                        src="/challenger_s110_black.png"
                        alt="Bike Shadow"
                        className="w-full h-full object-contain grayscale brightness-0 contrast-150"
                    />
                </motion.div>

                <motion.div
                    className="absolute -left-[15%] bottom-[-20%] w-[900px] h-[600px] opacity-[0.04] mix-blend-multiply"
                    animate={{
                        x: [0, 40, 0],
                        rotate: [0, 2, 0]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                >
                    <img
                        src="/challenger_s110_black.png"
                        alt="Bike Shadow Ref"
                        className="w-full h-full object-contain grayscale brightness-0 blur-sm transform scale-x-[-1]"
                    />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-black">
                        Safe and <span className="text-emerald-600">Reliable</span>
                    </h2>
                    <p className="font-heading text-sm md:text-lg text-gray-400 tracking-[0.3em] uppercase font-bold">
                        Confidence you can count on
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {warranties.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-10 border border-black/5 hover:border-emerald-500 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 group flex flex-col items-center text-center"
                        >
                            <div className="mb-8 p-4 bg-emerald-50 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                {React.cloneElement(item.icon as React.ReactElement, { className: "group-hover:text-white text-emerald-600 transition-colors" })}
                            </div>

                            <div className="font-heading font-black text-6xl md:text-8xl text-black mb-2 opacity-90">
                                {item.year}
                            </div>
                            <div className="font-heading text-emerald-600 text-sm tracking-[0.3em] uppercase font-black mb-4">
                                Years
                            </div>

                            <h3 className="font-heading text-xl font-black uppercase tracking-tight mb-2 text-black">
                                {item.label}
                            </h3>
                            <p className="text-xs font-heading text-gray-400 uppercase tracking-widest font-bold">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WarrantySection;
