import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-16 relative">
        {/* Menu desktop centralizado */}
        <nav className="hidden md:flex space-x-6">
          <a href="#sobre" className="text-gray-200 hover:text-white transition">
            Home
          </a>
          <a
            href="#tecnologias"
            className="text-gray-200 hover:text-white transition"
          >
            Tecnologias
          </a>
          <a href="#projetos" className="text-gray-200 hover:text-white transition">
            Projetos
          </a>
          <a href="#contato" className="text-gray-200 hover:text-white transition">
            Contato
          </a>
        </nav>

        {/* Botão hamburger para mobile - posicionado no canto direito */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 focus:outline-none absolute right-4"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 space-y-4">
          <a
            href="#sobre"
            className="block text-gray-200 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#tecnologias"
            className="block text-gray-200 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Tecnologias
          </a>
          <a
            href="#projetos"
            className="block text-gray-200 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="block text-gray-200 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
