import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const techs = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
  { icon: <SiCplusplus className="text-indigo-400" />, name: "C++" },
  { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
];

function AnimatedBackground() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 bg-[url('/fundo.png')] bg-repeat bg-auto filter brightness-75 blur-sm"
      animate={controls}
      style={{ zIndex: 0 }}
    />
  );
}

export default function Tech() {
  return (
    <section id="tecnologias" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Fundo animado */}
      <AnimatedBackground />

      {/* Overlay escuro para contraste */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-[#1b0033]/90"
        style={{ zIndex: 1 }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-12 tracking-wide"
        >
          Tecnologias
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(139,92,246,0.5)" }}
              className="bg-black bg-opacity-60 border border-indigo-700 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col items-center justify-center cursor-pointer transition-transform duration-300"
              title={tech.name}
            >
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{tech.icon}</div>
              <span className="text-indigo-300 text-sm sm:text-base font-semibold select-none">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
