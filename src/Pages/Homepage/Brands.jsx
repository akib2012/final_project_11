import React from "react";
// import Swiper from "swiper";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import aamzon from '../../assets/brands/amazon.png'
import aamzon_vector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import star_pepole from '../../assets/brands/start_people.png'
import { Autoplay} from 'swiper/modules';

const brands = [aamzon, aamzon_vector, casio, moonstar, randstad, star, star_pepole]


const Brands = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
         autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
         modules={[Autoplay]}
      >
        {
            brands.map((b, index)=> <SwiperSlide key={index}><img src={b} alt="" /></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Brands;
