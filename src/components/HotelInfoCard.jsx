import React from "react";
import { GoStarFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
function HotelInfoCard({ id, image, name, stars, location }) {
  return (
    <div
      key={id}
      className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-between"
    >
      <div>
        <img
          src={image}
          alt="hotel"
          className="w-full h-[29rem] object-cover rounded-lg"
        />
      </div>
      <h3 className="text-base">{name}</h3>
      <div className="flex gap-8">
        <p className="flex gap-2 text-base items-center">
          <GoStarFill />
          <span>{stars} ستاره</span>
        </p>
        <p className="flex gap-2 text-base items-center">
          <IoLocationOutline />
          <span>{location}</span>
        </p>
      </div>
    </div>
  );
}

export default HotelInfoCard;
