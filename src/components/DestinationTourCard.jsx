import { useState } from "react";
import { Link } from "react-router";

function DestinationTourCard({ tour, cityUrl = "#" }) {
  return (
    <Link
      className="relative col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center"
      to={cityUrl}
    >
      <figure className="relative w-full h-[30rem] rounded-[2.4rem] text-center">
        <img
          src={tour.image}
          alt="Tour Image"
          className="w-full h-full rounded-[2.4rem] object-cover"
        />

        <div className="absolute inset-0 bg-linear-black rounded-[2.4rem]"></div>
        <figcaption className="bestTourCaption absolute left-1/2 -translate-x-1/2 bottom-[2rem] text-[2rem] font-bold text-white text-center py-[2.4rem] px-[5rem] rounded-[3.2rem] w-[80%]  bg-greyTransparent backdrop-blur-[30px] ">
          {tour.name}
        </figcaption>
      </figure>
    </Link>
  );
}

export default DestinationTourCard;
