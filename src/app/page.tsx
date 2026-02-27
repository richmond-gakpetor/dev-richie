import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import MeetMeModal from "@/components/MeetMeModal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Stack />
      <Contact />
      <MeetMeModal />
    </main>
  );
}
