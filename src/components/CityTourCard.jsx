import { useState } from "react";
import { Link } from "react-router";

function CityTourCard({ tour, cityUrl = "#" }) {
  return (
    <Link
      className="relative col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center"
      to={cityUrl}
    >
      <figure className="relative w-full h-[32rem] rounded-lg text-center hover:shadow-normal">
        <img
          src={tour.image}
          alt="Tour Image"
          className="w-full h-full rounded-lg object-cover"
        />

        {/* <div className="absolute inset-0 bg-linear-black rounded-lg"></div> */}
        <figcaption className="bestTourCaption absolute left-1/2 -translate-x-1/2 bottom-8 text-base font-bold text-white text-center py-medium px-2 w-[20rem] rounded-xl   bg-greyTransparent backdrop-blur-[20px] ">
          {tour.name}
        </figcaption>
      </figure>
    </Link>
  );
}

export default CityTourCard;
