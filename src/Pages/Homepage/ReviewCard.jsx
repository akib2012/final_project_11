import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
// import { SwiperSlide } from "swiper/react";

const ReviewCard = ({ r }) => {
  const { user_photoURL, userName, review, pick_up_email } = r;
  return (
  
        <div className="bg-gray-200 p-6 rounded-2xl shadow-sm max-w-sm border">
      <div className="text-teal-300 text-3xl">
        <RiDoubleQuotesL />
      </div>

      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        {review}
      </p>

      <div className="border-t my-4"></div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-teal-900"><img className="w-8 h-8 rounded-full" src={user_photoURL} alt="" /></div>

        <div>
          <h4 className="text-gray-900 font-semibold text-sm"> {userName}</h4>
          <p className="text-gray-500 text-xs">{pick_up_email}</p>
        </div>
      </div>
    </div>
    // </SwiperSlide>
  );
};

export default ReviewCard;
