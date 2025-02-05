import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function SideHotelCity({ cityName, cityImage }) {
  return (
    <figure className="relative h-[38rem]">
      <figcaption className="absolute inset-0 flex flex-col  justify-center items-center text-white z-10 gap-[1rem]">
        <p className="text-[1.4rem]">مشاهده همه هتل های</p>
        <h2 className="text-[1.8rem] font-bold">{cityName}</h2>
        <FaArrowUpRightFromSquare className="text-[2.4rem]" />
      </figcaption>
      <img
        src={cityImage}
        alt="hotel"
        className="w-full h-full rounded-[3.2rem]"
      />
      <div className="absolute inset-0 bg-linear-red rounded-[2.4rem]"></div>
    </figure>
  );
}

export default SideHotelCity;
