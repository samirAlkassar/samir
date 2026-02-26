"use client";

import { SiNodedotjs, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiMongodb, SiFigma, SiTypescript } from "react-icons/si";
import { Calistoga } from "next/font/google";
import BlurText from "@/app/components/ui/BlurText";
import { motion, Variants } from "framer-motion";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-600" },
  { name: "Mongodb", icon: SiMongodb, color: "text-green-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: (i % 4) * 0.1,
      duration: 0.8, // Slightly longer for more elegance
      ease: [0.16, 1, 0.3, 1] // Very smooth quint-out curve
    }
  }),
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <BlurText
          text="Skills"
          delay={100}
          animateBy="words"
          direction="top"
          className={`text-3xl font-semibold font-calistoga ${calistoga.className}`}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6">
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group p-6 bg-muted/40 rounded-2xl border border-primary/5 hover:border-primary/20 backdrop-blur-sm shadow-sm overflow-hidden"
              >
                {/* Background glow effect */}
                <div className={`absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 bg-linear-to-br ${skill.color === 'text-foreground' ? 'from-foreground' : 'from-primary'} to-transparent`} />

                <div className="flex flex-col items-center justify-center relative z-10">
                  <div className={`${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={46} />
                  </div>
                  <p className="text-foreground/70 text-sm font-medium group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </p>
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
