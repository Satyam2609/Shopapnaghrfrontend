"use client"
import Image from "next/image";
import ProductNavbar from "./Components/ProductNavbar";
import ProductHero from "./Components/ProductHero";
import ProductMan from "./Components/ProductMan";
import ProductWoman from "./Components/ProductWoman";
import ProductComapany from "./Components/ProductsCompny";
import Footer from "./Components/Footer";
import ProductCloths from "./Components/ProductsCloths";
import Animation from "./Animation";
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    aos.init({ duration: 100 });
  }, []);

  return (
    <>
    <Animation/>
    <div className="bg-gradient-to-br from-cyan-300 via-violet-200 to-white h-auto w-full">
    <ProductNavbar/>
    <div className="h-full w-full" data-aos="fade-up">
    <ProductHero/>
    </div>
    <div className="h-full w-full" data-aos="fade-up">
    <ProductCloths/>
    </div>
    <div className="h-full w-full" data-aos="fade-up">
    <ProductMan/>
    </div>
    <div className="h-full w-full" data-aos="fade-up">
    <ProductWoman/>
    </div>
    <div className="h-full w-full" data-aos="fade-up">
    <ProductComapany/>
    </div>      
    <Footer/>
    </div>
    
    </>
  );
}
