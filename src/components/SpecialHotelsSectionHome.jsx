import SectionHeaders from "./utils/SectionHeaders";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SideHotelCity from "./SideHotelCity";
import HotelInfoCard from "./HotelInfoCard";

function SpecialHotelsSectionHome({ hotel }) {
  return (
    <section className="tourHome section max-w-container mx-auto">
      <SectionHeaders
        title={`هتل های ویژه ${hotel.name}`}
        description="با بزرگترین مقصدهای گردشگری جهان و آداب و رسوم و فرهنگ هایش آشنا شوید"
      ></SectionHeaders>
      <div className="container mx-auto max-w-container">
        <div className="grid grid-cols-12 gap-grid">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <SideHotelCity
              cityName={hotel.name}
              cityImage={hotel.primaryImage}
            />
          </div>
          {hotel.hotels.map((hotelItem) => (
            <HotelInfoCard
              key={hotelItem.id}
              name={hotelItem.hotelName}
              image={hotelItem.image}
              starts={hotelItem.stars}
              location={hotelItem.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialHotelsSectionHome;
