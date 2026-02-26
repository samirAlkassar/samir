"use client";

import { Calistoga } from "next/font/google";
import BlurText from "@/app/components/ui/BlurText";
import { motion, Variants } from "framer-motion";

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
    return (
        <section id="experience">
            <div className="max-w-3xl mx-auto py-12 px-6 sm:px-4">
                <BlurText
                    text="Experience"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className={`text-3xl font-semibold font-calistoga ${calistoga.className}`}
                />

                <div className="mt-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative flex gap-6 md:gap-10 group"
                        >
                            {/* Vertical Timeline Line */}
                            <div className="flex flex-col items-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                                    className="relative w-4 h-4 rounded-full border-2 border-primary bg-background z-10 group-hover:bg-primary transition-colors duration-300"
                                >
                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:hidden" />
                                </motion.div>
                                <div className="w-0.5 h-full bg-linear-to-b from-primary/50 to-transparent mt-2 overflow-hidden">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        className="w-full bg-primary"
                                    />
                                </div>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work;