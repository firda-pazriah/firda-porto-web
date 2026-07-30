import Footer from "@/components/footer";
import About from "@/components/home/about";
import ContactMe from "@/components/home/contact-me";
import Experiences from "@/components/home/experiences";
import FAQ from "@/components/home/faq";
import Feature from "@/components/home/feature";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";

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
