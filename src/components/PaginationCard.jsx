import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
const imagesData = [
  "https://www.hopenotout.com/cdn/shop/files/57_032eccb3-09f7-4370-8a34-46cc5bb7929b_540x.jpg?v=1711345012",
  "https://www.hopenotout.com/cdn/shop/files/hope-not-out-by-shahid-afridi-eastern-men-shalwaar-kameez-men-embroidery-suit-42257368973599_540x.jpg?v=1690190994",
  "https://www.hopenotout.com/cdn/shop/products/hope-not-out-by-shahid-afridi-eastern-women-shirts-women-black-lining-long-shirt-flora-41080295162143_540x.jpg?v=1681728665",
];
function PaginationCard() {
  return (
    <div className="h-[290px] w-[363px] overflow-hidden rounded-xl">
      <Swiper
        navigation={true}
        effect="fade"
        modules={[Navigation]}
        loop={{ Infinity }}
        height={100}
        width={363}
        speed={800}
        className="mySwiper"
      >
        <div className="absolute top-3 space-x-3 px-2 right-3 z-50 ">
          <PrevButton />
          <NextButton />
        </div>
        {imagesData.map((e, i) => (
          <SwiperSlide key={i}>
            <img src={e} alt="" className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PaginationCard;
