import { useState } from "react";
import { Link } from "react-router";

function DestinationTourCard({ tour, cityUrl = "#" }) {
  return (
    <Link
      className="relative col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center"
      to={cityUrl}
    >
      <figure className="relative w-full h-[30rem] rounded-lg text-center">
        <img
          src={tour.image}
          alt="Tour Image"
          className="w-full h-full rounded-lg object-cover"
        />

        <div className="absolute inset-0 bg-linear-black rounded-lg"></div>
        <figcaption className="bestTourCaption absolute left-1/2 -translate-x-1/2 bottom-8 text-xl font-bold text-white text-center py-medium px-2 rounded-xl w-[80%]  bg-greyTransparent backdrop-blur-[30px] ">
          {tour.name}
        </figcaption>
      </figure>
    </Link>
  );
}

export default DestinationTourCard;
