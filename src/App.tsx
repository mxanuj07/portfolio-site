import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={`relative selection:bg-accent-primary selection:text-white ${loading ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ scaleX, background: "linear-gradient(90deg, #6C63FF, #00F5D4)" }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
