import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Find active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div
        className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-bg-dark/80 backdrop-blur-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="mr-4 pl-3 text-xl font-display font-extrabold tracking-tight flex items-center gap-1"
        >
          Anuj
          <motion.span
            className="text-accent-primary"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >.</motion.span>
        </motion.a>

        {/* Nav Links */}
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-accent-primary/20 border border-accent-primary/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.a>
          );
        })}

        {/* CTA */}
        <motion.a
          href="mailto:hiwarkaranuj@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-3 mr-1 px-5 py-2 rounded-full bg-accent-primary text-white text-sm font-semibold glow-violet hover:brightness-110 transition-all"
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  );
}
