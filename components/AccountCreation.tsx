import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Lock, ChevronRight, CheckCircle, ArrowLeft, ShieldCheck, Zap, Terminal, Fingerprint } from 'lucide-react';

interface AccountCreationProps {
  onBack: () => void;
}

const AccountCreation: React.FC<AccountCreationProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setLoading(false);
    }, 800);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-20 px-6 min-h-screen bg-[#fafafa]"
    >
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-[10px] font-heading tracking-[0.4em] text-gray-400 hover:text-black transition-colors mb-16 uppercase font-black"
        >
          <ArrowLeft size={16} /> RETURN_TO_DASHBOARD
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          <div className="lg:col-span-4 space-y-16">
            <div>
              <span className="text-emerald-600 font-heading text-[10px] tracking-[0.8em] uppercase font-black mb-6 block border-l-2 border-emerald-500 pl-4">CORE_GATEWAY</span>
              <h1 className="font-heading text-6xl font-black text-black uppercase tracking-tighter leading-none">OWNER<br /><span className="text-emerald-500 italic">ONBOARD</span></h1>
            </div>

            <div className="space-y-10">
              {[
                { s: 1, l: "BIOMETRIC_PROFILE", d: "Personal identity verification" },
                { s: 2, l: "UNIT_REGISTRATION", d: "Connect BNC Chassis telemetry" },
                { s: 3, l: "ACCESS_ENCRYPTION", d: "Secure owner signature" }
              ].map((item) => (
                <div key={item.s} className={`flex gap-6 relative ${step < item.s ? 'opacity-30' : 'opacity-100'} transition-opacity`}>
                  <div className={`w-10 h-10 flex items-center justify-center font-heading text-xs font-black transition-all border-2 ${step >= item.s ? 'bg-black text-white border-black' : 'border-black/10 text-gray-300'}`}>
                    {step > item.s ? <CheckCircle size={16} className="text-emerald-500" /> : item.s}
                  </div>
                  <div>
                    <h4 className="font-heading text-[10px] tracking-widest uppercase font-black text-black">{item.l}</h4>
                    <p className="text-[9px] font-heading text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">{item.d}</p>
                  </div>
                  {item.s < 3 && <div className="absolute top-10 left-5 w-px h-10 bg-black/10" />}
                </div>
              ))}
            </div>

            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Fingerprint className="text-emerald-500" size={24} />
                <span className="font-heading text-[9px] font-black tracking-widest text-black">ENCRYPTION: AES_256</span>
              </div>
              <p className="text-[9px] font-heading text-gray-400 leading-relaxed uppercase tracking-widest">
                Your owner identity is decentralized and protected by the BNC Neural Network protocol.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-12 border border-black/5 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }} className="space-y-10">
                  <div className="flex items-center gap-3">
                    <Terminal size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-heading text-[9px] tracking-[0.5em] uppercase font-black">BLOCK_01: BIOMETRICS</span>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-heading tracking-widest text-gray-400 uppercase font-black">IDENTIFIER_NAME</label>
                      <input type="text" placeholder="ADITYA_VERMA" className="w-full bg-slate-50 border border-black/5 px-8 py-5 font-heading text-sm uppercase tracking-widest focus:border-emerald-500 outline-none transition-colors" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-heading tracking-widest text-gray-400 uppercase font-black">NEURAL_EMAIL</label>
                        <input type="email" placeholder="USER@BNC.IO" className="w-full bg-slate-50 border border-black/5 px-8 py-5 font-heading text-sm uppercase tracking-widest focus:border-emerald-500 outline-none transition-colors" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-heading tracking-widest text-gray-400 uppercase font-black">MOBILE_UID</label>
                        <input type="tel" placeholder="+91-0000000000" className="w-full bg-slate-50 border border-black/5 px-8 py-5 font-heading text-sm uppercase tracking-widest focus:border-emerald-500 outline-none transition-colors" />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={loading}
                    className="w-full bg-black text-white py-7 font-heading text-sm font-black tracking-[0.5em] hover:bg-emerald-600 transition-all uppercase flex items-center justify-center gap-4"
                  >
                    {loading ? 'SYNCHRONIZING...' : 'CONTINUE_TO_UNIT_SYNC'}
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }} className="space-y-10">
                  <div className="flex items-center gap-3">
                    <Terminal size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-heading text-[9px] tracking-[0.5em] uppercase font-black">BLOCK_02: UNIT_SYNC</span>
                  </div>

                  <div className="bg-emerald-50/30 p-10 border border-emerald-500/10 flex items-center gap-8">
                    <div className="w-20 h-20 bg-white border border-black/5 flex items-center justify-center text-emerald-500">
                      <Zap size={32} />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs font-black uppercase mb-2">SCAN CHASSIS QR</h4>
                      <p className="text-[10px] font-heading text-gray-400 uppercase tracking-widest leading-relaxed">
                        Scan the identifier on the frame fork or input the BNC_VIN manually.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-heading tracking-widest text-gray-400 uppercase font-black">VEHICLE_IDENTIFIER_VIN</label>
                    <input type="text" placeholder="BNC-S110-XXXX-XXXX" className="w-full bg-slate-50 border border-black/5 px-8 py-5 font-heading text-sm uppercase tracking-widest focus:border-emerald-500 outline-none transition-colors" />
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 border border-black/10 py-7 font-heading text-sm font-black tracking-widest uppercase hover:bg-slate-50">BACK</button>
                    <button onClick={handleNext} disabled={loading} className="flex-[2] bg-black text-white py-7 font-heading text-sm font-black tracking-widest uppercase hover:bg-emerald-600">{loading ? 'SCANNING...' : 'VALIDATE_SYNC'}</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }} className="space-y-10">
                  <div className="flex items-center gap-3">
                    <Terminal size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-heading text-[9px] tracking-[0.5em] uppercase font-black">BLOCK_03: SECURITY</span>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-xs font-heading tracking-widest text-gray-400 uppercase font-black">PRIVATE_KEY_PASSWORD</label>
                      <input type="password" placeholder="MIN_12_CHARACTERS" className="w-full bg-slate-50 border border-black/5 px-8 py-5 font-heading text-sm uppercase tracking-widest focus:border-emerald-500 outline-none transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-heading tracking-widest text-gray-400 uppercase font-black">CONFIRM_PRIVATE_KEY</label>
                      <input type="password" placeholder="RE-ENTER_PASSWORD" className="w-full bg-slate-50 border border-black/5 px-8 py-5 font-heading text-sm uppercase tracking-widest focus:border-emerald-500 outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-50 border border-black/5">
                    <ShieldCheck className="text-emerald-500 shrink-0" size={20} />
                    <p className="text-[9px] font-heading text-gray-400 leading-relaxed uppercase tracking-widest">
                      I acknowledge that establishing this owner identity links my biometric data with BNC Motors' secure cloud infrastructure.
                    </p>
                  </div>

                  <button onClick={() => alert('OWNER_IDENTITY_ESTABLISHED')} className="w-full bg-emerald-600 text-white py-7 font-heading text-sm font-black tracking-[0.5em] hover:bg-black transition-all uppercase shadow-xl shadow-emerald-500/20">
                    ESTABLISH_IDENTITY
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-0 right-0 opacity-[0.03] p-4 pointer-events-none">
              <Fingerprint size={120} className="text-black" />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default AccountCreation;