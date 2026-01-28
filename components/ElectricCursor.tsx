import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';

const ElectricCursor: React.FC = () => {
    // Use MotionValues instead of State to prevent re-renders
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const isHovered = useMotionValue(0); // 0 = no, 1 = yes

    // Derived animations based on MotionValues (Zero React Render Cycle)
    const scale = useTransform(isHovered, [0, 1], [1, 1.5]);
    const rotate = useTransform(isHovered, [0, 1], [0, 15]);
    const filter = useTransform(isHovered, [0, 1], ['drop-shadow(0 0 5px rgba(59,130,246,0.8))', 'drop-shadow(0 0 15px rgba(59,130,246,1))']);

    // Spring for the TRAIL only (Ghost), not the main cursor
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Update MotionValues directly - highly performant
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            isHovered.set(isClickable ? 1 : 0);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <style>{`
                body, a, button, input, textarea, select {
                    cursor: none !important;
                }
            `}</style>

            {/* Ghost Bolt (Glitch Trail) - Laggy/Springy */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] text-cyan-400 mix-blend-screen opacity-50"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: scale
                }}
            >
                <Zap size={24} fill="currentColor" className="blur-[1px]" />
            </motion.div>

            {/* Main Core - INSTANT FOLLOW (No Spring) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] text-blue-500"
                style={{
                    x: cursorX, // Direct binding to mouse position
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: scale,
                    rotate: rotate,
                    filter: filter
                }}
            >
                <Zap size={20} fill="currentColor" strokeWidth={0} />
            </motion.div>
        </>
    );
};

export default ElectricCursor;
