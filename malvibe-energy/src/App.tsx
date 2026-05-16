import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import CursorTrail from "./components/CursorTrail";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
