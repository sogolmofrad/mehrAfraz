import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function SideHotelCity({ cityName, cityImage }) {
  return (
    <figure className="relative h-[38rem]">
      <figcaption className="absolute inset-0 flex flex-col  justify-center items-center text-white z-10 gap-4">
        <p className="text-sm">مشاهده همه هتل های</p>
        <h2 className="text-lg font-bold">{cityName}</h2>
        <FaArrowUpRightFromSquare className="text-2xl" />
      </figcaption>
      <img src={cityImage} alt="hotel" className="w-full h-full rounded-xl" />
      <div className="absolute inset-0 bg-linear-red rounded-lg"></div>
    </figure>
  );
}

export default SideHotelCity;
