"use client";

import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    rotationFactor?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className = "",
    rotationFactor = 15
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = (mouseY / height - 0.5) * -rotationFactor;
        const rY = (mouseX / width - 0.5) * rotationFactor;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
            }}
            className={`relative transition-all duration-100 ease-out ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default TiltCard;
