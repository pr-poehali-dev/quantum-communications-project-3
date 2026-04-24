import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Hero (тёмное фото) → About (белый) */}
      <Wave topColor="#111" bottomColor="#ffffff" variant={2} />

      <Featured />

      {/* белый → тёмный параллакс (внутри Promo первая секция — тёмная) */}
      <Wave topColor="#ffffff" bottomColor="#111111" variant={3} />

      <Promo />

      {/* FAQ (белый) → Контакты (neutral-50) */}
      <Wave topColor="#ffffff" bottomColor="#f9fafb" variant={1} />

      <Footer />
    </main>
  );
};

export default Index;