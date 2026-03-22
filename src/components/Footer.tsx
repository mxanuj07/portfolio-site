import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp, Instagram } from "lucide-react";
import { motion } from "motion/react";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anuj-hiwarkar-4a0b45352/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:hiwarkaranuj@gmail.com", label: "Email" },
];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date()));
    };
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <footer className="relative w-full bg-[#050812] overflow-hidden pt-20 pb-8 border-t border-white/[0.05]">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[300px] bg-accent-primary/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              Ready to collaborate?
            </h3>
            <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full glass border border-white/[0.08] hover:border-accent-primary/40 hover:bg-accent-primary/10 text-text-secondary hover:text-white transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Giant name */}
        <div className="w-full flex justify-center mb-12 select-none pointer-events-none">
          <h1
            className="text-[18vw] leading-none font-display font-extrabold tracking-tighter"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.06)",
              background: "linear-gradient(180deg, rgba(108,99,255,0.15) 0%, transparent 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            ANUJ.
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/[0.06] text-sm text-text-secondary font-mono">
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} Anuj Hiwarkar.</p>
            <p className="flex items-center gap-2">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-accent-secondary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {time || "12:00 PM"} IST
            </p>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 hover:text-white transition-colors group"
          >
            <span className="tracking-widest uppercase text-xs">Back to Top</span>
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-accent-primary group-hover:text-white border border-white/10 group-hover:border-transparent transition-all">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
