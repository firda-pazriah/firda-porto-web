import Footer from "@/components/footer";
import About from "@/components/home/about";
import ContactMe from "@/components/home/contact/contact-me";
import Experiences from "@/components/home/experience/experiences";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/project/projects";
import Resume from "@/components/home/resume/resume";
import Skills from "@/components/home/skills";
import Sellmate from "@/components/home/sellmate";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Sellmate />
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
