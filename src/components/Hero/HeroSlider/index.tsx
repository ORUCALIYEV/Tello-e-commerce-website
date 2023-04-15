import React from "react";
import HeroSlide from "../HeroSlide";
import StyleHeroSlider from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <StyleHeroSlider>
      <div className="overlay"></div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide />
        </SwiperSlide>
      </Swiper>
    </StyleHeroSlider>
  );
};

export default HeroSlider;
