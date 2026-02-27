"use client";

import { Github, Link } from "lucide-react";
import projects from "../constants/projects.json";
import { Calistoga } from "next/font/google";
import { useRouter } from "next/navigation";

import BlurText from "@/app/components/ui/BlurText";

import { motion, Variants } from "framer-motion";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: (i % 2) * 0.3, // Stagger pairs in the grid
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

const Projects = () => {
  const router = useRouter();
  return (
    <section id="projects">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <BlurText
          text="Projects"
          delay={100}
          animateBy="words"
          direction="top"
          className={`text-4xl font-[950] mb-6 ${calistoga.className}`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group block rounded-xl overflow-hidden shadow-md p-4 border-primary/20 border">
              <div className={`group/image cursor-pointer relative h-58 w-full overflow-hidden rounded-lg p-3 ${project.theme ? project.theme : "bg-green-400"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-500 group-hover/image:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-foreground/20 opacity-0 group-hover/image:opacity-100 transition-all duration-300 ease-in-out backdrop-blur-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-muted w-14 h-14 flex items-center justify-center bg-accent rounded-full cursor-pointer transform scale-75 group-hover/image:scale-100 transition-transform duration-300 delay-75 hover:bg-accent/80">
                    <Github />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-muted w-14 h-14 flex items-center justify-center bg-accent rounded-full cursor-pointer transform scale-75 group-hover/image:scale-100 transition-transform duration-300 delay-150 hover:bg-accent/80">
                    <Link />
                  </a>
                </div>
              </div>

              <div className="py-4 px-2 bg-muted/20">
                <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                <p className="text-foreground/80 mb-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-primary/20 text-foreground text-xs px-1 py-0.5 font-medium rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-2 mb-1 md:hidden">
                <button onClick={() => router.push(project.live)} className="bg-foreground text-sm text-white font-medium px-10 py-1.5 rounded-md flex items-center justify-center gap-1 cursor-pointer hover:bg-foreground/80 active:scale-95 transition-all duration-75 ease-in">
                  <p>Live</p>
                  <Link size={14} />
                </button>
                <button onClick={() => router.push(project.github)} className="bg-accent/50 text-sm rounded-lg px-2 py-1.5 font-medium flex items-center justify-center gap-1 cursor-pointer hover:bg-accent/30 active:scale-95 transition-all duration-75 ease-in">
                  <p>GitHub</p>
                  <Github size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
