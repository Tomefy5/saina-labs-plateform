import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import WhySaina from "@/components/sections/WhySaina";
import About from "@/components/sections/About";
import Waitlist from "@/components/sections/Waitlist";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <HowItWorks />
        <WhySaina />
        <About />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
