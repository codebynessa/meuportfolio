import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function AnimatedBackgroundDark() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 bg-[url('/fundo.png')] bg-repeat bg-cover filter brightness-50"
      animate={controls}
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}

export default function Sobre() {
  return (
    <section
      id="sobre-info"
      className="relative min-h-screen px-6 sm:px-10 md:px-20 py-16 text-white flex items-center overflow-hidden"
    >
      <AnimatedBackgroundDark />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto bg-black bg-opacity-70 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Sobre Mim
        </h2>
<p className="text-base sm:text-lg leading-relaxed text-gray-300 text-justify">
          Atualmente, estou no <strong className="text-[#8B5CF6]">4º semestre</strong> do curso de <strong className="text-[#8B5CF6]">Engenharia de Software</strong>e tenho aprofundado meus conhecimentos em desenvolvimento e boas práticas de programação. Além disso, possuo formação técnica em <strong className="text-[#8B5CF6]">Informática</strong>, que complementa minha base técnica sólida.
          <br />
          <br />
          Tenho focado meus estudos em desenvolvimento <strong className="text-[#8B5CF6]">Front-End</strong>, criando interfaces intuitivas e responsivas, mas meu objetivo é <strong className="text-[#8B5CF6]">crescer profissionalmente</strong> e expandir meu conhecimento para atuar também como desenvolvedora <strong className="text-[#8B5CF6]">Full-Stack</strong>. Estou sempre buscando aprender novas tecnologias e ferramentas para entregar soluções digitais de alta qualidade.
          <br />
          <br />
          Sou uma profissional <strong className="text-[#8B5CF6]">determinada</strong>, movida pela <strong className="text-[#8B5CF6]">paixão por tecnologia e inovação</strong>, pronta para superar desafios e <strong className="text-[#8B5CF6]">transformar ideias em soluções</strong> que impactam positivamente o mundo ao meu redor.
        </p>
      </motion.div>
    </section>
  );
}
