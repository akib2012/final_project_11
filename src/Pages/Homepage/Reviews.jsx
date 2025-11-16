import React, { useEffect } from "react";
import { useState } from "react";
// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [Review, setReview] = useState([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold text-center my-6">
        <h4>reviews from clients</h4>
      </div>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.50,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        //  modules={[Autoplay]}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
            {Review.map(r => <SwiperSlide> <ReviewCard r={r} key={r.id}></ReviewCard></SwiperSlide>)}
        </div>
        
      </Swiper>
    </div>
    // </div>
  );
};

export default Reviews;
