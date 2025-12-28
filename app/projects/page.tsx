import { Github, Link } from "lucide-react";
import projects from "../constants/projects.json";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {
  return (
    <section id="projects">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <h2 className={`text-4xl font-[950] mb-6 ${calistoga.className}`}>Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group block rounded-xl overflow-hidden shadow-md p-4 border-primary/20 border">
              <div className={`hover:[&_div]:flex cursor-pointer relative h-58 w-full overflow-hidden rounded-lg p-3 ${
                              project.title === "Ezz-Eldeen" ? "bg-orange-300" :
                              project.title === "HDTC" ? "bg-blue-300" :
                              project.title === "Mawja" ? "bg-slate-600" :
                              project.title === "Zink" && "bg-gray-400"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg"/>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
