import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Developers = () => {
  return (
    <>
      <div className="w-4/5 text-center text-sm font-medium md:text-2xl lg:text-3xl mx-auto my-24">
        <p>Meet the Team</p>
      </div>
      <div className="w-4/5 mx-auto my-24">
        <Swiper
          breakpoints={{
            0: {
              // width: 576,
              slidesPerView: 1,
              spaceBetween: 5,
            },
            620: {
              // width: 768,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          slidesPerView={3}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="lg:mx-1">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="lg:mx-1">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="lg:mx-1">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="lg:mx-1">
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Developers;
