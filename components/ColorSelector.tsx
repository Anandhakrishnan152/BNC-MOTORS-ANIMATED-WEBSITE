import React from 'react';
import { motion } from 'framer-motion';
import { ColorVariant } from '../types';

interface ColorSelectorProps {
    colorVariants: ColorVariant[];
    selectedColor: ColorVariant;
    onColorChange: (color: ColorVariant) => void;
    size?: 'small' | 'medium' | 'large';
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
    colorVariants,
    selectedColor,
    onColorChange,
    size = 'medium'
}) => {
    const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-8 h-8',
        large: 'w-10 h-10'
    };

    const containerClasses = {
        small: 'gap-2',
        medium: 'gap-3',
        large: 'gap-4'
    };

    return (
        <div className={`flex items-center ${containerClasses[size]}`}>
            {colorVariants.map((color) => {
                const isSelected = selectedColor.name === color.name;

                return (
                    <motion.button
                        key={color.name}
                        onClick={() => onColorChange(color)}
                        className={`${sizeClasses[size]} rounded-full border-2 transition-all relative group`}
                        style={{
                            backgroundColor: color.hex,
                            borderColor: isSelected ? '#10B981' : color.hex === '#F9FAFB' || color.hex === '#F3F4F6' ? '#E5E7EB' : color.hex
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={color.name}
                    >
                        {isSelected && (
                            <motion.div
                                layoutId="colorSelector"
                                className="absolute inset-0 rounded-full border-2 border-emerald-500"
                                style={{ margin: '-4px' }}
                                initial={false}
                                transition={{ type: 'spring', stiffness: 800, damping: 25 }}
                            />
                        )}

                        {/* Tooltip */}
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-[8px] font-heading tracking-wider uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {color.name}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
};

export default ColorSelector;
