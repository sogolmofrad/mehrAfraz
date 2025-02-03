import SectionHeaders from "./SectionHeaders";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoStarFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import "swiper/css";

function SpecialHotelsSectionHome({ hotel }) {
  return (
    <section className="tourHome section mt-[10rem] px-[10rem] max-w-[1400px] mx-auto">
      <SectionHeaders
        title={`هتل های ویژه ${hotel.name}`}
        description="با بزرگترین مقصدهای گردشگری جهان و آداب و رسوم و فرهنگ هایش آشنا شوید"
      ></SectionHeaders>
      <div className="container mx-auto mt-[5rem] max-w-[1200px]">
        <div className="grid grid-cols-12 gap-[3rem]">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <figure className="relative h-[38rem]">
            <figcaption className="absolute inset-0 flex flex-col  justify-center items-center text-white z-10 gap-[1rem]">
              <p className="text-[1.4rem]">مشاهده همه هتل های</p>
              <h2 className="text-[1.8rem] font-bold">{hotel.name}</h2>
              <FaArrowUpRightFromSquare className="text-[2.4rem]" />
            </figcaption>
            <img
              src={hotel.primaryImage}
              alt="hotel"   
              className="w-full h-full rounded-[3.2rem]"
            />
            <div className="absolute inset-0 bg-linear-red rounded-[2.4rem]"></div>
          </figure>
          </div>
          {hotel.hotels.map(hotel => <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-between">
            <div>
              <Swiper className="mySwiper">
                <SwiperSlide><img src={hotel.images[0]} alt="hotel"/></SwiperSlide>
                <SwiperSlide><img src={hotel.images[1]} alt="hotel"/></SwiperSlide>
                <SwiperSlide><img src={hotel.images[2]} alt="hotel"/></SwiperSlide>
        
              </Swiper>
              </div>
              <h3 className="text-[1.8rem]">{hotel.hotelName}</h3>
              <div className="flex gap-[2rem]">
                <p className="flex gap-[5px] text-[1.6rem] items-center">
                <GoStarFill />
                <span>{hotel.stars} ستاره</span>
                </p>
                <p className="flex gap-[5px] text-[1.6rem] items-center">
                <IoLocationOutline />
                <span>{hotel.location}</span>
                </p>
              
            </div>
          </div>)}
 
        </div>
      </div>
    </section>
  );
}

export default SpecialHotelsSectionHome;
