"use client";

import { FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import samirImg from "../../../public/images/samir.png";
import { motion } from "framer-motion";
import { Calistoga } from "next/font/google";
import BlurText from "@/app/components/ui/BlurText";
import LightRays from "../LightRays";
import Magnetic from "@/app/components/ui/Magnetic";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const name = "Samir Elkasar";
  const links = [
    { icon: Linkedin, link: "https://www.linkedin.com/in/samir-elkassar-17a3a523a/" },
    { icon: Github, link: "https://github.com/samirAlkassar" },
    { icon: Mail, link: "mailto:samir.alkcar@gmail.com" }
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
    <main id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={1.2}
          rayLength={1.5}
          pulsating={true}
          followMouse={true}
        />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col-reverse md:flex-row items-start justify-between py-10 mt-0 sm:mt-6 gap-10 px-6 sm:px-4 relative z-10">
        <div className="flex-1">
          <BlurText
            text="Samir Elkasar"
            delay={100}
            animateBy="letters"
            direction="top"
            className={`text-3xl md:text-5xl font-extrabold text-foreground flex flex-wrap ${calistoga.className}`}
          />

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
            <Magnetic>
              <a
                href="./resume/Samir_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-background bg-foreground hover:bg-foreground/90 transition-colors duration-75 ease-in rounded-md px-4 py-2 flex items-center justify-center gap-2 cursor-pointer">
                <p>Resume</p>
                <FileDown size={18} />
              </a>
            </Magnetic>


            <div className="flex gap-1 sm:gap-2">
              {links.map((Icon, idx) => (
                <Magnetic key={idx}>
                  <a
                    href={Icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-primary/80 flex items-center justify-center text-white rounded-full cursor-pointer hover:bg-primary/75 transition-colors duration-150 ease-in">
                    <Icon.icon size={20} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group mx-auto sm:mx-0 shrink-0">
          <div className="absolute inset-0 border-10 border-primary/80 rounded-2xl transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />

          <div className="relative w-50 h-60 overflow-hidden rounded-2xl border-2 border-primary/10 bg-linear-to-t from-foreground via-foreground/95 to-foreground/90 z-10">
            <Image
              src={samirImg}
              alt="Samir"
              fill
              priority
              className="object-cover scale-180 pr-4"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
