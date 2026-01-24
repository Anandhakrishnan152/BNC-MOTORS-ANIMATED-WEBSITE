import { BikeModel } from './types';

export const BIKE_MODELS: BikeModel[] = [
  {
    id: 'bnc-challenger-s110',
    name: 'CHALLENGER S110',
    tagline: 'The Rugged Electric Workhorse. Engineered for India.',
    price: '₹1,18,000',
    image: '/challenger Blue S110.jpg',
    color: '#10b981',
    specs: [
      { label: 'Peak Power', value: '3000', unit: 'W', description: 'Powerful mid-drive motor for all terrains.' },
      { label: 'Certified Range', value: '93', unit: 'km', description: 'Endurance tested for daily rugged use.' },
      { label: 'Top Speed', value: '75', unit: 'km/h', description: 'Stable performance on city and rural roads.' },
      { label: 'Battery', value: 'Etrol', unit: 'Sync', description: 'Modular lithium-ion tech with safety sync.' }
    ]
  },
  {
    id: 'bnc-perfetto',
    name: 'BNC PERFETTO',
    tagline: 'The Big-Wheel Electric Scooter. Stability Meets 200km Range.',
    price: '₹1,15,000',
    image: '/bnc-perfetto.avif',
    color: '#000000',
    specs: [
      { label: 'Max Range', value: '200', unit: 'km', description: 'Dual battery setup for long-distance city commutes.' },
      { label: 'Top Speed', value: '75', unit: 'km/h', description: 'Efficient cruising for urban environments.' },
      { label: 'Wheel Size', value: '16', unit: 'inch', description: 'Large wheels for superior stability and comfort.' },
      { label: 'Charging', value: '4', unit: 'Hrs', description: 'Fast charging support for quick turnarounds.' }
    ]
  },
  {
    id: 'bnc-boss',
    name: 'BNC THE BOSS',
    tagline: 'The Performance Benchmark. Unmatched Dominance.',
    price: '₹1,55,000',
    image: '/bnc-the boss.webp',
    color: '#10b981',
    specs: [
      { label: 'Max Speed', value: '110', unit: 'km/h', description: 'Power that commands the road.' },
      { label: 'Mega Range', value: '150', unit: 'km', description: 'Long-distance touring capabilities.' },
      { label: 'Launch Torque', value: '120', unit: 'Nm', description: 'Instant throttle response.' },
      { label: 'Security', value: 'Smart', unit: 'Link', description: 'Advanced AI-driven anti-theft suite.' }
    ]
  }
];

export const PERFORMANCE_DATA = [
  { rpm: 0, torque: 120, power: 0 },
  { rpm: 1000, torque: 120, power: 20 },
  { rpm: 3000, torque: 115, power: 55 },
  { rpm: 5000, torque: 110, power: 85 },
  { rpm: 7000, torque: 95, power: 110 },
  { rpm: 9000, torque: 80, power: 125 },
  { rpm: 11000, torque: 55, power: 110 }
];