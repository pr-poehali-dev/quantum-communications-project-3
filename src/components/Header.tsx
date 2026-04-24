interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-xl font-bold tracking-widest uppercase">DENU</div>
        <nav className="flex gap-6 items-center">
          <a
            href="#about"
            className="text-white/90 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide hidden md:block"
          >
            О студии
          </a>
          <a
            href="#prices"
            className="text-white/90 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide hidden md:block"
          >
            Прайс
          </a>
          <a
            href="#contact"
            className="bg-[#ff5e8e] text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-[#e54d7d] transition-colors duration-300 rounded-full"
          >
            Записаться
          </a>
        </nav>
      </div>
    </header>
  );
}