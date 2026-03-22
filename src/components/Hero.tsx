import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram } from "lucide-react";
import NeonTrails from "./NeonTrails";
import { useState, useEffect } from "react";

const roles = ["Software Developer", "Full-Stack Builder", "Problem Solver", "Code Artisan"];

function TypewriterRoles() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <span className="text-gradient font-mono">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.85, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] ml-0.5 bg-accent-secondary align-middle"
      />
    </span>
  );
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/anuj-hiwarkar-4a0b45352/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Mail, href: "mailto:hiwarkaranuj@gmail.com", label: "Email" },
  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
];



export default function Hero() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden noise-overlay">
      <NeonTrails />

      {/* Drifting background orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[140px] animate-orb-drift pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent-secondary/8 rounded-full blur-[160px] animate-orb-drift pointer-events-none" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* Left: Text Content */}
        <motion.div style={{ opacity: heroOpacity, y: heroY }}>


          {/* Typewriter role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl font-medium text-text-secondary mb-6 mt-4 h-9 flex items-center"
          >
            I'm a&nbsp;<TypewriterRoles />
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-text-secondary text-base md:text-lg max-w-lg mb-10 leading-relaxed"
          >
            I'm AJ — an aspiring software developer passionate about turning ideas into
            elegant, high-impact digital products. I specialize in modern web tech, full-stack
            architecture, and building developer-first experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(108,99,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-primary rounded-xl font-semibold text-white flex items-center gap-2 glow-violet transition-all text-sm md:text-base"
            >
              Get In Touch <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Anuj_Hiwarkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-xl font-semibold text-text-primary flex items-center gap-2 hover:border-accent-primary/40 hover:text-white transition-all text-sm md:text-base border border-white/10"
            >
              View Resume <Download size={18} />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full glass border border-white/10 hover:border-accent-primary/40 hover:bg-accent-primary/10 text-text-secondary hover:text-white transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-accent-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 rounded-full border border-accent-secondary/10"
            />

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/20 blur-2xl opacity-50" />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 px-4 py-2 glass rounded-xl border border-accent-primary/30 glow-violet z-20"
            >
              <span className="text-xs font-mono text-accent-primary font-semibold">Full-Stack</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 px-4 py-2 glass rounded-xl border border-accent-secondary/30 glow-mint z-20"
            >
              <span className="text-xs font-mono text-accent-secondary font-semibold">React Dev</span>
            </motion.div>

            {/* Profile image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-bg-secondary">
                <img
                  src="/profile_img.jpg.png"
                  alt="Anuj Hiwarkar"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/profile_img.jpg.png"; }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-secondary text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-accent-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
