import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Coils from "@/components/Coils";
import Cotton from "@/components/Cotton";
import WhyUs from "@/components/WhyUs";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <Coils />
        <Cotton />
        <WhyUs />
        <Shop />
      </main>
      <Footer />
    </>
  );
}
