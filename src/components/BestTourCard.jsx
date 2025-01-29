import { useState } from "react";
import { GoArrowUpLeft } from "react-icons/go";

function BestTourCard({ bestTour }) {
  const [showDescription, setShowDescription] = useState(false);

  function toggleShowDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <div
      className="relative flex flex-col items-center "
      onMouseEnter={toggleShowDescription}
      onMouseLeave={toggleShowDescription}
    >
      <figure className="relative w-[19rem] h-[30rem] rounded-[2.4rem] text-center">
        <img
          src={bestTour.image}
          alt="Tour Image"
          className="w-full h-full rounded-[2.4rem]"
        />
        <div className="absolute inset-0 bg-linear-black rounded-[2.4rem]"></div>
        <figcaption
          className={`bestTourCaption absolute text-[2rem] font-bold text-white text-center bottom-[2rem] right-[4.5rem] transition-all duration-500 ${
            showDescription ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          {bestTour.name}
        </figcaption>
      </figure>
      <button className="absolute top-[1rem] left-[1rem] p-[1rem] rounded-full bg-white text-black text-[2rem]">
        <GoArrowUpLeft className={showDescription ? `arrowBtn` : ``} />
      </button>
      <div
        className={`bestTourCaption absolute bottom-[1rem] text-center w-[16rem] rounded-[2.4rem] bg-redSemiTransparent p-[10px] text-[1.4rem] text-white transition-all duration-500 ${
          showDescription ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h3 className="text-[2rem] font-bold">{bestTour.name}</h3>
        <p>{bestTour.description}</p>
      </div>
    </div>
  );
}

export default BestTourCard;
