export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-[#A78BFA]/20 text-gray-300 bg-[#0d0d1f] overflow-hidden">
      {/* Fundo com textura e overlay suave */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1b0033]/80 to-transparent bg-[url('/assets/bg-textura.png')] bg-repeat bg-[length:300px_300px] opacity-10"
        style={{ zIndex: -1 }}
      />
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <p className="text-sm font-mono select-none">
          © 2025 <span className="text-[#A78BFA] font-semibold">Vanessa F. Ferreira</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
