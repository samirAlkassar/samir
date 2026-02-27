"use client";

import { useRef } from "react";
import { Calistoga } from "next/font/google";
import BlurText from "@/app/components/ui/BlurText";
import { motion, Variants, useScroll, useSpring, useTransform } from "framer-motion";

const calistoga = Calistoga({
    subsets: ["latin"],
    weight: "400",
});

const experiences = [
    {
        company: "Zydx",
        role: "Frontend Developer",
        period: "Aug 2025",
        description: "Building modern web applications with a focus on performance and user experience. Collaborating with cross-functional teams to deliver scalable solutions.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
        company: "Freelance",
        role: "Fullstack Developer",
        period: "2025 - 2026",
        description: "Developed various client projects ranging from e-commerce platforms to real-time dashboards. Focused on delivering high-quality, performant code.",
        tags: ["Node.js", "MongoDB", "React", "AWS"]
    }
];

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }),
};


const Work = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 50%", "end 70%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="relative">
            <div className="max-w-3xl mx-auto py-12 px-6 sm:px-4 relative z-10">
                <BlurText
                    text="Experience"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className={`text-3xl font-semibold font-calistoga ${calistoga.className}`}
                />

                <div ref={containerRef} className="relative mt-10 space-y-12">
                    {/* Continuous Vertical Timeline Line (Grows from 0) */}
                    <div className="absolute left-[7px] md:left-[7px] top-2 bottom-6 w-[2px]">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="w-full h-full bg-primary shadow-[0_0_12px_var(--primary)]"
                        />
                    </div>

                    {experiences.map((exp, index) => {
                        // Calculate a scroll threshold for each dot based on its index
                        // This makes dots "activate" as the line passes them
                        const threshold = index / (experiences.length > 1 ? experiences.length - 0.5 : 1);

                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="relative flex gap-6 md:gap-10 group"
                            >
                                {/* Dot with dynamic background fill */}
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        style={{
                                            backgroundColor: useTransform(
                                                scrollYProgress,
                                                [threshold - 0.05, threshold + 0.05],
                                                ["var(--background)", "var(--primary)"]
                                            ),
                                            scale: useTransform(
                                                scrollYProgress,
                                                [threshold - 0.1, threshold],
                                                [0.8, 1.1]
                                            )
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="relative w-4 h-4 rounded-full border-2 border-primary z-10 transition-colors duration-300"
                                    >
                                        <motion.div
                                            style={{
                                                opacity: useTransform(scrollYProgress, [threshold - 0.1, threshold], [1, 0])
                                            }}
                                            className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:hidden"
                                        />
                                    </motion.div>
                                </div>

                                {/* Experience Content */}
                                <div className="flex-1 pb-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                                        <h4 className={`text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary`}>
                                            {exp.company}
                                        </h4>
                                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-muted border border-primary/10 text-foreground/60">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-lg font-bold text-primary/90 mb-3">{exp.role}</p>
                                    <p className="text-foreground/80 leading-relaxed max-w-2xl mb-4 font-medium italic">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag, i) => (
                                            <span key={i} className="text-[0.75rem] font-bold uppercase tracking-wider text-primary/80 bg-primary/5 px-2 py-1 rounded-sm border border-primary/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work;
