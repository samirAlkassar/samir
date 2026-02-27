"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
    id: number;
    x: number;
    y: number;
}

const ClickRipple: React.FC = () => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const addRipple = useCallback((e: MouseEvent) => {
        if (e.button !== 0) return;

        const id = Date.now();
        const newRipple: Ripple = {
            id,
            x: e.clientX,
            y: e.clientY,
        };

        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 2000);
    }, []);

    useEffect(() => {
        window.addEventListener("mousedown", addRipple);
        return () => window.removeEventListener("mousedown", addRipple);
    }, [addRipple]);

    return (
        <div className="fixed inset-0 pointer-events-none z-9999 overflow-hidden select-none">
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <div
                        key={ripple.id}
                        className="absolute"
                        style={{ left: ripple.x, top: ripple.y }}>

                        <motion.div
                            initial={{ width: 0, height: 0, opacity: 0.5, scale: 0 }}
                            animate={{
                                width: 200,
                                height: 200,
                                opacity: 0,
                                scale: 1,
                                borderWidth: ["4px", "0px"]
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 shadow-[0_0_20px_var(--primary)]"/>

                        <motion.div
                            initial={{ width: 0, height: 0, opacity: 0.3, scale: 0 }}
                            animate={{
                                width: 150,
                                height: 150,
                                opacity: 0,
                                scale: 1.2
                            }}
                            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"/>

                        <motion.div
                            initial={{ scale: 0, opacity: 0.8 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px]"/>

                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                animate={{
                                    x: Math.cos(i * 60 * (Math.PI / 180)) * 40,
                                    y: Math.sin(i * 60 * (Math.PI / 180)) * 40,
                                    scale: 0,
                                    opacity: 0
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute w-1 h-1 bg-primary rounded-full"/>
                        ))}
                    </div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ClickRipple;
