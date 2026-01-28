import { BikeModel } from './types';

// TEMPLATE: Update image paths once you have colored images
export const BIKE_MODELS: BikeModel[] = [
    {
        id: 'bnc-challenger-s110',
        name: 'CHALLENGER S110',
        tagline: 'The Rugged Electric Workhorse. Engineered for India.',
        price: '₹1,18,000',
        colorVariants: [
            {
                name: 'Electric Blue',
                hex: '#3B82F6',
                image: '/challenger-blue.jpg'  // TODO: Replace with actual blue chassis image
            },
            {
                name: 'Crimson Red',
                hex: '#EF4444',
                image: '/challenger-red.jpg'  // TODO: Replace with actual red chassis image
            },
            {
                name: 'Midnight Black',
                hex: '#1F2937',
                image: '/challenger-black.jpg'  // TODO: Replace with actual black chassis image
            },
            {
                name: 'Pearl White',
                hex: '#F9FAFB',
                image: '/challenger-white.jpg'  // TODO: Replace with actual white chassis image
            }
        ],
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
        colorVariants: [
            {
                name: 'Midnight Black',
                hex: '#1F2937',
                image: '/perfetto-black.jpg'  // TODO: Replace with actual black chassis image
            },
            {
                name: 'Racing Red',
                hex: '#DC2626',
                image: '/perfetto-red.jpg'  // TODO: Replace with actual red chassis image
            },
            {
                name: 'Ocean Blue',
                hex: '#2563EB',
                image: '/perfetto-blue.jpg'  // TODO: Replace with actual blue chassis image
            },
            {
                name: 'Silver Metallic',
                hex: '#9CA3AF',
                image: '/perfetto-silver.jpg'  // TODO: Replace with actual silver chassis image
            }
        ],
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
        colorVariants: [
            {
                name: 'Emerald Green',
                hex: '#10B981',
                image: '/boss-green.jpg'  // TODO: Replace with actual green chassis image
            },
            {
                name: 'Stealth Black',
                hex: '#111827',
                image: '/boss-black.jpg'  // TODO: Replace with actual black chassis image
            },
            {
                name: 'Titanium Grey',
                hex: '#6B7280',
                image: '/boss-grey.jpg'  // TODO: Replace with actual grey chassis image
            },
            {
                name: 'Arctic White',
                hex: '#F3F4F6',
                image: '/boss-white.jpg'  // TODO: Replace with actual white chassis image
            }
        ],
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
