"use client";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img5 from "../../../assets/images/banner1.webp";
import img6 from "../../../assets/images/banner2.webp";
import img7 from "../../../assets/images/banner3.webp";
import img8 from "../../../assets/images/banner4.webp";
import img1 from "../../../assets/images/banner5.png";
import img2 from "../../../assets/images/banner6.png";
import img3 from "../../../assets/images/banner7.png";
import img4 from "../../../assets/images/banner8.png";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="max-w-screen-2xl rounded-xl h-[80dvh] mt-4 mx-auto -z-10"
    >
      {[img8, img4, img1, img2, img3, img5, img6, img7].map((img, index) => (
        <SwiperSlide
          key={index}
          className=" flex justify-center  items-center  "
        >
          <Image
            src={img}
            alt={`Banner ${index + 1}`}
            className=" object-fit w-full h-full drop-shadow-sm "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
