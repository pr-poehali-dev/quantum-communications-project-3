import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import FloatingBalloons from "@/components/FloatingBalloons";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/8661a33f-39df-4105-a2de-83ebb0c68c74/files/45549d94-2bfe-47a1-87f7-a00abf25cf70.jpg"
          alt="Студия лазерной эпиляции DENU"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-sm text-white/90">5.0 на Яндекс.Картах · 200+ отзывов</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
          Лазерная эпиляция<br />
          <span style={{ color: "#ff5e8e" }}>без боли и страха</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Студия DENU в Рязани. Диодный лазер последнего поколения, врачебный подход, абсолютная стерильность.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#ff5e8e] hover:bg-[#e54d7d] text-white font-semibold px-8 py-4 text-base uppercase tracking-wide transition-all duration-300 rounded-full shadow-lg"
          >
            Записаться на сеанс
          </a>
          <a
            href="#prices"
            className="border border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 text-base uppercase tracking-wide transition-all duration-300 rounded-full"
          >
            Смотреть прайс
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">
          <span style={{ color: "#2ecc71" }} className="font-semibold">Скидка 50%</span> на первый визит для новых клиентов
        </p>
      </div>

      <FloatingBalloons count={6} />

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}