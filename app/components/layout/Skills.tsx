import { SiNodedotjs, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiMongodb, SiFigma, SiTypescript } from "react-icons/si";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },

    { name: "Mongodb", icon: SiMongodb },
    { name: "Note.js", icon: SiNodedotjs },


    { name: "Figma", icon: SiFigma },
]


const Skills = () => {
  return (
    <section id="skills">
      <div className="max-w-3xl mx-auto py-10 px-6 sm:px-4">
        <h2 className={`text-3xl font-semibold font-calistoga ${calistoga.className}`}>Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center p-4 bg-muted rounded-xl shadow-sm border border-primary/10 transition-shadow duration-100 group cursor-pointer">
                <div className="text-primary mb-2">
                  <Icon size={40} />
                </div>
                <p className="text-foreground/80 text-sm font-medium group-hover:text-primary transition-colors duration-100">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
