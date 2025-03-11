import NavBar2 from "@/components/NavBar2";
import Communication from "@/components/Communication";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import HealthCare from "@/components/HealthCare";
import WhyUs from "@/components/WhyUs";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";

export default function Home() {
  return (
    <>
      <div  className="flex flex-col w-full min-h-screen items-center bg-gradient-to-l">
        <Communication />
        <NavBar2 />
        <HeroSection />
        <InfoCards />
        <WhyUs />
        <HealthCare />
        <Testimonials />
        <Footer />
      </div>
      
    </>
  );
}
