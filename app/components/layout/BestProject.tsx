"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Calistoga } from "next/font/google";
import BlurText from "@/app/components/ui/BlurText";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "../ui/BorderBeam";

const calistoga = Calistoga({
    subsets: ["latin"],
    weight: "400",
});

const BEST_PROJ = {
    title: "Ezz-Eldeen",
    description: "A fully responsive e-commerce web application built for a local business, featuring dynamic product listings, a clean and intuitive user interface, and smooth user interactions across all devices.",
    image: "/images/Ezz-eldeen-home.png",
    tags: ["React", "Vanilla CSS", "Local Storage", "UI/UX"],
    theme: "bg-orange-400/50",
    live: "https://ezz-eldeen.vercel.app/",
    github: "https://github.com/samirAlkassar/Ezz-Eldeen"
};

const BestProject = () => {
    return (
        <section id="best-project" className="relative py-20 overflow-x-hidden">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 z-0`} />

            <div className="max-w-3xl mx-auto px-6 sm:px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-6">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                        Featured Work
                    </span>
                    <BlurText
                        text={BEST_PROJ.title}
                        delay={100}
                        animateBy="words"
                        direction="top"
                        className={`text-2xl md:text-4xl font-extrabold mb-2 tracking-tight ${calistoga.className}`}
                    />
                    <p className="text-foreground/80 max-w-2xl text-sm md:text-lg leading-relaxed italic font-medium">
                        Selected projects that showcase my skills and experience.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row group relative rounded-xl overflow-hidden shadow-md border-foreground/10 border bg-background">

                    <BorderBeam
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-40"
                        size={150}
                        duration={20}
                        opacity={0.6}
                    />
                    <BorderBeam
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-40"
                        size={100}
                        duration={35}
                        delay={5}
                        colorFrom="#8fb683"
                        opacity={0.5}
                    />
                    <BorderBeam
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-40"
                        size={200}
                        duration={25}
                        delay={12}
                        opacity={0.55}
                    />


                    <div className="flex-1 p-6 relative z-30">
                        <p className="text-xs font-semibold tracking-wider uppercase text-primary">Featured Project</p>
                        <h2 className="text-3xl font-extrabold">{BEST_PROJ.title}</h2>
                        <p className="text-base text-gray-500 mt-2">{BEST_PROJ.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {BEST_PROJ.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-foreground/5 text-foreground px-2 py-1 rounded-md text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-10 justify-center">
                            <Link
                                href={BEST_PROJ.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-background bg-foreground hover:bg-foreground/90 transition-colors duration-75 ease-in rounded-md px-4 py-2 flex items-center justify-center gap-2 cursor-pointer">
                                <p>Live Demo</p>
                                <ExternalLink size={16} />
                            </Link>
                            <Link
                                href={BEST_PROJ.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-foreground bg-foreground/5 shadow-xs border border-foreground/10 hover:bg-foreground/10 transition-colors duration-75 ease-in rounded-md px-4 py-2 flex items-center justify-center gap-2 cursor-pointer">
                                <p>GitHub</p>
                                <Github size={16} />
                            </Link>
                        </div>
                        <Link
                            href={BEST_PROJ.live}
                            className="text-primary cursor-pointer justify-center font-medium mt-4 text-sm flex items-center gap-1">
                            <p>View Project Details</p>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="flex-1 relative hidden md:block z-30">
                        <div className="bg-primary/10 w-full h-full p-6">
                            <Image
                                src={BEST_PROJ.image}
                                alt={BEST_PROJ.title}
                                width={500}
                                height={500}
                                className="rounded-lg bg-primary/20 h-full w-full absolute object-contain mt-13" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BestProject;
