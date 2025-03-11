import NavBar2 from "@/components/NavBar2";
import Communication from "@/components/Communication";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <div  className="flex flex-col w-full min-h-screen items-center">
        <Communication />
        <NavBar2 />
        <AboutUs />
        <Footer />
      </div>
      
    </>
  );
}
