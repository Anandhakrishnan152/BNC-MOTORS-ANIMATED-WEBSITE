import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, MapPin, Activity, Settings, LogOut, Cpu, Battery, Zap, History, UserPlus } from 'lucide-react';
import { View } from '../App';

interface ProfileProps {
  onNavigate: (view: View) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const user = {
    name: "ANANDHAKRISHNAN",
    id: "BNC_UID_0912",
    since: "MAR 2023",
    garage: [
      { name: "CHALLENGER S110", status: "ONLINE", charge: 84, location: "SALEM, TN" },
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-black text-white p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <User size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-emerald-500 rounded-none mb-8 flex items-center justify-center border-4 border-white/20">
                  <User size={48} className="text-black" />
                </div>
                <h2 className="font-heading text-4xl font-black tracking-tighter mb-2">{user.name}</h2>
                <p className="text-emerald-500 font-heading text-[10px] tracking-widest uppercase font-bold mb-8">VERIFIED_OWNER // {user.id}</p>
                
                <div className="space-y-4 pt-8 border-t border-white/10">
                   <div className="flex justify-between items-center text-[10px] font-heading tracking-widest">
                     <span className="text-white/50">MEMBER_SINCE</span>
                     <span>{user.since}</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px] font-heading tracking-widest">
                     <span className="text-white/50">LOYALTY_TIER</span>
                     <span className="text-emerald-500">PLATINUM_CORE</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button 
                onClick={() => onNavigate('register')}
                className="w-full flex items-center gap-6 p-6 border border-emerald-500/20 bg-emerald-50/30 hover:bg-emerald-50 transition-all font-heading text-[10px] tracking-[0.4em] font-bold text-emerald-600 uppercase text-left"
              >
                <UserPlus size={18} />
                CREATE_NEW_IDENTITY
              </button>
              {[
                { icon: <Activity size={18} />, label: "DRIVING_ANALYTICS" },
                { icon: <History size={18} />, label: "SERVICE_HISTORY" },
                { icon: <MapPin size={18} />, label: "CONNECTED_STATIONS" },
                { icon: <Shield size={18} />, label: "SECURITY_SETTINGS" },
                { icon: <Settings size={18} />, label: "ACCOUNT_PREFERENCES" },
                { icon: <LogOut size={18} />, label: "SYSTEM_EXIT", color: "text-red-500" },
              ].map((item, i) => (
                <button 
                  key={i}
                  className="w-full flex items-center gap-6 p-6 border border-black/5 hover:bg-slate-50 transition-all font-heading text-[10px] tracking-[0.4em] font-bold text-black hover:text-black uppercase text-left"
                >
                  <span className={item.color || "text-emerald-600"}>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading text-xl font-black text-black tracking-tighter uppercase">YOUR_GARAGE [01]</h3>
              <button className="text-emerald-600 font-heading text-[10px] tracking-widest font-black uppercase flex items-center gap-2 hover:underline">
                 ADD_NEW_VEHICLE <Zap size={12} />
              </button>
            </div>

            {user.garage.map((bike, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-black/10 shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-12 bg-slate-50 flex items-center justify-center relative">
                    <img src="/services/images/challenger Bike Red  R_1.png" className="w-full h-auto opacity-80" alt={bike.name} />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="font-heading text-[8px] tracking-[0.4em] text-emerald-600 font-black">{bike.status}</span>
                    </div>
                  </div>
                  <div className="p-12 space-y-10">
                    <div>
                      <h4 className="font-heading text-3xl font-black text-black tracking-tighter uppercase mb-2">{bike.name}</h4>
                      <div className="flex items-center gap-2 text-black">
                        <MapPin size={12} />
                        <span className="font-heading text-[9px] tracking-widest uppercase font-bold">{bike.location}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[8px] font-heading text-black tracking-widest font-bold">CHARGE</span>
                          <span className="text-[10px] font-heading font-black text-emerald-600">{bike.charge}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 relative overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${bike.charge}%` }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="absolute top-0 left-0 h-full bg-emerald-500" 
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[8px] font-heading text-black tracking-widest font-bold">EST_RANGE</span>
                          <span className="text-[10px] font-heading font-black text-black">74 KM</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100" />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 bg-black text-white py-5 font-heading text-[10px] font-black tracking-widest hover:bg-emerald-600 transition-all uppercase">
                        LOCATE_VEHICLE
                      </button>
                      <button className="w-16 h-16 border border-black/5 flex items-center justify-center hover:bg-slate-50 transition-all">
                        <Cpu size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Zap />, label: "CO2_SAVED", val: "4.2", unit: "TONS" },
                { icon: <Battery />, label: "TOTAL_KW_USED", val: "1280", unit: "KW" },
                { icon: <Activity />, label: "RIDE_HOURS", val: "412", unit: "HRS" },
              ].map((stat, i) => (
                <div key={i} className="p-8 border border-black/5 hover:border-emerald-500/20 transition-all flex flex-col justify-between aspect-square">
                  <div className="text-emerald-600 mb-6">{stat.icon}</div>
                  <div>
                    <span className="text-[8px] font-heading text-black block mb-2 tracking-widest uppercase font-bold">{stat.label}</span>
                    <span className="text-4xl font-heading font-black text-black">{stat.val}<span className="text-xs ml-2 text-emerald-600 font-normal">{stat.unit}</span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;