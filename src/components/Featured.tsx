import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Stethoscope",
    title: "Врачебный подход",
    desc: "Процедуры проводят специалисты с медицинским образованием. Перед курсом — консультация и диагностика кожи.",
    color: "#ff5e8e",
  },
  {
    icon: "Zap",
    title: "Безболезненный диодный лазер",
    desc: "Аппарат последнего поколения с системой охлаждения. Работает на всех типах кожи и волос — быстро и эффективно.",
    color: "#2ecc71",
  },
  {
    icon: "Shield",
    title: "Стерильность и безопасность",
    desc: "Одноразовые расходники, обработка кабинетов по медицинским стандартам. Ваша кожа под защитой.",
    color: "#ff5e8e",
  },
];

const prices = [
  { zone: "Верхняя губа", price: "от 500 ₽", discount: "250 ₽" },
  { zone: "Подмышки", price: "от 800 ₽", discount: "400 ₽" },
  { zone: "Бикини классическое", price: "от 1 200 ₽", discount: "600 ₽" },
  { zone: "Бикини глубокое", price: "от 1 800 ₽", discount: "900 ₽" },
  { zone: "Голени", price: "от 1 500 ₽", discount: "750 ₽" },
  { zone: "Ноги полностью", price: "от 2 800 ₽", discount: "1 400 ₽" },
];

export default function Featured() {
  return (
    <>
      {/* Преимущества */}
      <div id="about" className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-neutral-400 mb-3 text-center">Почему выбирают нас</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 text-center mb-4 leading-tight">
            Почему DENU — это другой уровень
          </h2>
          <p className="text-center text-neutral-500 max-w-xl mx-auto mb-16">
            Мы не просто делаем эпиляцию — мы заботимся о вашей коже, вашем здоровье и вашем комфорте.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex flex-col items-start p-8 border border-neutral-100 hover:shadow-lg transition-shadow duration-300 rounded-3xl hover:border-pink-100">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: adv.color + "20" }}
                >
                  <Icon name={adv.icon as "Stethoscope"} size={22} style={{ color: adv.color }} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{adv.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Процедура + фото */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-50">
        <div className="flex-1 h-[400px] lg:h-[700px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/8661a33f-39df-4105-a2de-83ebb0c68c74/files/3763a9ed-70a9-4ea4-9e7b-43b77998800b.jpg"
            alt="Процедура лазерной эпиляции в DENU"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[700px] flex flex-col justify-center lg:mr-16 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-widest text-[#ff5e8e]">Наш подход</h3>
          <p className="text-2xl lg:text-4xl mb-6 text-neutral-900 leading-tight font-bold">
            Мастер с медицинским образованием — не просто оператор лазера, а ваш личный эксперт по коже.
          </p>
          <p className="text-neutral-500 mb-8 leading-relaxed">
            На первой консультации мы изучаем тип вашей кожи и волос, подбираем параметры лазера индивидуально и объясняем каждый шаг. Никаких сюрпризов — только результат.
          </p>
          <a
            href="#contact"
            className="inline-block text-white border-0 px-6 py-3 text-sm transition-all duration-300 cursor-pointer uppercase tracking-wide w-fit rounded-full hover:opacity-90"
            style={{ backgroundColor: "#ff5e8e" }}
          >
            Записаться бесплатно
          </a>
        </div>
      </div>

      {/* Прайс */}
      <div id="prices" className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-neutral-400 mb-3 text-center">Цены</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 text-center mb-4">
            Популярные зоны
          </h2>
          <div className="inline-flex items-center gap-2 mx-auto flex justify-center mb-12">
            <span className="bg-[#2ecc71] text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">
              Скидка 50% на первый визит
            </span>
          </div>
          <div className="space-y-1">
            {prices.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 px-6 border border-neutral-100 hover:border-[#ff5e8e]/30 hover:bg-pink-50/30 transition-all duration-200 rounded-2xl"
              >
                <span className="text-neutral-900 font-medium">{item.zone}</span>
                <div className="flex items-center gap-4">
                  <span className="text-neutral-400 line-through text-sm">{item.price}</span>
                  <span className="text-[#ff5e8e] font-bold text-lg">{item.discount}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-400 text-sm mt-6">
            Скидка действует при первом обращении · Полный прайс уточняйте по телефону
          </p>
        </div>
      </div>
    </>
  );
}