// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import "swiper/css/pagination";

//

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ReserveHomeBox from "./ReserveHomeBox";

function HomeSliderSection() {
  return (
    <div className="max-w-container mx-auto flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-container">
        <div className="mt-20 grid grid-cols-12 gap-grid">
          <div className="col-span-12">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3500,
              }}
            >
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <img
                    className="w-full lg:h-[45rem]  rounded-lg brightness-[0.6]"
                    src="/images/pic-1.jpg"
                    alt="Travel"
                  />
                  <h2 className="text-white font-normal centerh top-[15%] leading-loose  text-2xl lg:text-[3.6rem] text-center w-[30%] ">
                    لورم ایسپوم، لورم ایپسوم متن ساختگی با تولید{" "}
                    <span className="font-bold">سادگی</span>!
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <img
                    className="w-full lg:h-[45rem]  rounded-lg brightness-[0.6]"
                    src="/images/pic-1.jpg"
                    alt="Travel"
                  />
                  <h2 className="text-white font-normal centerh top-[15%] leading-loose  text-2xl lg:text-[3.6rem] text-center w-[30%] ">
                    لورم ایسپوم، لورم ایپسوم متن ساختگی با تولید{" "}
                    <span className="font-bold">بهترین</span>!
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full lg:h-[45rem] rounded-lg brightness-[0.6"
                  src="/images/pic-1.jpg"
                  alt="Travel"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full lg:h-[45rem] rounded-lg brightness-[0.6"
                  src="/images/pic-1.jpg"
                  alt="Travel"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full lg:h-[45rem] rounded-lg brightness-[0.6"
                  src="/images/pic-1.jpg"
                  alt="Travel"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <ReserveHomeBox />
    </div>
  );
}

export default HomeSliderSection;
