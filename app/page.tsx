import Footer from "@/components/footer";
import About from "@/components/home/About";
import ContactMe from "@/components/home/ContactMe";
import Experiences from "@/components/home/Experiences";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Feature />
      <Projects />
      <Skills />
      <Experiences />
      <FAQ />
      <ContactMe />
      <Footer />
    </div>
  );
}
