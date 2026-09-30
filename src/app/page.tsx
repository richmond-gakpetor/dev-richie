import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-8">
      <Header />
      <main>
        <Intro />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
