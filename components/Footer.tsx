import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-6 border-t border-black/5 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-50 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-4 mb-10 group">
            <div className="relative">
              <img src="/BNC_logo_big.png" alt="BNC Logo" className="w-12 h-auto transition-transform group-hover:scale-110 duration-500" />
            </div>
            <span className="font-heading text-2xl font-black tracking-tighter text-black">BNC <span className="text-emerald-500">MOTORS</span></span>
          </div>
          <p className="text-black text-sm mb-10 leading-relaxed font-heading tracking-widest text-[10px] uppercase font-bold">
            Pure Electric Paradigm. Engineering the next era of mobility for the Indian sub-continent and beyond.
          </p>
          <div className="flex space-x-6">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="text-black hover:text-black transition-all hover:scale-125"><Icon size={22} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-[11px] tracking-[0.5em] mb-10 uppercase text-emerald-600 font-bold underline decoration-emerald-500/20 underline-offset-8">Fleet_Access</h4>
          <ul className="space-y-6 text-[10px] font-heading tracking-[0.3em] text-black uppercase font-bold">
            <li><a href="#" className="hover:text-black transition-colors">Challenger_S110</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Perfetto_EV</a></li>
            <li><a href="#" className="hover:text-black transition-colors">The_Boss_S150</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors font-black">Pre_Order_Link</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-[11px] tracking-[0.5em] mb-10 uppercase text-emerald-600 font-bold underline decoration-emerald-500/20 underline-offset-8">Core_Nodes</h4>
          <ul className="space-y-6 text-[10px] font-heading tracking-[0.3em] text-gray-500 uppercase">
            <li><a href="#" className="hover:text-black transition-colors">Etrol_Power</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Service_Hubs</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Tech_Stack</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-[11px] tracking-[0.5em] mb-10 uppercase text-emerald-600 font-bold underline decoration-emerald-500/20 underline-offset-8">Data_Stream</h4>
          <p className="text-[10px] text-black mb-8 uppercase tracking-[0.2em] font-heading leading-relaxed font-bold">Join the movement and synchronize with the BNC Motors frequency.</p>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="YOUR@EMAIL.COM" 
              className="bg-slate-50 border border-black/5 rounded-none px-6 py-4 text-[10px] font-heading text-black focus:ring-1 focus:ring-emerald-500 outline-none flex-1 uppercase tracking-widest"
            />
            <button className="bg-black text-white px-10 py-4 font-heading text-[10px] font-black tracking-widest hover:bg-emerald-600 transition-all">
              SYNCHRONIZE
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-black font-heading tracking-[0.4em] gap-8 font-bold">
        <div>© 2024 BNC MOTORS // ALL RIGHTS RESERVED // PRECISION_SECURED</div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-black transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-black transition-colors">TERMS</a>
          <a href="#" className="hover:text-black transition-colors">SUPPORT</a>
        </div>
      </div>
    </footer>
  );
};export default Footer;