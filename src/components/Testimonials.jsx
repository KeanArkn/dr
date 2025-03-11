"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel..",
      name: "Dohn Joenathan",
      role: "School Teacher",
      image: "/assets/avatar5.png",    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel..",
      name: "John Davis",
      role: "School Teacher",
      image: "/assets/avatar5.png",    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel..",
      name: "Kaan Joenathan",
        role: "School Teacher",
        image: "/assets/avatar5.png",      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel..",
      name: "Kaan Davis",
        role: "School Teacher",
        image: "/assets/avatar5.png",
      },
      {
        id: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel..",
      name: "Kean Joenathan",
        role: "School Teacher",
        image: "/assets/avatar5.png",
      },
      {
        id: 6,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel..",
      name: "Kean Davis",
        role: "School Teacher",
        image: "/assets/avatar5.png",
      },
  ];

  return (
    <section className="container relative mt-10 mb-14 text-center bg-white">
      <p
        className="font-poppins text-xl font-medium text-blue-600"
        data-aos="fade-right"
      >
        Danışan Yorumları
      </p>

      <h2 className="mb-6 font-bold text-3xl lg:text-4xl xl:text-5xl text-black" data-aos="fade-right">
        Sizlerin Gözünden Kliniğimiz
      </h2>

      <p className="mx-auto mb-14 text-gray-700 lg:w-5/6" data-aos="fade-right">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius laoreet elit, quis tristique purus dignissim ut. Integer libero urna, venenatis ut libero in, aliquam consequat justo. Vestibulum nunc mauris, ultricies a velit a, viverra aliquam urna. Donec at eleifend felis, quis scelerisque magna. Integer luctus dui urna, sed egestas nulla blandit eget. Mauris vitae ex a purus pellentesque tempor. Morbi eget erat ac nisi vulputate bibendum. Proin et orci at purus hendrerit posuere. Mauris consectetur tempor justo sit amet facilisis. Cras dignissim efficitur nunc, sed dictum metus laoreet vel.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation = {false}
        breakpoints={{
            1024: { slidesPerView: 2 }, // Large screens: 2 slides
          }}
        pagination={{ clickable: true }}
        className="p-4 lg:p-10 lg:pl-4 w-10/12"
      >
        {testimonials.map((testimonial) => (
            
          <SwiperSlide key={testimonial.id} className="p-4 mt-0 mb-6 text-left">
            <div className="flex flex-col items-center justify-center gap-4 px-8 py-6 shadow-xl">
              <div className="flex items-center justify-center w-full">
                <p>{testimonial.text}</p>
              </div>
              
              <div className="flex flex-row items-center w-full ">
                <div className="mt-6 flex w-full items-center justify-between gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={72}
                    height={72}
                    className="h-14 w-14 rounded-full"
                  />
                  <aside>
                    <h5 className="font-poppins font-bold">{testimonial.name}</h5>
                    
                    <div className="flex gap-2 text-blue-600">
                      {[...Array(4)].map((_, index) => (
                        <StarSolid key={index} className="w-6 h-6" />
                      ))}
                      <StarOutline className="w-6 h-6" />
                    </div>
                  </aside>
                </div>

                
              </div>
            </div>
            
          </SwiperSlide>
        
        ))}
      </Swiper>
    </section>
  );
}
