"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function PlanetsBackground() {
    const { scrollY } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Parallax translating Y based on scroll
    const earthY = useTransform(scrollY, [0, 5000], [0, -1200]);
    const marsY = useTransform(scrollY, [0, 5000], [0, -1800]);
    const uranusY = useTransform(scrollY, [0, 5000], [0, -900]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
            {/* Earth Container (handles Parallax) */}
            {/* <motion.div
                className="absolute"
                style={{
                    top: "10%",
                    right: "5%",
                    y: earthY,
                }}>

                <motion.div
                    className="relative w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] rounded-full shadow-[inset_-25px_-25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(79,172,254,0.15)] opacity-30 grayscale mix-blend-screen dark:opacity-40 dark:mix-blend-normal"
                    style={{
                        background: "radial-gradient(circle at 30% 30%, #3a7bd5, #001f3f, #000B18)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}>
         
                    <div className="absolute top-[10%] left-[20%] w-[40%] h-[30%] bg-green-500/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[40%] bg-emerald-600/20 rounded-full blur-2xl"></div>
                    <div className="absolute top-[40%] left-[50%] w-[60%] h-[20%] bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute top-[70%] left-[20%] w-[40%] h-[15%] bg-blue-300/20 rounded-full blur-lg"></div>
                </motion.div>
            </motion.div> */}

            {/* Mars Container */}
            {/* <motion.div
                className="absolute"
                style={{
                    top: "30%",
                    left: "2%",
                    y: marsY,
                }}
            >
        
                <motion.div
                    className="relative w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(232,99,60,0.15)] overflow-hidden opacity-30 grayscale mix-blend-screen dark:opacity-40 dark:mix-blend-normal"
                    style={{
                        background: "radial-gradient(circle at 30% 30%, #e8633c, #8b2b10, #2A0901)",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
                >
 
                    <div className="absolute top-[20%] left-[30%] w-[25%] h-[25%] bg-black/40 rounded-full blur-sm"></div>
                    <div className="absolute bottom-[30%] right-[20%] w-[35%] h-[35%] bg-black/30 rounded-full blur-md"></div>
                    <div className="absolute top-[60%] left-[15%] w-[15%] h-[15%] bg-black/50 rounded-full blur-sm"></div>
                </motion.div>
            </motion.div> */}

            {/* Uranus Container */}
            <motion.div
                className="absolute"
                style={{
                    top: "75%",
                    right: "25%",
                    y: uranusY,
                }}
            >
                <div className="relative flex items-center justify-center opacity-10 grayscale mix-blend-screen dark:opacity-10 dark:mix-blend-normal">
                    {/* Uranus Planet */}
                    <motion.div
                        className="relative w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] rounded-full shadow-[inset_-35px_-35px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(162,214,249,0.1)] overflow-hidden z-10"
                        style={{
                            background: "radial-gradient(circle at 35% 35%, #a2d6f9, #2c7da0, #0A1C27)",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Atmospheric bands */}
                        <div className="absolute top-[20%] w-[150%] h-[10%] bg-white/5 blur-xl -left-[25%] transform -rotate-12"></div>
                        <div className="absolute top-[45%] w-[150%] h-[15%] bg-white/5 blur-2xl -left-[25%] transform -rotate-12"></div>
                        <div className="absolute bottom-[25%] w-[150%] h-[8%] bg-white/5 blur-lg -left-[25%] transform -rotate-12"></div>
                    </motion.div>

                    {/* Uranus Rings */}
                    <div className="absolute w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] rounded-full border-[18px] border-sky-300/30 dark:border-sky-300/10 z-0" style={{ transform: "rotateX(75deg) rotateY(-15deg)" }}></div>
                    <div className="absolute w-[32rem] h-[32rem] md:w-[48rem] md:h-[48rem] rounded-full border-[3px] border-sky-200/30 dark:border-sky-200/20 z-20" style={{ transform: "rotateX(75deg) rotateY(-15deg)" }}></div>
                    <div className="absolute w-[35rem] h-[35rem] md:w-[52rem] md:h-[52rem] rounded-full border-[1px] border-sky-100/30 dark:border-sky-100/20 z-20" style={{ transform: "rotateX(75deg) rotateY(-15deg)" }}></div>
                </div>
            </motion.div>
        </div>
    );
}
