// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//

// import required modules
import { Pagination } from "swiper/modules";
import ReserveHomeBox from "./ReserveHomeBox";

function HomeSliderSection() {
  return (
    <div className="max-w-container mx-auto flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-container">
        <div className="mt-20 grid grid-cols-12 gap-grid">
          <div className="col-span-12">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <img
                    className="w-full lg:h-[60rem] bg-black rounded-lg opacity-90"
                    src="/images/pic-1.jpg"
                    alt="Travel"
                  />
                  <h2 className="text-black absolute top-[15%] right-[5%] text-2xl lg:text-[4.8rem] w-[50%] ">
                    لورم ایسپوم، لورم ایپسوم متن ساختگی با تولید سادگی!
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full lg:h-[60rem]  rounded-lg"
                  src="/images/pic-1.jpg"
                  alt="Travel"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full lg:h-[60rem] rounded-lg"
                  src="/images/pic-1.jpg"
                  alt="Travel"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full lg:h-[60rem] rounded-lg"
                  src="/images/pic-1.jpg"
                  alt="Travel"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full lg:h-[60rem] rounded-lg"
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
