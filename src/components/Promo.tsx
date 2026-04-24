import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Анастасия М.",
    text: "Делала эпиляцию в других местах — больно и результат слабый. В DENU всё иначе: почти не чувствуешь ничего, мастер объяснила всё подробно. Уже после 3 сеансов разница колоссальная!",
    stars: 5,
  },
  {
    name: "Елена В.",
    text: "Наконец нашла студию, которой можно доверять. Чисто, профессионально, без спешки. Мастера реально с образованием — это чувствуется. Всем рекомендую!",
    stars: 5,
  },
  {
    name: "Кристина Р.",
    text: "Пришла по акции на первый визит — теперь постоянный клиент. Цены адекватные, результат отличный. За 5 сеансов проблемная зона бикини стала намного лучше.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Больно ли делать лазерную эпиляцию?",
    a: "На нашем аппарате встроена система охлаждения Cryo — большинство клиентов описывают ощущение как «щелчок» или лёгкое тепло. Никакого терпения боли не нужно.",
  },
  {
    q: "Сколько сеансов нужно?",
    a: "Для стойкого результата — обычно 6–8 сеансов с интервалом 4–6 недель. На первой консультации мастер оценит ваши волосы и кожу и даст точную рекомендацию.",
  },
  {
    q: "Это безопасно? Есть ли противопоказания?",
    a: "Да, диодный лазер — самый безопасный метод для всех типов кожи. Перед курсом мы проводим консультацию и выявляем противопоказания, если они есть.",
  },
  {
    q: "Как вы обеспечиваете стерильность?",
    a: "Все расходные материалы — одноразовые. Кабинеты обрабатываются по медицинским стандартам. Мы работаем строго по протоколу.",
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      {/* Параллакс секция — результаты */}
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="https://cdn.poehali.dev/projects/8661a33f-39df-4105-a2de-83ebb0c68c74/files/cad8998a-6935-44bd-a692-b47e5450cace.jpg"
              alt="Результат лазерной эпиляции до и после"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
          <p className="uppercase text-[#ff5e8e] text-sm tracking-widest mb-4">Результаты</p>
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Видимый эффект<br />уже после 1–2 сеансов
          </h2>
          <p className="text-white/80 text-lg max-w-xl mb-8">
            Более 500 довольных клиентов в Рязани. Реальные фото результатов — в нашем профиле.
          </p>
          <a
            href="#contact"
            className="bg-[#ff5e8e] hover:bg-[#e54d7d] text-white font-semibold px-8 py-4 text-base uppercase tracking-wide transition-all duration-300 rounded-sm"
          >
            Записаться сейчас
          </a>
        </div>
      </div>

      {/* Отзывы */}
      <div className="bg-neutral-50 px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-neutral-400 mb-3 text-center">Отзывы</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 text-center mb-4">
            Что говорят клиенты
          </h2>
          <div className="flex items-center justify-center gap-2 mb-16">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-neutral-600 font-semibold">5.0</span>
            <span className="text-neutral-400">· 200+ отзывов на Яндекс.Картах</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300">
                <div className="text-yellow-400 text-sm mb-3">{"★".repeat(r.stars)}</div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4 italic">«{r.text}»</p>
                <p className="text-neutral-900 font-semibold text-sm">{r.name}</p>
                <p className="text-neutral-400 text-xs">Яндекс.Карты</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-neutral-400 mb-3 text-center">FAQ</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 text-center mb-16">
            Частые вопросы
          </h2>
          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-neutral-100 rounded-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-neutral-900 font-semibold text-base hover:bg-neutral-50 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-[#ff5e8e] text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-500 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
