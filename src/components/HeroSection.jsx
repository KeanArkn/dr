"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-no-repeat bg-[url('/assets/hero.png')]">
        <div className="flex h-full items-center bg-gradient-to-r from-blue-600 to-transparent text-white">
          <div className="container flex items-center justify-center p-6">
            <motion.div
              className="lg:w-8/12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-bold text-4xl xl:text-5xl text-white" data-aos="fade-right">
                Ürolojide Uzman Dokunuş
              </h1>

              <p className="mb-12 mt-8 text-lg" data-aos="fade-right" data-aos-delay="100">
                Ürolojik sağlığınız için güvenilir, modern ve kişiye özel tedaviler sunuyoruz.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-12">
                <button
                  className="group cursor-pointer relative h-14 w-36 overflow-hidden rounded border-2 border-blue-600 bg-white px-7 py-3 text-blue-600 transition duration-300 hover:text-white hover:bg-transparent hover:border-none"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center">
                    Daha Fazla Bilgi
                  </span>
                </button>

                {/* Video Button */}
                <label
                  className="flex cursor-pointer items-center gap-4 font-semibold"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  htmlFor="video-check"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                    <PlayIcon className="h-6 w-6" />
                  </div>
                  Tanıtım Videosu
                </label>
              </div>
            </motion.div>
          </div>
        </div>
      </header>  
    </div>
  );
}
