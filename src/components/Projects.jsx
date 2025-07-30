// Importando hooks do React e animações do Framer Motion
import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// Lista de projetos com dados usados para renderização
const projects = [
  {
    id: 1,
    title: "Cardápio Digital",
    shortDesc: "Cardápio online com categorias, resumo do pedido, e envio direto pelo WhatsApp.",
    fullDesc:
      "Restaurante Cactos - Projeto de site para restaurante, com cardápio online, carrinho de compras e sistema de pedidos.",
    image: "/cardapio.png",
    liveUrl: "https://codebynessa.github.io/restaurante-cactos/",
    codeUrl: "https://github.com/codebynessa/restaurante-cactos",
    techs: ["JavaScript", "Bootstrao", "JQuery", "HTML", "CSS", "E-commerce"],
  },
  {
    id: 2,
    title: "To Do List",
    shortDesc: "Aplicativo web de lista de tarefas (To-Do List).",
    fullDesc:
      "criado para ajudar usuários a organizar suas atividades diárias de forma simples e intuitiva.",
    image: "/todolist.png",
    liveUrl: "https://codebynessa.github.io/JustDoVan/",
    codeUrl: "https://github.com/codebynessa/JustDoVan",
    techs: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "Clone do Airbnb",
    shortDesc: "",
    fullDesc:
      "Este projeto é um clone do Airbnb desenvolvido com tecnologias modernas do ecossistema React, focando em boas práticas, performance e escalabilidade.",
    image: "/airbnb.png",
    liveUrl: "https://clone-aibnb-eight.vercel.app/",
    codeUrl: "https://github.com/codebynessa/clone-aibnb",
    techs: ["Next.js", "TypeScript", "Tailwind" , "API REST (Next.js API Routes)"],
  },
   {
    id: 4,
    title: "Calculadora de Combustível",
    shortDesc: "Para determinar o combustível mais econômico.",
    fullDesc:
      "Desenvolvido em HTML, CSS (Bootstrap) e JavaScript para determinar o combustível mais econômico.",
    image: "/calculadora.png",
    liveUrl: "https://codebynessa.github.io/gas-or-ethanol-calculator/",
    codeUrl: "https://github.com/codebynessa/gas-or-ethanol-calculator",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Interface de login do Trello",
    shortDesc: "Este é um projeto de página de login inspirada no Trello",
    fullDesc:
      "Desenvolvido em HTML, CSS e JavaScript",
    image: "/trello.png",
    liveUrl: "https://codebynessa.github.io/PageLoginTrello/",
    codeUrl: "https://github.com/codebynessa/PageLoginTrello?tab=readme-ov-file",
    techs: ["HTML", "CSS", "JavaScript"],
  },
];

// Animação dos cards aparecendo em sequência
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // cada card aparece com um pequeno intervalo
    },
  },
};

// Animação individual de cada card
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 120, damping: 14 } 
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 8px 20px rgba(167, 139, 250, 0.6)", // efeito de destaque no hover
    borderColor: "#A78BFA", // borda lilás no hover
  },
};

// Variants para o fundo escuro do modal
const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Animação do conteúdo do modal
const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 120, damping: 20 } 
  },
  exit: { 
    scale: 0.8, 
    opacity: 0, 
    transition: { duration: 0.2 } 
  },
};

// Componente principal de exibição dos projetos
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null); // controla o projeto selecionado para abrir no modal

  return (
    <section
      id="projetos"
      className="relative py-24 px-6 text-white bg-[url('/assets/fundo.png')] bg-repeat bg-[length:auto]"
      style={{ backgroundBlendMode: "multiply" }}
    >
      {/* Fundo escuro em degradê sobre a imagem */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#1b0033]/80 to-black/95" 
        style={{ zIndex: 0 }} 
      />

      {/* Título da seção com animação de entrada */}
      <motion.h2
        className="relative z-10 text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projetos
      </motion.h2>

      {/* Grid de cards com animação em sequência */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gradient-to-tr from-[#1b1b2f] to-[#22223a] rounded-2xl overflow-hidden flex flex-col cursor-pointer border border-transparent"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedProject(project)} // abre modal
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedProject(project); // acessibilidade
            }}
          >
            {/* Imagem do projeto com efeito de zoom no hover */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              loading="lazy"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 flex-grow">{project.shortDesc}</p>
              <div className="mt-4 flex gap-4">
                {/* Botão para visualizar projeto ao vivo */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#A78BFA] hover:bg-[#8c7ae6] px-4 py-2 rounded-md text-white flex items-center gap-2 flex-grow justify-center transition-colors"
                >
                  <FaExternalLinkAlt /> Ver projeto
                </a>
                {/* Botão para acessar o código no GitHub */}
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="border border-[#A78BFA] hover:border-[#8c7ae6] px-4 py-2 rounded-md text-[#A78BFA] hover:text-[#8c7ae6] flex items-center gap-2 flex-grow justify-center transition-colors"
                >
                  <FaGithub /> Código
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal com detalhes do projeto selecionado */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)} // fecha o modal ao clicar fora
          >
            <motion.div
              className="bg-[#1b1b2f] rounded-3xl max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative border-2 border-[#A78BFA]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // impede que o clique feche o modal
            >
              {/* Botão de fechar modal */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                aria-label="Fechar modal"
              >
                <FaTimes />
              </button>

              {/* Conteúdo do projeto selecionado no modal */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl mb-6 object-cover"
                loading="lazy"
              />
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="mb-4 text-gray-300">{selectedProject.fullDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#A78BFA] text-white px-3 py-1 rounded-full text-sm select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {/* Botão ver projeto no modal */}
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#A78BFA] hover:bg-[#8c7ae6] px-6 py-3 rounded-md text-white flex items-center gap-2 justify-center flex-grow transition-colors"
                >
                  <FaExternalLinkAlt /> Ver projeto
                </a>
                {/* Botão código no modal */}
                <a
                  href={selectedProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#A78BFA] hover:border-[#8c7ae6] px-6 py-3 rounded-md text-[#A78BFA] hover:text-[#8c7ae6] flex items-center gap-2 justify-center flex-grow transition-colors"
                >
                  <FaGithub /> Código
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
