import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

interface SupportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ y: 50, scale: 0.95, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: 50, scale: 0.95, opacity: 0 }}
                    className="relative w-full max-w-2xl bg-white border border-emerald-500/20 shadow-2xl overflow-hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 md:p-8 border-b border-black/5 bg-slate-50">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center rounded-none border border-emerald-500/20">
                                <MessageSquare className="text-emerald-600" size={20} />
                            </div>
                            <div>
                                <h2 className="font-heading text-xl font-black uppercase tracking-wider">Customer Support</h2>
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-heading">CONNECT_NODE_V1</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-colors border border-black/5"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-8 md:p-12 space-y-10">

                        <div className="space-y-2">
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest flex items-center gap-2 mb-4 text-emerald-600">
                                <MapPin size={16} /> Registered Office Address
                            </h3>
                            <div className="pl-6 border-l-2 border-black/5 text-sm font-heading font-black text-black leading-relaxed space-y-1 uppercase tracking-wide">
                                <p>BNC Motors Private Limited,</p>
                                <p>UNIT NO.3, SAIMAN THOTTAM, Udayampalayam,</p>
                                <p>Chinnavedampatti, Coimbatore, TamilNadu 641006. India</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <h3 className="font-heading text-lg font-black uppercase tracking-widest flex items-center gap-2 mb-4 text-emerald-600">
                                    <Phone size={16} /> Contact Numbers
                                </h3>
                                <div className="pl-6 border-l-2 border-black/5 text-sm font-heading font-black text-black leading-relaxed space-y-3">
                                    <div className="group flex items-center gap-2 cursor-pointer hover:text-emerald-600 transition-colors">
                                        <span>+91-01206089947</span>
                                    </div>
                                    <div className="group flex items-center gap-2 cursor-pointer hover:text-emerald-600 transition-colors">
                                        <span>+914224722561</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-heading text-lg font-black uppercase tracking-widest flex items-center gap-2 mb-4 text-emerald-600">
                                    <Mail size={16} /> Email Support
                                </h3>
                                <div className="pl-6 border-l-2 border-black/5 text-sm font-heading font-black text-black leading-relaxed">
                                    <p className="mb-2 text-gray-400 text-xs">For customer support please write to:</p>
                                    <a href="mailto:info@bncmotors.in" className="inline-block text-black hover:text-emerald-600 border-b border-black hover:border-emerald-600 transition-all uppercase">
                                        info@bncmotors.in
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-50 p-6 border border-emerald-500/10 mt-6">
                            <p className="text-xs font-heading text-center font-black tracking-widest text-emerald-800 uppercase">
                                Need more information or have a query? Feel free to contact us.
                            </p>
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SupportModal;
