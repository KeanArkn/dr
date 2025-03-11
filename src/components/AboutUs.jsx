"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    
    <section className="container relative mt-40 flex flex-col items-center gap-16 lg:mt-0 lg:h-screen lg:flex-row">
      {/* Left Side - Image */}
      <div className="relative z-0 w-full lg:w-7/12 lg:mt-[-120px]">
        <div
          className="absolute -left-14 md:left-10 lg:-left-14 bottom-0 top-0 z-[-1] m-auto h-[140%] w-[189px] bg-blue-600"
          data-aos="fade-down"
        ></div>
        <div className="overflow-hidden flex items-center justify-center">
          <Image
            src="/assets/dr.png"
            width={500}
            height={500}
            alt="about-us"
            className="rounded-md w-[500] lg:w-[650]"
            data-aos="fade-right"
            data-aos-delay="500"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="relative z-30 w-full lg:w-5/12 mt-5 lg:mt-0 px-4">
        <p className="font-semibold text-blue-600 text-center text-xl lg:hidden" data-aos="fade-left">
          Hakkımda
        </p>
        <h2 className="font-semibold text-center text-2xl lg:text-4xl mt-4 text-blue-600" data-aos="fade-left">
          Dr. Atakan Eren - Üroloji Uzmanı
        </h2>
        <p className="mt-4 text-gray-600 italic text-lg" data-aos="fade-left">
          1991 yılında <b>Cerrahpaşa Tıp Fakültesi</b>’nde başladığım tıp eğitimini 1997 yılında bitirmiş olup 1997-2002 yılları arasında <b>Okmeydanı Eğitim ve Araştırma Hastanesi Üroloji Kliniği</b>'nde uzmanlık eğitimimi başarıyla tamamladım.
        </p>
        <p className="mt-2 text-gray-600 italic text-lg" data-aos="fade-left">
          2006-2014 yılları arasında <b>Muratlı Devlet Hastanesi'nde Başhekim ve Üroloji Uzmanı</b> olarak görev aldım, ardından 2014-2016 yılları arasında <b>Tekirdağ Devlet Hastanesi'nde Başhekim</b> olarak çalıştım. 2017-2018 yılları arasında ise <b>Tekirdağ Sağlık Müdürlüğü Kamu Hastaneleri Başkanı</b> olarak hizmet verdim.
        </p>
        <p className="mt-2 text-gray-600 italic text-lg" data-aos="fade-left">
          2018-2023 yılları arasında <b>Tekirdağ Şehir Hastanesi</b>’nde görev yaptıktan sonra, Mart 2023 itibarıyla emekli olarak kendi özel muayenehanem olan <b>DR. Atakan Eren Üroloji Kliniği</b>nde hasta kabulüne başladım. Ayrıca <b>Bilim Üniversitesi Florence Nightingale'de öğretim görevlisi</b> olarak akademik çalışmalarına devam etmektedir.
        </p>
        <p className="mt-2 text-gray-600 italic text-lg" data-aos="fade-left">
          Dr. Atakan Eren Üroloji Kliniği, <b>uluslararası sağlık turizmi sertifikasına sahiptir</b>, bu da kliğimizin <b>uluslararası sağlık hizmetleri alanında yetkinliğini ve akreditasyonunu</b> kanıtlamaktadır. 
        </p>

        
      </div>
    </section>
  
  );
}
