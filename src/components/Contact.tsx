import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "Email", detail: "hiwarkaranuj@gmail.com", href: "mailto:hiwarkaranuj@gmail.com", color: "rgba(108,99,255," },
  { icon: Phone, title: "Phone", detail: "+91 9511997652", href: "tel:+919511997652", color: "rgba(0,245,212," },
  { icon: MapPin, title: "Location", detail: "Nagpur, Maharashtra", href: "#", color: "rgba(255,107,157," },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/8 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/20 mb-6">
            <motion.span
              className="w-2 h-2 rounded-full bg-accent-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-mono text-accent-primary tracking-widest uppercase">Transmission Open</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-4 leading-tight">
            Let's Build the{" "}
            <span className="text-gradient">Impossible.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            Whether you have a massive vision or a small idea — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-5">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center gap-5 p-5 rounded-2xl glass border border-white/[0.07] hover:border-white/15 transition-all duration-300 group cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${info.color}0.1)`, border: `1px solid ${info.color}0.3)` }}
                >
                  <info.icon
                    className="w-6 h-6 transition-colors"
                    style={{ color: `${info.color}0.9)` }}
                  />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-1">{info.title}</p>
                  <p className="text-text-primary font-medium group-hover:text-white transition-colors">{info.detail}</p>
                </div>
              </motion.a>
            ))}

            {/* Fun note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-5 rounded-2xl"
              style={{ background: "rgba(108,99,255,0.06)", border: "1px solid rgba(108,99,255,0.15)" }}
            >
              <p className="text-text-secondary text-sm leading-relaxed">
                💡 <span className="text-accent-primary font-medium">Quick tip:</span> I typically respond within{" "}
                <span className="text-white font-medium">24 hours</span>. Don't be shy — every great
                collaboration starts with a simple "hello".
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative group"
          >
            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />

            <div className="relative p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-bg-card/80 backdrop-blur-2xl">
              <h3 className="text-xl font-display font-bold mb-7 text-white">Send a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name */}
                <div className="space-y-2 group/field">
                  <label className="text-xs font-mono text-text-secondary tracking-widest uppercase">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-bg-dark/60 border border-white/[0.08] rounded-xl focus:outline-none focus:border-accent-primary/60 focus:bg-white/[0.03] transition-all text-white placeholder:text-white/20 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-secondary tracking-widest uppercase">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 bg-bg-dark/60 border border-white/[0.08] rounded-xl focus:outline-none focus:border-accent-secondary/60 focus:bg-white/[0.03] transition-all text-white placeholder:text-white/20 text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-secondary tracking-widest uppercase">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-5 py-3.5 bg-bg-dark/60 border border-white/[0.08] rounded-xl focus:outline-none focus:border-accent-primary/60 focus:bg-white/[0.03] transition-all resize-none text-white placeholder:text-white/20 text-sm"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(108,99,255,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 relative overflow-hidden glow-violet text-sm tracking-wide"
                  style={{ background: "linear-gradient(135deg, #6C63FF 0%, #9B8AFB 50%, #6C63FF 100%)", backgroundSize: "200% auto" }}
                >
                  <span>Send Message</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
