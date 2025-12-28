"use client";

import { FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import samirImg from "../../../public/images/samir.png";
import { motion } from "framer-motion";
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const name = "Samir Elkasar";
  const links = [
    {icon: Linkedin, link: "https://www.linkedin.com/in/samir-elkassar-17a3a523a/"},
    {icon: Github, link: "https://github.com/samirAlkassar"},
    {icon: Mail, link: "samir.alkcar@gmail.com"}
  ]

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  return (
    <main id="home">
      <div className="max-w-3xl mx-auto flex flex-col-reverse md:flex-row items-start justify-between py-10 mt-0 sm:mt-6 gap-10 px-6 sm:px-4">
        <div className="flex-1">
          <motion.h1
            className={`text-4xl md:text-5xl font-extrabold text-foreground flex flex-wrap ${calistoga.className}`}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, index) => (
              <motion.span key={index} variants={child}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex items-center justify-start gap-2 mt-0.5 md:mt-2 opacity-90">
            <p className="text-base md:text-lg font-medium mt-1">24 years old</p>
            <span className="text-base md:text-lg font-medium mt-1 flex items-center justify-center gap-1">
              <MapPin size={18} />
              <p>Egypt</p>
            </span>
          </div>

          <h2 className="text-1xl md:text-2xl font-medium mt-4">Frontend Software Engineer</h2>

          <p className="text-base md:text-[1.1rem] max-w-md font-medium mt-1 opacity-90">
            Crafting thoughtful digital experiences with clean code and intentional design.
          </p>

          <div className="flex gap-4 mt-6 md:mt-4">
          <a
            href="./resume/Samir_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-background bg-foreground hover:bg-foreground/90 transition-colors duration-75 ease-in rounded-md px-4 py-2 flex items-center justify-center gap-2 cursor-pointer">
            <p>Resume</p>
            <FileDown size={18} />
          </a>


            <div className="flex gap-1 sm:gap-2">
              {links.map((Icon, idx) => (
                <a
                  key={idx}
                  href={Icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-primary/80 flex items-center justify-center text-white rounded-full cursor-pointer hover:bg-primary/75 transition-colors duration-150 ease-in">
                  <Icon.icon size={20}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-50 h-60 overflow-hidden rounded-xl bg-linear-to-t from-foreground via-foreground/95 to-foreground/90 mx-auto sm:mx-0">
          <Image
            src={samirImg}
            alt="Samir"
            fill
            className="object-cover scale-180 transition-transform duration-500 pr-4"/>
        </div>
      </div>
    </main>
  );
};

export default Hero;
