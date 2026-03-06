import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto space-y-32 py-32">
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
