import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Projects from "@/components/project/Projects";
import Skills from "@/components/skills/Skills";
import Container from "@/components/ui/Container";
import ContactLinks from "./ContactLinks";
import Books from "./Books";

const Content = () => {
  return (
    <Container>
      <div className="lg:hidden">
        <Navbar />
      </div>
      <ContactLinks className="xl:fixed absolute right-16 top-8" />

      <Overview />
      <About />
      <Skills />
      <Projects />
      <Books />
      <Contact />
    </Container>
  );
};

export default Content;
