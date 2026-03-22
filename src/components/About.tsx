import { motion } from "motion/react";
import { useState } from "react";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const cards = [
  {
    id: "01",
    front: {
      icon: Briefcase,
      label: "2026",
      title: "IT-NetworkZ Infosystems",
      subtitle: "Software Dev Intern · 6 Weeks",
      color: "#6C63FF",
      bg: "rgba(108,99,255,0.08)",
    },
    back: {
      heading: "What I Built",
      body: "Worked on real-time software development projects, gaining hands-on experience in building practical applications and solving real-world engineering problems end-to-end.",
      tag: "Industry Exposure",
    },
  },
  {
    id: "02",
    front: {
      icon: Code2,
      label: "2025",
      title: "Bootcoding Pvt. Ltd.",
      subtitle: "Java Intern · 45 Days",
      color: "#00F5D4",
      bg: "rgba(0,245,212,0.08)",
    },
    back: {
      heading: "What I Learned",
      body: "Immersed in Java development and real-world programming practice — sharpening fundamentals, understanding production code quality, and building end-to-end features.",
      tag: "Core Engineering",
    },
  },
  {
    id: "03",
    front: {
      icon: GraduationCap,
      label: "2023 – Now",
      title: "Priyadarshini College",
      subtitle: "B.Tech Information Technology",
      color: "#FF6B9D",
      bg: "rgba(255,107,157,0.08)",
    },
    back: {
      heading: "What I Study",
      body: "Pursuing B.Tech in IT with a focus on software development, cloud infrastructure, and data structures. Actively building academic and real-world projects alongside coursework.",
      tag: "Academic Foundation",
    },
  },
];

function FlipCard({ card }: { card: typeof cards[0] }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = card.front.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
      style={{ perspective: "1000px", height: "300px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", width: "100%", height: "100%" }}
        className="relative cursor-pointer"
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between border"
          style={{
            background: card.front.bg,
            borderColor: `${card.front.color}30`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Number + icon row */}
          <div className="flex items-start justify-between">
            <span
              className="text-6xl font-display font-extrabold leading-none select-none"
              style={{ color: `${card.front.color}20` }}
            >
              {card.id}
            </span>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${card.front.color}15`, border: `1px solid ${card.front.color}30` }}
            >
              <Icon size={22} style={{ color: card.front.color }} />
            </div>
          </div>

          {/* Year pill */}
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3"
              style={{ background: `${card.front.color}15`, color: card.front.color, border: `1px solid ${card.front.color}30` }}
            >
              {card.front.label}
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-1">{card.front.title}</h3>
            <p className="text-text-secondary text-sm">{card.front.subtitle}</p>
          </div>

          {/* Tap hint */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-text-secondary italic font-mono">Tap to reveal →</span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between border"
          style={{
            background: `linear-gradient(135deg, ${card.front.color}12 0%, rgba(8,11,20,0.95) 100%)`,
            borderColor: `${card.front.color}50`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold mb-4"
              style={{ background: `${card.front.color}20`, color: card.front.color }}
            >
              ✦ {card.back.tag}
            </span>
            <h4 className="text-lg font-display font-bold text-white mb-3">{card.back.heading}</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{card.back.body}</p>
          </div>
          <p className="text-xs text-text-secondary italic font-mono">← Tap to flip back</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/20 mb-6"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-accent-primary"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-mono text-accent-primary tracking-widest uppercase">
              Work &amp; Study
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-6xl font-display font-extrabold leading-tight shrink-0"
            >
              My{" "}
              <span className="text-gradient">Story</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
            >
              I'm wired to build things that matter. Every internship, every course, every side project is a step toward becoming a developer who ships impact — not just code.
            </motion.p>
          </div>

          {/* Instruction hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-sm font-mono mt-4 flex items-center gap-2"
          >
            <span className="w-4 h-px bg-accent-secondary inline-block" />
            Click any card to reveal the details
          </motion.p>
        </div>

        {/* Flip Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { value: "2+", label: "Internships" },
            { value: "5+", label: "Live Projects" },
            { value: "10+", label: "Technologies" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl glass border border-white/[0.07] text-center"
            >
              <p className="text-3xl font-display font-extrabold text-gradient mb-1">{stat.value}</p>
              <p className="text-text-secondary text-xs font-mono tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
