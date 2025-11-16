import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../../assets/banner/banner1.png'
import bannerimg2 from '../../assets/banner/banner2.png'
import bannerimg3 from '../../assets/banner/banner3.png'

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} number={2000} infiniteLoop={true}  showThumbs={false} >
        <div>
          <img src={bannerimg1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={bannerimg2} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={bannerimg3} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
