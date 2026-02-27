"use client";

import { SiNodedotjs, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiMongodb, SiFigma, SiTypescript } from "react-icons/si";
import { Calistoga } from "next/font/google";
import BlurText from "@/app/components/ui/BlurText";
import { motion, Variants } from "framer-motion";
import { BorderBeam } from "../ui/BorderBeam";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "from-slate-400/20" },
  { name: "TypeScript", icon: SiTypescript, color: "from-blue-400/20" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "from-sky-400/20" },
  { name: "HTML", icon: SiHtml5, color: "from-orange-400/20" },
  { name: "CSS", icon: SiCss3, color: "from-blue-500/20" },
  { name: "Mongodb", icon: SiMongodb, color: "from-green-500/20" },
  { name: "Node.js", icon: SiNodedotjs, color: "from-emerald-500/20" },
  { name: "Figma", icon: SiFigma, color: "from-purple-500/20" },
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (i % 4) * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <BlurText
          text="Skills"
          delay={100}
          animateBy="words"
          direction="top"
          className={`text-3xl font-semibold font-calistoga ${calistoga.className}`}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="relative group flex items-center gap-4 p-4 rounded-xl border border-foreground/5 bg-foreground/2 hover:bg-foreground/4 transition-[background-color,border-color,transform] duration-500"
              >
                <BorderBeam
                  size={60}
                  duration={15}
                  delay={index * 2}
                  opacity={0.4}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className={`flex shrink-0 items-center justify-center h-10 w-10 rounded-lg bg-linear-to-br ${skill.color} to-transparent border border-foreground/5 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={20} className="text-foreground/80 group-hover:text-foreground transition-colors duration-500" />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-500">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
