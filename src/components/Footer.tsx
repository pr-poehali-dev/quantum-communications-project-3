export default function Footer() {
  return (
    <>
      {/* Контакты */}
      <div
        id="contact"
        className="bg-neutral-50 px-6 py-20 lg:py-28"
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-widest text-neutral-400 mb-3 text-center">Контакты</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 text-center mb-16">
            Запишитесь прямо сейчас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#ff5e8e20" }}
              >
                <span className="text-xl">📍</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Адрес</h3>
              <p className="text-neutral-500 text-sm">г. Рязань<br />уточните адрес по телефону</p>
            </div>
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#ff5e8e20" }}
              >
                <span className="text-xl">📞</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Телефон</h3>
              <a href="tel:+7" className="text-[#ff5e8e] font-semibold hover:underline">+7 (___) ___-__-__</a>
            </div>
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#ff5e8e20" }}
              >
                <span className="text-xl">🕐</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Режим работы</h3>
              <p className="text-neutral-500 text-sm">Пн–Сб: 9:00 – 20:00<br />Вс: по записи</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="tel:+7"
              className="inline-block bg-[#ff5e8e] hover:bg-[#e54d7d] text-white font-semibold px-10 py-4 text-base uppercase tracking-wide transition-all duration-300 rounded-sm shadow-lg mr-4"
            >
              Позвонить
            </a>
            <a
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 hover:border-[#ff5e8e] hover:text-[#ff5e8e] font-semibold px-10 py-4 text-base uppercase tracking-wide transition-all duration-300 rounded-sm"
            >
              ВКонтакте
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div
        className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
          <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
            <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
              <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Студия</h3>
                  <a href="#about" className="text-white hover:text-[#ff5e8e] transition-colors duration-300 text-sm sm:text-base">О нас</a>
                  <a href="#prices" className="text-white hover:text-[#ff5e8e] transition-colors duration-300 text-sm sm:text-base">Прайс</a>
                  <a href="#contact" className="text-white hover:text-[#ff5e8e] transition-colors duration-300 text-sm sm:text-base">Контакты</a>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Соцсети</h3>
                  <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff5e8e] transition-colors duration-300 text-sm sm:text-base">ВКонтакте</a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff5e8e] transition-colors duration-300 text-sm sm:text-base">Instagram*</a>
                  <p className="text-neutral-600 text-xs mt-2">*признан нежелательной<br />организацией в РФ</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
                <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight" style={{ color: "#ff5e8e" }}>
                  DENU
                </h1>
                <div className="text-right">
                  <p className="text-neutral-400 text-sm">{new Date().getFullYear()} © DENU</p>
                  <p className="text-neutral-600 text-xs mt-1">Студия лазерной эпиляции · Рязань</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
