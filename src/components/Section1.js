import slide1 from "./img/section1/slide1.png";
import slide2 from "./img/section1/slide2.jpg";
import slide3 from "./img/section1/slide3.jpg";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import "./css/section1.css"
function Section1() {
  return <div className="xl:mx-auto 2xl:py-5">
    <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true, backgroundColor: "#000" }}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <img src={slide1} className="h-[400px] rounded-3xl" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} className="h-[400px] rounded-3xl" alt="slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} className="h-[400px] rounded-3xl" alt="slide3" />
          </SwiperSlide>
        </Swiper>
  </div>;
  
}

export default Section1;
