import Footer from "@/components/footer";
import About from "@/components/home/about";
import ContactMe from "@/components/home/contact/contact-me";
import Experiences from "@/components/home/experience/experiences";
import FAQ from "@/components/home/faq";
import Feature from "@/components/home/feature";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Resume from "@/components/home/resume/resume";
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
      <Resume />
      <FAQ />
      <ContactMe />
      <Footer />
    </div>
  );
}
