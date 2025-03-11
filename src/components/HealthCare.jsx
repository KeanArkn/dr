"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HandThumbUpIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export default function HealthCare() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="mt-14 lg:mt-36 bg-cover bg-center bg-no-repeat relative w-full min-h-[650px] lg:min-h-[500px] flex items-center justify-center" style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className="bg-blue-600 opacity-75 py-16 text-white absolute left-0 bottom-0 top-0 right-0" id="passionate">
      </div>
      <div className="container">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
            {/* Left Side - Text Content */}
            <div className="w-full px-4 py-3 lg:w-7/12">
              <p data-aos="fade-right" className="text-lg lg:text-2xl text-white">ATAKAN EREN KLİNİĞİ</p>
              <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-white" data-aos="fade-right" data-aos-delay="100">
                Welcome to Compassionate Healthcare
              </h2>
              <p className="mt-7 text-lg text-gray-300" data-aos="fade-right" data-aos-delay="200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna.",
      
              </p>
            </div>

            {/* Right Side - Features */}
            <div className=" bg-white opacity-100 m-1 p-3 lg:max-w-7/12 xl:max-w-1/2 xl:p-4" data-aos="fade-in">
              {/* Feature 1 */}
              <div className="flex items-center justify-start gap-4 xl:gap-5 xl:my-4 mx-auto" data-aos="fade-left" data-aos-delay="200">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <HandThumbUpIcon className="h-10 w-10 text-white" />
                </div>
                <aside className="text-black">
                  <h5 className="font-bold">Patient-Centered Experience</h5>
                  <p className="mt-2 text-gray-700">Personalized care ensuring holistic patient well-being</p>
                </aside>
              </div>

              {/* Feature 2 */}
              <div className="mt-6 mx-auto flex items-center justify-start gap-4 xl:gap-5 xl:mb-4" data-aos="fade-left" data-aos-delay="300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <UserGroupIcon className="h-10 w-10 text-white" />
                </div>
                <aside className="text-black">
                  <h5 className="font-bold">Integrated Healthcare Experience</h5>
                  <p className="mt-2 text-gray-700">Seamless, coordinated care across multiple health services.</p>
                </aside>
              </div>
            </div>
          </div>
      </div>
      
    </section>
  );
}
