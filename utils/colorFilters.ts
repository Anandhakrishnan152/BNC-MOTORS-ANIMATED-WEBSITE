import { ColorVariant } from '../types';

// Function to calculate CSS filter to transform image to target color
export const getColorFilter = (targetColor: string): string => {
    // Map color names to filter combinations with STRONG visible effects
    // Using sepia trick: sepia(1) makes everything brown, then hue-rotate shifts to target color
    const colorFilters: Record<string, string> = {
        // Blue variants - Strong blue tint
        'Electric Blue': 'sepia(1) saturate(10) hue-rotate(180deg) brightness(1.1)',
        'Ocean Blue': 'sepia(1) saturate(8) hue-rotate(190deg) brightness(1)',

        // Red variants - Strong red tint
        'Crimson Red': 'sepia(1) saturate(10) hue-rotate(320deg) brightness(1.2)',
        'Racing Red': 'sepia(1) saturate(10) hue-rotate(330deg) brightness(1.3)',

        // Black variants - Very dark
        'Midnight Black': 'grayscale(1) brightness(0.3) contrast(1.5)',
        'Stealth Black': 'grayscale(1) brightness(0.2) contrast(1.8)',

        // White/Light variants - Very bright
        'Pearl White': 'grayscale(0.5) brightness(2.2) contrast(0.8)',
        'Arctic White': 'grayscale(0.4) brightness(2.5) contrast(0.7)',

        // Grey variants
        'Silver Metallic': 'grayscale(1) brightness(1.6) contrast(1.2)',
        'Titanium Grey': 'grayscale(1) brightness(1.3) contrast(1.3)',

        // Green variants - Strong green tint
        'Emerald Green': 'sepia(1) saturate(10) hue-rotate(60deg) brightness(1.2)',
    };

    return colorFilters[targetColor] || 'none';
};
