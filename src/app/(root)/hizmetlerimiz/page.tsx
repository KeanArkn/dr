import NavBar2 from "@/components/NavBar2";
import Communication from "@/components/Communication";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div  className="flex flex-col w-full min-h-screen items-center">
        <Communication />
        <NavBar2 />
        <Services />
        <Footer />
      </div>
      
    </>
  );
}
