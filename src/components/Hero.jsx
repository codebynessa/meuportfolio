import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function AnimatedBackground() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 bg-[url('/fundo.png')] bg-repeat bg-cover"
      animate={controls}
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}

export default function Hero() {
  const fullTextBefore = "Olá, eu sou a ";
  const typedName = "Vanessa :)";
  const [typedTextBefore, setTypedTextBefore] = useState("");
  const [typedTextName, setTypedTextName] = useState("");
  const lilasNeon = "#A78BFA";

  useEffect(() => {
    let indexBefore = 0;
    let indexName = 0;

    function typeBefore() {
      setTypedTextBefore(fullTextBefore.substring(0, indexBefore + 1));
      indexBefore++;
      if (indexBefore < fullTextBefore.length) {
        setTimeout(typeBefore, 100);
      } else {
        typeName();
      }
    }

    function typeName() {
      setTypedTextName(typedName.substring(0, indexName + 1));
      indexName++;
      if (indexName < typedName.length) {
        setTimeout(typeName, 120);
      }
    }

    typeBefore();
  }, []);

  return (
    <section
      id="sobre"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/perfil.png"
            alt="Foto de Vanessa"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-4"
            style={{
              borderColor: lilasNeon,
              boxShadow: `
                0 0 10px ${lilasNeon},
                0 4px 15px rgba(167, 139, 250, 0.5)
              `,
              filter: `drop-shadow(0 0 8px ${lilasNeon})`,
              animation: "pulseGlow 3s infinite alternate ease-in-out",
            }}
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{
              color: "#fff",
              textShadow: `
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000
              `,
            }}
          >
            {typedTextBefore}
            <span
              style={{
                color: lilasNeon,
                fontWeight: "900",
                textShadow: `
                  -1px -1px 0 #000,
                  1px -1px 0 #000,
                  -1px 1px 0 #000,
                  1px 1px 0 #000
                `,
              }}
            >
              {typedTextName}
            </span>
          </h1>

<p
  className="
    text-gray-300
    text-base sm:text-lg md:text-xl
    mb-6
    max-w-full md:max-w-lg
    mx-auto md:mx-0
    px-4 md:px-0
    text-center md:text-left
  "
>
  Desenvolvedora Front-End apaixonada por transformar ideias em experiências digitais incríveis.
</p>

          <motion.a
            href="#sobre-info"
            whileHover={{
              scale: 1.1,
              boxShadow: `0 0 20px ${lilasNeon}, 0 0 30px ${lilasNeon}`,
              textShadow: `0 0 5px ${lilasNeon}`,
            }}
            className="inline-block px-10 py-4 border-2 font-semibold rounded-xl transition-all duration-300 mt-12"
            style={{
              color: lilasNeon,
              borderColor: lilasNeon,
              alignSelf: "center", // centraliza botão no eixo cruzado
              fontSize: "1.25rem",
            }}
          >
            Saber mais
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            box-shadow:
              0 0 10px ${lilasNeon},
              0 4px 15px rgba(167, 139, 250, 0.5);
          }
          100% {
            box-shadow:
              0 0 20px ${lilasNeon},
              0 8px 30px rgba(167, 139, 250, 0.7);
          }
        }
      `}</style>
    </section>
  );
}
