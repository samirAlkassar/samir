"use client";

import { SiNodedotjs, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiMongodb, SiFigma, SiTypescript } from "react-icons/si";
import { Calistoga } from "next/font/google";
import BlurText from "@/app/components/ui/BlurText";
import { motion, Variants } from "framer-motion";
import { BorderBeam } from "../ui/BorderBeam";
import { twMerge } from "tailwind-merge";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const skills = [
  { name: "Next.js", id: "next", icon: SiNextdotjs, color: "from-slate-400/20" },
  { name: "TypeScript", id: "typescript", icon: SiTypescript, color: "from-blue-400/20" },
  { name: "TailwindCSS", id: "tailwind", icon: SiTailwindcss, color: "from-sky-400/20" },
  { name: "HTML", id: "html", icon: SiHtml5, color: "from-orange-400/20" },
  { name: "CSS", id: "css", icon: SiCss3, color: "from-blue-500/20" },
  { name: "Mongodb", id: "mongodb", icon: SiMongodb, color: "from-green-500/20" },
  { name: "Node.js", id: "node", icon: SiNodedotjs, color: "from-emerald-500/20" },
  { name: "Figma", id: "figma", icon: SiFigma, color: "from-purple-500/20" },
]

const floatingTags = [
  // NEXT
  { id: 1, skill: "next", label: "SSR", position: "-top-5 -left-20" },
  { id: 2, skill: "next", label: "SEO", position: "top-10 -left-25" },

  // CSS
  { id: 3, skill: "css", label: "Flexbox", position: "top-0 -left-26" },
  { id: 4, skill: "css", label: "Grid", position: "top-12 -left-22" },
  { id: 5, skill: "css", label: "Animations", position: "top-23 -left-6" },

  // MONGODB
  { id: 6, skill: "mongodb", label: "NoSQL", position: "top-23 left-25" },
  { id: 7, skill: "mongodb", label: "Schema", position: "top-25 left-0" },

  // NODE
  { id: 8, skill: "node", label: "API", position: "top-22 left-0" },
  { id: 9, skill: "node", label: "Async", position: "top-24 left-20" },

  // FIGMA
  { id: 10, skill: "figma", label: "UI/UX", position: "top-22 left-30" },
  { id: 11, skill: "figma", label: "Prototyping", position: "top-8 left-40" },

  // HTML
  { id: 12, skill: "html", label: "<div>", position: "top-14 left-44" },
  { id: 13, skill: "html", label: "Semantic", position: "top-2 left-45" },
  { id: 14, skill: "html", label: "DOM", position: "-top-8 left-40" },
  { id: 15, skill: "html", label: "Accessiblity", position: "-top-12 left-10" },

  // TAILWIND
  { id: 16, skill: "tailwind", label: "Utility", position: "-top-12 -left-5" },
  { id: 17, skill: "tailwind", label: "Responsive", position: "-top-15 left-20" },

  // TYPESCRIPT
  { id: 18, skill: "typescript", label: "Types", position: "-top-12 -left-5" },
  { id: 19, skill: "typescript", label: "Interfaces", position: "-top-16 left-15" },
];

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
    <section id="skills" className="relative overflow-hidden md:overflow-visible">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <BlurText
          text="Skills"
          delay={100}
          animateBy="words"
          direction="top"
          className={`text-3xl font-semibold font-calistoga relative ${calistoga.className}`}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 relative">
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
                className="cursor-default relative group flex items-center gap-3 md:gap-4 p-4 rounded-xl border border-foreground/5 bg-foreground/2 hover:bg-foreground/4 transition-[background-color,border-color,transform] duration-500">
                <BorderBeam
                  size={60}
                  duration={15}
                  delay={index * 2}
                  opacity={0.4}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-0 hidden md:block pointer-events-none">
                  {floatingTags.filter(tag => tag.skill === skill.id).map((tag, i) => (
                    <span
                      key={tag.id}
                      style={{ transitionDelay: `${i * 100}ms` }}
                      className={twMerge(
                        "bg-neutral-800/80 absolute px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm border border-white/10 shadow-lg flex items-center justify-center rounded-lg text-white/90",
                        "opacity-0 scale-50 translate-y-4 group-hover:opacity-50 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out",
                        tag.position
                      )}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className={`flex shrink-0 items-center justify-center h-10 w-10 rounded-lg bg-linear-to-br ${skill.color} to-transparent border border-foreground/5 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={20} className="text-foreground/80 group-hover:text-foreground transition-colors duration-500" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-semibold tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-500">
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
