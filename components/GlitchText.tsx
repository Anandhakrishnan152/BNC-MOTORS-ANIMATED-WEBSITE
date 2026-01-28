import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string; // For text styling (font size, weight, color)
    glitchColor1?: string; // Default: 'rgba(255,0,0,0.5)' (Red)
    glitchColor2?: string; // Default: 'rgba(0,255,255,0.5)' (Cyan/Blue)
}

const GlitchText: React.FC<GlitchTextProps> = ({
    text,
    className = "",
    glitchColor1 = "#ef4444", // red-500
    glitchColor2 = "#10b981"  // emerald-500
}) => {
    return (
        <div className={`relative inline-block ${className} group`}>
            {/* Main Text */}
            <span className="relative z-10">{text}</span>

            {/* Glitch Layer 1 (Red/Offset) */}
            <motion.span
                className="absolute top-0 left-0 w-full h-full opacity-50 z-0 select-none pointer-events-none"
                style={{ color: glitchColor1 }}
                animate={{
                    x: [0, -2, 2, -1, 0, 1, 0],
                    y: [0, 1, -1, 0],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.9, 1] // Glitch occasionally, not constantly
                }}
            >
                {text}
            </motion.span>

            {/* Glitch Layer 2 (Green/Blue/Offset) */}
            <motion.span
                className="absolute top-0 left-0 w-full h-full opacity-50 z-0 select-none pointer-events-none"
                style={{ color: glitchColor2 }}
                animate={{
                    x: [0, 2, -2, 1, 0, -1, 0],
                    y: [0, -1, 1, 0],
                    opacity: [0, 0, 0.8, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    times: [0, 0.5, 0.55, 0.6, 1] // Offset timing from layer 1
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
