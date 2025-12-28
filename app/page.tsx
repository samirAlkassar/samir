import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Work from "./components/layout/Work";
import Projects from "./components/layout/Projects";
import Footer from "./components/layout/Footer";
import Skills from "./components/layout/Skills";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Work />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
