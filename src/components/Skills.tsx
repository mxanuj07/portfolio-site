import { motion } from "motion/react";

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Javascript", icon: "JS" },
  { name: "Node.js", icon: "🟢" },
  { name: "React", icon: "⚛️" },
  { name: "Git", icon: "🌿" },
  { name: "Github", icon: "🐙" },
  { name: "Typescript", icon: "TS" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, color: "#FF6A3D" }}
              className="flex items-center gap-3 px-6 py-3 glass rounded-full cursor-default group transition-all"
            >
              <span className="text-xl group-hover:scale-125 transition-transform">{skill.icon}</span>
              <span className="font-medium text-text-secondary group-hover:text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
