"use client";

import { ArrowRight, Github, Link } from "lucide-react";
import projects from "../../constants/projects.json"
import { Calistoga } from "next/font/google";
import { useRouter } from "next/navigation";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});


const Projects = () => {
  const router = useRouter();
  return (
    <section id="projects">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <div className="flex items-center justify-between">
            <h2 className={`text-3xl font-semibold font-calistoga ${calistoga.className}`}>Projects</h2>
            <a href="/projects" className="flex gap-1 items-center justify-center cursor-pointer hover:text-primary"><p>view more</p><ArrowRight size={18}/></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="group block rounded-lg sm:rounded-xl overflow-hidden shadow-md p-2 sm:p-4 border-primary/20 border">
              <div className={`hover:[&_div]:flex cursor-pointer relative md:h-58 w-full overflow-hidden rounded-lg sm:rounded-lg p-3 ${project.theme ? project.theme : "bg-green-400"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg sm:rounded-lg"/>
                <div className="absolute hidden inset-0 items-center justify-center gap-4 bg-foreground/60">
                  <a 
                    href={project.github}
                    target="_blank"
                    className="text-muted w-14 h-14 flex items-center justify-center bg-accent rounded-full cursor-pointer">
                      <Github />
                    </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    className="text-muted w-14 h-14 flex items-center justify-center bg-accent rounded-full cursor-pointer">
                    <Link />
                  </a>
                </div>
              </div>

              <div className="py-4 px-2">
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
                <button onClick={()=>router.push(project.live)} className="bg-foreground text-sm text-white font-medium px-10 py-1.5 rounded-md flex items-center justify-center gap-1 cursor-pointer hover:bg-foreground/80 active:scale-95 transition-all duration-75 ease-in">
                  <p>Live</p>
                  <Link size={14}/>
                </button>
                <button onClick={()=>router.push(project.github)} className="bg-accent/50 text-sm rounded-lg px-2 py-1.5 font-medium flex items-center justify-center gap-1 cursor-pointer hover:bg-accent/30 active:scale-95 transition-all duration-75 ease-in">
                  <p>GitHub</p>
                  <Github size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
