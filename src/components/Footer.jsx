"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-blue-600 text-white w-full items-center flex flex-col mt-10">
      <div className="container mx-auto px-6 justify-between py-14 border-b-2 ">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-0">
          <aside className="text-center lg:text-left">
            <h3 className="font-bold text-xl xl:text-4xl" data-aos="fade-right">
              Stay Informed
            </h3>
            <p data-aos="fade-right" className="mt-1 text-[16px] lg:text-xl">Sign up for our newsletter</p>
          </aside>

          {/* Newsletter Input */}
          <aside className="relative flex w-full lg:ml-auto lg:w-2/4">
            <input
              type="text"
              className="w-full rounded bg-white p-4 text-black placeholder-gray-700 focus:outline-none lg:px-4 lg:py-6"
              placeholder="Enter Your Email Here"
              data-aos="fade-left"
            />
            <div className="absolute bottom-0 right-1 top-0 my-auto flex h-full items-center lg:right-4">
              <button
                className="group relative h-12 w-28 overflow-hidden rounded border-2 border-white bg-blue-600 lg:h-14 lg:w-36"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white group group-hover:text-blue-600 transition duration-300">
                  Subscribe
                </span>
                <div className="absolute  left-0 top-0 h-full w-0  bg-white transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>
          </aside>
        </div>
      </div>


      <div className="container mx-auto flex flex-col items-start justify-start lg:items-start  lg:justify-between gap-10 py-14 lg:flex-row">
        {/* Logo & About */}
        <div className="lg:w-4/12 mx-4">
          <Image src="/assets/logo.png" alt="whitelogo" width={200} height={80} className="bg-white max-lg:mx-auto" />
          <p className="mt-4 text-[16px] lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mx-4">
          <h5 className="font-bold text-xl lg:text-2xl">Bağlantılar</h5>
          <ul className="mt-4 flex flex-col gap-2">
            {["Anasayfa", "Hakkımda", "Hizmetlerimiz", "İletişim", "Randevu Al"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:opacity-75 text-[16px] lg:text-xl">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mx-4">
          <h5 className="font-bold text-xl lg:text-2xl">İletişim</h5>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-white" />
              <a href="#" className="hover:opacity-75 text-[16px] lg:text-xl">
                Hürriyet Mahallesi,  Süleymanpaşa/Tekirdağ
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-white" />
              <a href="#" className="hover:opacity-75 text-[16px] lg:text-xl">0559 559 59 59</a>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <a href="mailto:support@raddito.com" className="hover:opacity-75 text-[16px] lg:text-xl">
                support@atakaneren.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mx-4">
          <h5 className="font-bold text-xl lg:text-2xl">Follow Us</h5>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              { name: "Facebook", icon: <Facebook className="h-6 w-6 text-blue-600" />, link: "#" },
              { name: "Twitter", icon: <Twitter className="h-6 w-6 text-blue-600" />, link: "#" },
              { name: "LinkedIn", icon: <Linkedin className="h-6 w-6 text-blue-600" />, link: "#" },
              { name: "Instagram", icon: <Instagram className="h-6 w-6 text-blue-600" />, link: "#" },
            ].map(({ name, icon, link }) => (
              <li key={name}>
                <a className="flex items-center gap-2 hover:opacity-60" href={link}>
                  <div className="flex items-center justify-center rounded bg-white p-2">{icon}</div>
                  <span className="font-semibold text-[16px] lg:text-xl">{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
