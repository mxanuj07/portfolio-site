import { motion } from "motion/react";
import { useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg-dark flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* Background blob */}
      <motion.div
        className="absolute w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(108,99,255,0.5) 0%, rgba(0,245,212,0.2) 100%)" }}
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 80, 0],
          x: ["-5%", "5%", "-5%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Logo / name */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-display font-extrabold tracking-tighter"
          style={{
            background: "linear-gradient(135deg, #6C63FF 0%, #00F5D4 50%, #FF6B9D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          AJ.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-mono text-text-secondary text-xs tracking-[0.5em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Anuj Hiwarkar
        </motion.p>
      </motion.div>

      {/* Loading progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, #6C63FF, #00F5D4)" }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.8, ease: "linear" }}
      />
    </motion.div>
  );
}
