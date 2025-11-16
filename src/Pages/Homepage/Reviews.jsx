import React, { useEffect } from "react";
import { useState } from "react";
// import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
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
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
