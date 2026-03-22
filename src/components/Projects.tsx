import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Check } from "lucide-react";

const projects = [
  {
    title: "HireSense AI",
    description: "An intelligent resume analysis platform that evaluates resumes against job descriptions in real-time. It leverages AI-driven text analysis to identify keyword gaps and formatting issues, helping applicants optimize for ATS.",
    image: "/project image 01.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "OpenAI API"],
    features: [
      "Deep ATS compatibility score analysis",
      "Real-time keyword gap identification",
      "Actionable feedback on resume structure",
      "Direct role-matching to ensure industry alignment",
    ],
    github: "#",
    live: "#",
    accent: "#6C63FF",
    accentSecondary: "#9B8AFB",
  },
];

function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    setPos({ x: (clientX - (left + width / 2)) * 0.2, y: (clientY - (top + height / 2)) * 0.2 });
  };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => setPos({ x: 0, y: 0 })} animate={pos} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(Math.floor(latest * projects.length), projects.length - 1);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  });

  const proj = projects[currentIndex];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative"
      style={{ height: projects.length > 1 ? `${projects.length * 100}vh` : "auto", minHeight: "100vh", background: "#080B14" }}
    >
      <div className={`w-full flex flex-col justify-center ${projects.length > 1 ? "sticky top-0 h-screen overflow-hidden" : "min-h-screen py-24 md:py-32"}`}>
        
        {/* Cinematic background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[700px] h-[700px] bg-accent-primary/8 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-accent-secondary/6 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-10">
          
          {/* Header */}
          <div className="mb-12 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-accent-primary to-accent-secondary" />
              <span className="text-text-secondary font-mono text-xs tracking-[0.25em] uppercase">What I've Made</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white">
              Selected{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #6C63FF 0%, #00F5D4 100%)" }}
              >
                Work
              </span>
            </h2>
          </div>

          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 80, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 1.03 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <div className="relative h-[35vh] lg:h-[58vh] w-full rounded-3xl overflow-hidden border bg-bg-card group flex items-center justify-center"
                  style={{ borderColor: `${proj.accent}30` }}
                >
                  <motion.img
                    initial={{ scale: 0.88, filter: "blur(10px)" }}
                    animate={{ scale: 1.04, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={proj.image}
                    alt={proj.title}
                    className="w-[88%] h-[88%] object-contain drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${proj.accent}15 0%, transparent 100%)` }}
                  />
                  {/* Corner decoration */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                      <div key={c} className="w-2.5 h-2.5 rounded-full opacity-60" style={{ background: c }} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center h-full pb-6 lg:pb-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 leading-tight"
                  >
                    {proj.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-text-secondary text-base lg:text-lg mb-6 leading-relaxed"
                  >
                    {proj.description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {proj.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                        whileHover={{ y: -3, boxShadow: `0 0 15px ${proj.accent}60` }}
                        className="px-3 py-1.5 text-xs font-mono font-medium border rounded-full text-white/80 transition-all cursor-default"
                        style={{ borderColor: `${proj.accent}30`, background: `${proj.accent}10` }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-10 space-y-3"
                  >
                    <h4 className="text-white font-semibold font-display text-sm tracking-wide uppercase mb-4">Key Features</h4>
                    {proj.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${proj.accent}20`, border: `1px solid ${proj.accent}40` }}>
                          <Check className="w-3 h-3" style={{ color: proj.accent }} />
                        </div>
                        <span className="text-white/70 text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <MagneticWrapper>
                      <a href={proj.github} className="px-6 py-3 glass border border-white/15 rounded-xl font-semibold text-white flex items-center gap-2 hover:bg-white/10 transition-colors text-sm">
                        <Github size={17} /> Code
                      </a>
                    </MagneticWrapper>
                    <MagneticWrapper>
                      <a
                        href={proj.live}
                        className="px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2 transition-all text-sm"
                        style={{ background: `linear-gradient(135deg, ${proj.accent} 0%, ${proj.accentSecondary} 100%)`, boxShadow: `0 0 25px ${proj.accent}40` }}
                      >
                        Live Demo <ExternalLink size={17} />
                      </a>
                    </MagneticWrapper>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Nav dots */}
        <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          {projects.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500"
              style={{
                width: "8px",
                height: currentIndex === i ? "40px" : "8px",
                background: currentIndex === i ? proj.accent : "rgba(255,255,255,0.2)",
                boxShadow: currentIndex === i ? `0 0 15px ${proj.accent}` : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
