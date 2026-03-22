import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Award, Shield } from "lucide-react";

const certifications = [
  {
    title: "Design Fundamentals with AI",
    issuer: "Adobe",
    year: "2024",
    image: "/certificate 01.jpeg",
    link: "#",
    size: "large", // takes 2 cols
    accent: "#FF6B9D",
  },
  {
    title: "Java Internship",
    issuer: "Bootcoding Pvt Ltd",
    year: "2024",
    image: "/certificate 02.jpeg",
    link: "#",
    size: "small",
    accent: "#6C63FF",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    year: "2025",
    image: "/certificate 03.jpeg",
    link: "#",
    size: "small",
    accent: "#00F5D4",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
    image: "/certificate 04.jpeg",
    link: "#",
    size: "small",
    accent: "#FFB347",
  },
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS",
    year: "2026",
    image: "/certificate 05.jpeg",
    link: "#",
    size: "large",
    accent: "#6C63FF",
  },
];

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group border ${
        cert.size === "large" ? "md:col-span-2" : "md:col-span-1"
      }`}
      style={{
        borderColor: `${cert.accent}20`,
        background: `linear-gradient(135deg, ${cert.accent}08 0%, rgba(8,11,20,0.9) 100%)`,
        minHeight: cert.size === "large" ? "280px" : "240px",
      }}
    >
      {/* Certificate image — blurs out on hover to reveal text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center p-4"
        animate={{ opacity: hovered ? 0.1 : 0.5, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Gradient overlay always present at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${cert.accent}25 0%, transparent 60%)`,
        }}
      />

      {/* Bottom label — always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: cert.accent }}>
              {cert.issuer} · {cert.year}
            </p>
            <h3 className="text-base md:text-lg font-display font-bold text-white leading-snug">
              {cert.title}
            </h3>
          </div>
          <motion.a
            href={cert.link}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={15} className="text-white" />
          </motion.a>
        </div>
      </div>

      {/* Hover: center info overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center px-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
            style={{ background: `${cert.accent}20`, border: `1px solid ${cert.accent}40` }}
          >
            <Award size={24} style={{ color: cert.accent }} />
          </div>
          <p className="text-white font-semibold font-display text-sm">View Certificate</p>
        </div>
      </motion.div>

      {/* Corner glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.6 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[50px] pointer-events-none"
        style={{ background: cert.accent }}
      />
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 bg-bg-dark overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-secondary/20 mb-6"
          >
            <Shield size={12} className="text-accent-secondary" />
            <span className="text-xs font-mono text-accent-secondary tracking-widest uppercase">
              Proof of Work
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-6xl font-display font-extrabold leading-tight"
            >
              Earned{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #00F5D4 0%, #6C63FF 100%)" }}
              >
                Wins
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-base max-w-md md:text-right"
            >
              Every certificate is a battle won — knowledge forged through practice, not just coursework. Hover to explore.
            </motion.p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* Bottom count bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-between p-5 rounded-2xl glass border border-white/[0.07]"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center">
              <Award size={14} className="text-accent-secondary" />
            </div>
            <span className="text-text-secondary text-sm font-mono">
              <span className="text-white font-semibold">{certifications.length} certificates</span> earned across cloud, AI, and software engineering
            </span>
          </div>
          <span className="text-text-secondary text-xs font-mono hidden md:block">Tap any card to view</span>
        </motion.div>
      </div>
    </section>
  );
}
