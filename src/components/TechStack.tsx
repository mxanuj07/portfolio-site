import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const tools = [
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 90, color: "56, 189, 248" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: 85, color: "247, 223, 30" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", level: 80, color: "49, 120, 198" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: 80, color: "97, 218, 251" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", level: 75, color: "51, 153, 51" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: 85, color: "55, 118, 171" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", level: 90, color: "240, 80, 50" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", level: 70, color: "36, 150, 237" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", level: 95, color: "227, 79, 38" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", level: 90, color: "21, 114, 182" },
  { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg", level: 70, color: "0, 161, 224" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", level: 65, color: "0, 115, 150" },
];

// Tilt card component
function TiltCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const circumference = 2 * Math.PI * 20;
  const strokeDash = (tool.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative group cursor-default"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: `rgb(${tool.color})` }}
      />

      <div className="relative h-full p-5 rounded-2xl glass border border-white/[0.08] flex flex-col items-center gap-4 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Floating icon */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3 + (index % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-bg-dark/60 border border-white/[0.06]"
        >
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* Name */}
        <h3 className="font-display font-semibold text-sm text-text-primary/80 group-hover:text-white transition-colors tracking-wide text-center">
          {tool.name}
        </h3>

        {/* Circular progress ring */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" width="48" height="48" viewBox="0 0 48 48">
            {/* Track */}
            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
            {/* Progress */}
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke={`rgb(${tool.color})`}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${circumference}`}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: circumference - strokeDash }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 + index * 0.05, ease: "easeOut" }}
            />
          </svg>
          <span className="text-[10px] font-mono font-semibold" style={{ color: `rgb(${tool.color})` }}>
            {tool.level}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-28 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
            <span className="text-xs font-mono text-accent-primary tracking-widest uppercase">Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-6xl font-display font-extrabold mb-4"
          >
            Technical{" "}
            <span className="text-gradient">Arsenal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-xl mx-auto text-base md:text-lg"
          >
            A constantly evolving toolkit of technologies I use to build robust, modern digital experiences.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <TiltCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
