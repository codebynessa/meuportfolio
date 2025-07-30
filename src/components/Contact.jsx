import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const contacts = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/codebynessa",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/vanessa-f-ferreira",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/xvnsza",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:vanessafreitasferreir4@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/5598970077648", // substitui com teu número real com DDI
  },
  {
    name: "Localização",
    icon: <FaMapMarkerAlt />,
    url: "https://www.google.com/maps/place/Dourados,+MS,+Brasil",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 15 },
  },
};

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-16 px-4 sm:px-8 bg-[radial-gradient(ellipse_at_top,_#1b0033,_#0d0d1f)] text-white"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contato
      </motion.h2>

      <p className="text-center mb-12 max-w-xl mx-auto text-gray-300 text-base sm:text-lg">
        Vamos nos conectar? Aqui estão minhas{" "}
        <span className="text-[#A78BFA] font-semibold">redes</span> e minha{" "}
        <span className="text-[#A78BFA] font-semibold">localização</span>!
      </p>

      {/* Parte de cima: 3 ícones */}
      <motion.div
        className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contacts.slice(0, 3).map(({ name, icon, url }) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-[#A78BFA] transition-colors duration-300"
            aria-label={name}
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl sm:text-4xl mb-2">{icon}</span>
            <span className="text-sm sm:text-base">{name}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Parte de baixo: 3 últimos ícones centralizados */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contacts.slice(3).map(({ name, icon, url }) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-[#A78BFA] transition-colors duration-300"
            aria-label={name}
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl sm:text-4xl mb-2">{icon}</span>
            <span className="text-sm sm:text-base">{name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
