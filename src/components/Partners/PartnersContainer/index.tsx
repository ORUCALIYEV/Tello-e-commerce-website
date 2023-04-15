import React from "react";
import StylePartnersContainer from "./style";
import Container from "../../UI/Container";
import toshiba from "../../../assets/images/partner-toshiba.svg";
import philips from "../../../assets/images/partner-philips.svg";
import hp from "../../../assets/images/partner-hp.svg";
import electrolux from "../../../assets/images/partner-electrolux.svg";
import gorenje from "../../../assets/images/partner-gorenje.svg";
import bosch from "../../../assets/images/partner-bosch.svg";
import acer from "../../../assets/images/partner-acer.svg";
import PartnersItem from "../PartnersItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const PartnersContainer = () => {
  return (
    <StylePartnersContainer>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PartnersItem img={toshiba} />
          </SwiperSlide>
          <SwiperSlide>
            <PartnersItem img={philips} />
          </SwiperSlide>
          <SwiperSlide>
            <PartnersItem img={hp} />
          </SwiperSlide>
          <SwiperSlide>
            <PartnersItem img={electrolux} />
          </SwiperSlide>
          <SwiperSlide>
            <PartnersItem img={gorenje} />
          </SwiperSlide>
          <SwiperSlide>
            <PartnersItem img={bosch} />
          </SwiperSlide>
          <SwiperSlide>
            <PartnersItem img={acer} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </StylePartnersContainer>
  );
};

export default PartnersContainer;
