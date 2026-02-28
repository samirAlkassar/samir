import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Work from "./components/layout/Work";
import BestProject from "./components/layout/BestProject";
import Projects from "./components/layout/Projects";
import Footer from "./components/layout/Footer";
import Skills from "./components/layout/Skills";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Work />
      <BestProject />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
