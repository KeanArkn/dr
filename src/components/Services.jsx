"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button"; // ShadCN Button Component
import Image from "next/image";
import { HeartIcon, BeakerIcon, PlusCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 400, once: true });
  }, []);

  const services = [
    {
      id: 1,
      title: "Primary Care",
      description: "Our dedicated team of medical experts",
      icon: HeartIcon,
      delay: 0,
      navUrl : "/hakkimizda"
    },
    {
      id: 2,
      title: "Diagnostic",
      description: "Our dedicated team of medical experts",
      icon: BeakerIcon,
      delay: 0,
      navUrl : "/hakkimizda"
    },
    {
      id: 3,
      title: "Rehabilitation",
      description: "Our dedicated team of medical experts",
      icon: PlusCircleIcon,
      delay: 0,
      navUrl : "/hakkimizda"
    },
    {
      id: 4,
      title: "Specialty Care",
      description: "Our dedicated team of medical experts",
      icon: UserGroupIcon,
      delay: 0,
      navUrl : "/hakkimizda"
    },
  ];

  return (
    <section id="services" className="container bg-white py-14 lg:py-28 mt-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">

        {/* Right Side - Text & CTA */}
        <div className="w-full lg:order-2 text-center">
          <p className="font-medium text-xl text-blue-600" data-aos="fade-left">Our Services</p>
          <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-black" data-aos="fade-left">Discover Comprehensive Medical Care</h2>
          <p className="mt-7 text-[16px] text-gray-700" data-aos="fade-left">
            From preventive medicine to specialized treatments, we prioritize
            your health journey. With cutting-edge technology and compassionate professionals, we strive to ensure every
          </p>

          <div className="mt-12 flex items-center justify-center gap-12">
            {/* Play Button */}
            <label className="flex cursor-pointer items-center gap-4 font-semibold" data-aos="fade-left" data-aos-delay="200">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600">
                <PlayCircleIcon className="h-8 w-8" />
              </div>
              Learn More
            </label>

            {/* ShadCN Read More Button
            <Button
              variant="outline"
              className="border-2 border-blue-600 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Read More
            </Button> */}
          </div>
        </div>


        {/* Left Side - Icons Grid */}
        <div className="w-full lg:w-5/12">
          <div className="grid grid-cols-2 gap-5">
            {services.map(({ id, title, description, icon: Icon, delay, navUrl }) => (
              <div key={id} data-aos="zoom-in" data-aos-delay={delay}>
                <Link href={navUrl}  className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-md text-center shadow-xl *:shadow-gray-700 transition duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
                  <Icon width={40} height={40} className="w-10 h-10 text-blue-600 transition duration-300 group-hover:text-white" />
                  <h5 className="font-semibold text-black transition duration-300 group-hover:text-white">{title}</h5>
                  <p className="text-gray-600 transition duration-300 group-hover:text-white">{description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
