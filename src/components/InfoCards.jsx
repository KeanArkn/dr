"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";

const InfoCards = () => {
  return (
    <>
    <div className="w-screen relative">
        <div className="absolute left-1/2 max-lg:-bottom-[340px] lg:-top-24 transform -translate-x-1/2 flex w-full max-w-5xl bg-white p-7 lg:p-14 shadow-[0_3px_32px_0_#0067FF1A]">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 items-center p-2 gap-2 bg-white">
      {/* Card 1 */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left text-black "
        data-aos="fade-up"
        data-aos-delay="100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white mr-4">
          <PlayIcon className="flex h-10 w-10 text-blue-600" />
        </div>
        <aside className="max-w-2/3">
          <h5 className="font-medium text-black">Özel Tedavi Planları</h5>
          <p className="text-gray-700">Bireysel ihtiyaçlarınıza özel çözümler</p>
        </aside>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="flex flex-col items-center justify-center text-center text-black lg:flex-row lg:text-left"
        data-aos="fade-up"
        data-aos-delay="200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white mr-4">
          <PlayIcon className="h-10 w-10 text-blue-600" />
        </div>
        <aside className="max-w-2/3">
          <h5 className="font-medium text-black">Son Teknoloji Teşhis</h5>
          <p className="text-gray-700">Modern ekipmanlarla doğru teşhis</p>
        </aside>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="flex flex-col items-center justify-center text-center text-black lg:flex-row lg:text-left"
        data-aos="fade-up"
        data-aos-delay="300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full mr-4 bg-white">
          <PlayIcon className="h-[40px] w-[40px] text-blue-600" />
        </div>
        <aside className="max-w-2/3">
          <h5 className="font-medium text-black">Uzman Kadro</h5>
          <p className="text-gray-700">Deneyimli üroloji doktorlarımızla güvenli tedavi</p>
        </aside>
      </motion.div>
            </div>
        </div>
    </div>

    <input className="hidden" type="checkbox" id="video-check" />
    <label
        htmlFor="video-check"
        className="pointer-events-none fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 opacity-0 transition delay-200 duration-1000"
        id="video"
    >
        <div className="relative aspect-[16/9] w-11/12 rounded-md shadow-lg lg:w-1/2">
        <label
            htmlFor="video-check"
            className="absolute -top-14 right-0 cursor-pointer text-3xl text-white lg:-right-10 lg:-top-12"
        >
            <XMarkIcon className="h-8 w-8 text-white" />
        </label>
        <iframe
            className="h-full w-full rounded-md"
            src="https://www.youtube.com/embed/xcJtL7QggTI?si=YN9q7bMgyNle6d7Z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
        </div>
    </label>
  </>
  )
}

export default InfoCards