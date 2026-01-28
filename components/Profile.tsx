import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, MapPin, Activity, Settings, LogOut, Cpu, Battery, Zap, History, UserPlus } from 'lucide-react';
import { View } from '../App';

interface ProfileProps {
  onNavigate: (view: View) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const user = {
    name: "ANANDHAKRISHNAN",
    id: "BNC_UID_0912",
    since: "MAR 2023",
    garage: [
      {
        name: "CHALLENGER S110",
        status: "ONLINE",
        charge: 84,
        location: "SALEM, TN",
        image: "/services/images/challenger_black.png",
        range: 74,
        lastRide: "2 HOURS AGO"
      },
      {
        name: "PERFETTO EV",
        status: "CHARGING",
        charge: 45,
        location: "CHENNAI, TN",
        image: "/services/images/perfetto_blue.png",
        range: 52,
        lastRide: "1 DAY AGO"
      },
      {
        name: "THE BOSS S150",
        status: "OFFLINE",
        charge: 92,
        location: "COIMBATORE, TN",
        image: "/services/images/boss_red.png",
        range: 128,
        lastRide: "3 DAYS AGO"
      },
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

          <div className="lg:col-span-3 z-30" style={{ height: '100%' }}>
            <div className="bg-white border border-black/10 shadow-2xl overflow-hidden rounded-sm mb-6">
              {/* Profile Header */}
              <div className="bg-black text-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <User size={120} />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mb-6 flex items-center justify-center ring-4 ring-white/20 shadow-xl">
                    <User size={40} className="text-black" />
                  </div>
                  <h2 className="font-heading text-xl font-black tracking-tighter mb-2 break-words leading-tight px-4">{user.name}</h2>
                  <p className="text-emerald-500 font-heading text-[10px] tracking-[0.2em] uppercase font-black mb-6">VERIFIED // {user.id}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-white/50 text-[9px] font-heading tracking-widest uppercase mb-1">MEMBER_SINCE</p>
                    <p className="font-heading text-xs font-bold">{user.since}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/50 text-[9px] font-heading tracking-widest uppercase mb-1">TIER_STATUS</p>
                    <p className="text-emerald-500 font-heading text-xs font-bold">PLATINUM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32 bg-white border border-black/10 shadow-2xl overflow-hidden rounded-sm">
              {/* Navigation Menu */}
              <div className="p-4 bg-white">
                <button
                  onClick={() => onNavigate('register')}
                  className="w-full mb-4 flex items-center justify-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 font-heading text-xs tracking-widest font-black uppercase hover:bg-emerald-100 transition-colors transform hover:scale-[1.02] active:scale-95"
                >
                  <UserPlus size={16} />
                  <span>NEW_IDENTITY</span>
                </button>

                <div className="space-y-1">
                  {[
                    { icon: <Activity size={16} />, label: "ANALYTICS", id: "driving-analytics" },
                    { icon: <History size={16} />, label: "HISTORY", id: "service-history" },
                    { icon: <MapPin size={16} />, label: "STATIONS", id: "connected-stations" },
                    { icon: <Shield size={16} />, label: "SECURITY", id: "security-settings" },
                    { icon: <Settings size={16} />, label: "PREFERENCES", id: "account-preferences" },
                    { icon: <LogOut size={16} />, label: "LOGOUT", color: "text-red-500", action: () => onNavigate('home') },
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => item.action ? item.action() : item.id && scrollToSection(item.id)}
                      className="w-full flex items-center justify-between p-4 group hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`p-2 rounded-full bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all ${item.color || "text-emerald-600"}`}>
                          {item.icon}
                        </span>
                        <span className="font-heading text-xs tracking-widest font-bold text-gray-600 group-hover:text-black uppercase">{item.label}</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-heading text-3xl font-black text-black tracking-tighter uppercase">YOUR_GARAGE [{user.garage.length.toString().padStart(2, '0')}]</h3>
              <button className="text-emerald-600 font-heading text-xs tracking-widest font-black uppercase flex items-center gap-2 hover:underline">
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
                    <img src={bike.image} className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300" alt={bike.name} />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${bike.status === 'ONLINE' ? 'bg-emerald-500 animate-pulse' : bike.status === 'CHARGING' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'}`} />
                      <span className={`font-heading text-[10px] tracking-[0.4em] font-black ${bike.status === 'ONLINE' ? 'text-emerald-600' : bike.status === 'CHARGING' ? 'text-yellow-600' : 'text-gray-500'}`}>{bike.status}</span>
                    </div>
                  </div>
                  <div className="p-12 space-y-10">
                    <div>
                      <h4 className="font-heading text-5xl font-black text-black tracking-tighter uppercase mb-2">{bike.name}</h4>
                      <div className="flex items-center gap-2 text-black">
                        <MapPin size={12} />
                        <span className="font-heading text-xs tracking-widest uppercase font-bold">{bike.location}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-heading text-black tracking-widest font-bold">CHARGE</span>
                          <span className="text-xs font-heading font-black text-emerald-600">{bike.charge}%</span>
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
                          <span className="text-[10px] font-heading text-black tracking-widest font-bold">EST_RANGE</span>
                          <span className="text-xs font-heading font-black text-black">{bike.range} KM</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100" />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-black/5">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-heading text-gray-400 tracking-widest font-bold">LAST_RIDE</span>
                        <span className="text-xs font-heading font-black text-black">{bike.lastRide}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 bg-black text-white py-5 font-heading text-xs font-black tracking-widest hover:bg-emerald-600 transition-all uppercase">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Zap />, label: "CO2_SAVED", val: "4.2", unit: "TONS" },
                { icon: <Battery />, label: "TOTAL_KW_USED", val: "1280", unit: "KW" },
                { icon: <Activity />, label: "RIDE_HOURS", val: "412", unit: "HRS" },
                { icon: <MapPin />, label: "TOTAL_DISTANCE", val: "8,450", unit: "KM" },
              ].map((stat, i) => (
                <div key={i} className="p-8 border border-black/5 hover:border-emerald-500/20 transition-all flex flex-col justify-between aspect-square">
                  <div className="text-emerald-600 mb-6">{stat.icon}</div>
                  <div>
                    <span className="text-xs font-heading text-black block mb-2 tracking-widest uppercase font-bold">{stat.label}</span>
                    <span className="text-5xl font-heading font-black text-black">{stat.val}<span className="text-sm ml-2 text-emerald-600 font-black">{stat.unit}</span></span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-8 border border-black/5 bg-emerald-50/30">
                <div className="flex items-center gap-4 mb-6">
                  <Cpu className="text-emerald-600" size={24} />
                  <h4 className="font-heading text-sm font-black text-black tracking-tighter uppercase">CHARGING_SESSIONS</h4>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-heading font-black text-black">156</span>
                  <span className="text-xs font-heading font-black text-emerald-600">TOTAL</span>
                </div>
                <p className="text-xs font-heading text-gray-500 tracking-widest uppercase mt-4">AVG 2.3 SESSIONS/WEEK</p>
              </div>

              <div className="p-8 border border-black/5 bg-slate-50">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="text-emerald-600" size={24} />
                  <h4 className="font-heading text-sm font-black text-black tracking-tighter uppercase">ECO_SCORE</h4>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-heading font-black text-emerald-600">A+</span>
                </div>
                <p className="text-xs font-heading text-gray-500 tracking-widest uppercase mt-4">TOP 5% OF ALL RIDERS</p>
              </div>
            </div>


            {/* DRIVING ANALYTICS SECTION */}
            <div id="driving-analytics" className="mt-16 pt-16 border-t border-black/5">
              <div className="flex items-center gap-4 mb-8">
                <Activity className="text-emerald-600" size={32} />
                <h3 className="font-heading text-4xl font-black text-black tracking-tighter uppercase">DRIVING_ANALYTICS</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-black/5 p-8">
                  <p className="text-[10px] font-heading text-gray-400 tracking-widest uppercase mb-4">AVG_SPEED</p>
                  <p className="text-4xl font-heading font-black text-black">42 <span className="text-sm text-emerald-600">KM/H</span></p>
                  <div className="mt-4 h-1 bg-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-emerald-500 w-[60%]"></div>
                  </div>
                </div>

                <div className="bg-white border border-black/5 p-8">
                  <p className="text-[10px] font-heading text-gray-400 tracking-widest uppercase mb-4">ECO_DRIVING_SCORE</p>
                  <p className="text-4xl font-heading font-black text-emerald-600">94 <span className="text-sm text-black">/100</span></p>
                  <p className="text-[9px] font-heading text-gray-500 tracking-widest uppercase mt-4">EXCELLENT EFFICIENCY</p>
                </div>

                <div className="bg-white border border-black/5 p-8">
                  <p className="text-[10px] font-heading text-gray-400 tracking-widest uppercase mb-4">TOTAL_TRIPS</p>
                  <p className="text-4xl font-heading font-black text-black">1,247</p>
                  <p className="text-[9px] font-heading text-emerald-600 tracking-widest uppercase mt-4">+12 THIS WEEK</p>
                </div>
              </div>

              <div className="mt-6 bg-slate-50 p-8 border border-black/5">
                <h4 className="font-heading text-sm font-black text-black tracking-tighter uppercase mb-6">RECENT_TRIPS</h4>
                <div className="space-y-4">
                  {[
                    { from: "SALEM", to: "CHENNAI", distance: "342 KM", date: "TODAY", efficiency: "95%" },
                    { from: "CHENNAI", to: "COIMBATORE", distance: "502 KM", date: "YESTERDAY", efficiency: "92%" },
                    { from: "COIMBATORE", to: "SALEM", distance: "165 KM", date: "2 DAYS AGO", efficiency: "97%" }
                  ].map((trip, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white border border-black/5">
                      <div>
                        <p className="font-heading text-xs font-black text-black uppercase">{trip.from} → {trip.to}</p>
                        <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mt-1">{trip.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-heading text-xs font-black text-black">{trip.distance}</p>
                        <p className="font-heading text-[10px] text-emerald-600 tracking-widest uppercase">{trip.efficiency} EFF</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SERVICE HISTORY SECTION */}
            <div id="service-history" className="mt-16 pt-16 border-t border-black/5">
              <div className="flex items-center gap-4 mb-8">
                <History className="text-emerald-600" size={32} />
                <h3 className="font-heading text-4xl font-black text-black tracking-tighter uppercase">SERVICE_HISTORY</h3>
              </div>

              <div className="space-y-4">
                {[
                  { service: "BATTERY_HEALTH_CHECK", date: "15 JAN 2026", status: "COMPLETED", cost: "₹0" },
                  { service: "BRAKE_SYSTEM_UPGRADE", date: "28 DEC 2025", status: "COMPLETED", cost: "₹2,450" },
                  { service: "TIRE_ROTATION", date: "10 DEC 2025", status: "COMPLETED", cost: "₹800" },
                  { service: "SOFTWARE_UPDATE_v4.2", date: "05 DEC 2025", status: "COMPLETED", cost: "₹0" },
                  { service: "ANNUAL_INSPECTION", date: "20 NOV 2025", status: "COMPLETED", cost: "₹1,200" }
                ].map((service, i) => (
                  <div key={i} className="bg-white border border-black/5 p-6 flex justify-between items-center hover:border-emerald-500/20 transition-all">
                    <div>
                      <p className="font-heading text-sm font-black text-black uppercase">{service.service}</p>
                      <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mt-2">{service.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-xs font-black text-emerald-600">{service.status}</p>
                      <p className="font-heading text-sm font-black text-black mt-2">{service.cost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONNECTED STATIONS SECTION */}
            <div id="connected-stations" className="mt-16 pt-16 border-t border-black/5">
              <div className="flex items-center gap-4 mb-8">
                <MapPin className="text-emerald-600" size={32} />
                <h3 className="font-heading text-4xl font-black text-black tracking-tighter uppercase">CONNECTED_STATIONS</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "BNC_HUB_SALEM_CENTRAL", address: "Anna Nagar, Salem", distance: "2.3 KM", slots: "4/8 AVAILABLE" },
                  { name: "BNC_HUB_CHENNAI_NORTH", address: "T Nagar, Chennai", distance: "342 KM", slots: "6/12 AVAILABLE" },
                  { name: "BNC_HUB_COIMBATORE_EAST", address: "RS Puram, Coimbatore", distance: "165 KM", slots: "2/8 AVAILABLE" },
                  { name: "BNC_HUB_MADURAI_WEST", address: "Bypass Road, Madurai", distance: "198 KM", slots: "8/10 AVAILABLE" }
                ].map((station, i) => (
                  <div key={i} className="bg-white border border-black/5 p-6 hover:border-emerald-500/20 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-heading text-sm font-black text-black uppercase">{station.name}</p>
                        <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mt-2">{station.address}</p>
                      </div>
                      <Zap className="text-emerald-600" size={20} />
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-black/5">
                      <p className="font-heading text-[10px] text-black tracking-widest uppercase font-bold">{station.distance} AWAY</p>
                      <p className="font-heading text-[10px] text-emerald-600 tracking-widest uppercase font-bold">{station.slots}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECURITY SETTINGS SECTION */}
            <div id="security-settings" className="mt-16 pt-16 border-t border-black/5">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="text-emerald-600" size={32} />
                <h3 className="font-heading text-4xl font-black text-black tracking-tighter uppercase">SECURITY_SETTINGS</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-black/5 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-heading text-sm font-black text-black uppercase">TWO_FACTOR_AUTHENTICATION</p>
                      <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mt-2">EXTRA LAYER OF SECURITY</p>
                    </div>
                    <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-black/5 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-heading text-sm font-black text-black uppercase">BIOMETRIC_LOGIN</p>
                      <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mt-2">FINGERPRINT & FACE ID</p>
                    </div>
                    <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-black/5 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-heading text-sm font-black text-black uppercase">VEHICLE_IMMOBILIZER</p>
                      <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mt-2">REMOTE LOCK SYSTEM</p>
                    </div>
                    <div className="w-12 h-6 bg-slate-200 rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-500/20 p-6">
                  <p className="font-heading text-xs font-black text-black uppercase mb-4">LAST_PASSWORD_CHANGE</p>
                  <p className="font-heading text-sm font-black text-emerald-600">45 DAYS AGO</p>
                  <button className="mt-4 bg-black text-white px-6 py-3 font-heading text-[10px] font-black tracking-widest hover:bg-emerald-600 transition-all uppercase">
                    CHANGE_PASSWORD
                  </button>
                </div>
              </div>
            </div>

            {/* ACCOUNT PREFERENCES SECTION */}
            <div id="account-preferences" className="mt-16 pt-16 border-t border-black/5">
              <div className="flex items-center gap-4 mb-8">
                <Settings className="text-emerald-600" size={32} />
                <h3 className="font-heading text-4xl font-black text-black tracking-tighter uppercase">ACCOUNT_PREFERENCES</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-black/5 p-6">
                  <p className="font-heading text-sm font-black text-black uppercase mb-4">NOTIFICATION_SETTINGS</p>
                  <div className="space-y-3">
                    {[
                      { label: "CHARGING_ALERTS", enabled: true },
                      { label: "SERVICE_REMINDERS", enabled: true },
                      { label: "TRIP_SUMMARIES", enabled: false },
                      { label: "PROMOTIONAL_OFFERS", enabled: true }
                    ].map((pref, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <p className="font-heading text-[10px] text-black tracking-widest uppercase font-bold">{pref.label}</p>
                        <div className={`w-10 h-5 ${pref.enabled ? 'bg-emerald-500' : 'bg-slate-200'} rounded-full relative`}>
                          <div className={`absolute ${pref.enabled ? 'right-1' : 'left-1'} top-0.5 w-4 h-4 bg-white rounded-full`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-black/5 p-6">
                  <p className="font-heading text-sm font-black text-black uppercase mb-4">DISPLAY_PREFERENCES</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mb-2">THEME</p>
                      <select className="w-full bg-slate-50 border border-black/5 px-4 py-3 font-heading text-xs uppercase tracking-widest font-bold">
                        <option>LIGHT_MODE</option>
                        <option>DARK_MODE</option>
                        <option>AUTO</option>
                      </select>
                    </div>
                    <div>
                      <p className="font-heading text-[10px] text-gray-400 tracking-widest uppercase mb-2">LANGUAGE</p>
                      <select className="w-full bg-slate-50 border border-black/5 px-4 py-3 font-heading text-xs uppercase tracking-widest font-bold">
                        <option>ENGLISH</option>
                        <option>தமிழ் (TAMIL)</option>
                        <option>हिंदी (HINDI)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-black/5 p-6">
                  <p className="font-heading text-sm font-black text-black uppercase mb-4">PRIVACY_CONTROLS</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="font-heading text-[10px] text-black tracking-widest uppercase font-bold">LOCATION_SHARING</p>
                      <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
                        <div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-heading text-[10px] text-black tracking-widest uppercase font-bold">ANALYTICS_TRACKING</p>
                      <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
                        <div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-black/5 p-6">
                  <p className="font-heading text-sm font-black text-black uppercase mb-4">DATA_MANAGEMENT</p>
                  <button className="w-full bg-slate-50 border border-black/5 px-4 py-3 font-heading text-[10px] font-black tracking-widest hover:bg-slate-100 transition-all uppercase mb-3">
                    DOWNLOAD_MY_DATA
                  </button>
                  <button className="w-full bg-red-50 border border-red-500/20 text-red-600 px-4 py-3 font-heading text-[10px] font-black tracking-widest hover:bg-red-100 transition-all uppercase">
                    DELETE_ACCOUNT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div >
  );
};

export default Profile;