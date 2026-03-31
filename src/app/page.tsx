import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { MenuSection } from "@/components/MenuSection";
import { Chef } from "@/components/Chef";
import { Reservations } from "@/components/Reservations";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <MenuSection />
        <Chef />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
