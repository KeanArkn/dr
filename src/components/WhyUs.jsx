"use client";

import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function WhyUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Intersection Observer ile Animasyonu Başlat
  const useAnimatedNumber = (target) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 2000; // 2 saniyede tamamlansın
        const stepTime = 30;
        const steps = Math.ceil(duration / stepTime);
        const increment = target / steps;

        const counter = setInterval(() => {
          start += increment;
          setCount(Math.round(start));

          if (start >= target) {
            clearInterval(counter);
            setCount(target);
          }
        }, stepTime);

        return () => clearInterval(counter);
      }
    }, [isVisible, target]);

    return { count, ref };
  };

  // ✅ Scroll ile animasyonlu sayılar
  const clients = useAnimatedNumber(573);
  const years = useAnimatedNumber(25);

  return (
    <section className="container px-4 mt-96 lg:mt-44 mb-10 mx-auto flex flex-col lg:flex-row" id="why-us">
      {/* Left Content */}
      <div className="w-full lg:w-8/12 flex flex-col items-center justify-center">
        <p className="font-medium text-blue-600 text-[16px] xl:text-xl" data-aos="fade-right">
          Neden Bizi Tercih Etmelisiniz?
        </p>
        <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl" data-aos="fade-right">
        Ürolojik Sağlığınız İçin Güvenilir ve Etkin Çözümler
        </h2>
        <p className="mt-6 text-gray-700 text-[16px] xl:text-lg lg:w-11/12" data-aos="fade-right">
        Prostat hastalıklarından böbrek taşlarına, erkek sağlığından idrar yolu problemlerine kadar geniş kapsamlı tedaviler sunuyoruz. En güncel teknolojilerle, sağlığınızı güvence altına alıyoruz.
        </p>

        {/* Stats Section */}
        <div className="mx-auto mt-5 w-11/12">
          {/* Happy Clients */}
          <div className="flex items-center justify-start gap-5" data-aos="fade-right">
            <aside className="w-1/4 text-center">
              <h2 className="font-bold text-blue-600 text-[34px] lg:text-[40px]" ref={clients.ref}>{clients.count}+</h2>
              <h6 className="-mt-2 text-[16px] lg:text-lg font-semibold">Sağlığına Kavuşan Danışan</h6>
            </aside>
            <p className="text-gray-700 text-[16px] lg:text-lg">From preventive medicine to specialized treatments, we prioritize your health journey.</p>
          </div>

          {/* Years of Experience */}
          <div className="mt-10 flex items-center gap-5" data-aos="fade-right" data-aos-delay="100">
            <aside className="w-1/4 text-center">
              <h2 className="font-bold text-blue-600 text-[34px] lg:text-[40px]" ref={years.ref}>{years.count}+</h2>
              <h6 className="-mt-2 text-[16px] lg:text-lg font-semibold">Yıllık Üroloji Uzmanlığı</h6>
            </aside>
            <p className="text-gray-700 text-[16px] lg:text-lg">From preventive medicine to specialized treatments, we prioritize your health journey.</p>
          </div>
        </div>
      </div>

      {/* Right Content - Image Section */}
      <div className="relative mt-10 w-full lg:mt-0 lg:w-4/12">
        <Image src="/assets/whyus1.png" width={400} height={300} alt="Why Us" className="ml-auto w-11/12 lg:w-9/12" data-aos="fade-left" data-aos-delay="100" />
        <label htmlFor="video-check" className="cursor-pointer">
          <Image src="/assets/whyus2.png" width={300} height={200} alt="Why Us Video Placeholder" className="absolute -bottom-4 lg:-bottom-16" data-aos="fade-left" />
        </label>
      </div>
    </section>
  );
}
