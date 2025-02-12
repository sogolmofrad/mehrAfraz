import { GoArrowUpLeft } from "react-icons/go";
import { Link } from "react-router";

function BestTourCard({ bestTour }) {
  return (
    <Link to={bestTour.href}>
      <div className="relative col-span-4 lg:col-span-2 flex flex-col items-center ">
        <figure className="relative w-full h-[30rem] rounded-lg text-center">
          <img
            src={bestTour.image}
            alt="Tour Image"
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 bg-linear-black rounded-lg"></div>
          <figcaption className="bestTourCaption absolute left-1/2 -translate-x-1/2 bottom-8 text-xl font-bold text-white text-center ">
            {bestTour.name}
          </figcaption>
        </figure>
      </div>
    </Link>
  );
}

export default BestTourCard;
