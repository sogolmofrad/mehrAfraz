import { useEffect, useState } from "react";
import BestTourCard from "./BestTourCard";

function BestToursHome() {
  const [bestTours, setBestTours] = useState([]);
  useEffect(function () {
    async function fetchBestTours() {
      try {
        const res = await fetch("/data/best-tours.json");
        const tourData = await res.json();
        setBestTours(tourData);
      } catch (error) {
        console.log("there was an error" + error);
      }
    }
    fetchBestTours();
  }, []);
  return (
    <div className="container mx-auto my-[5rem] max-w-container">
      <div className="grid grid-cols-12 gap-grid">
        {bestTours.map((tour, i) => (
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <BestTourCard bestTour={tour} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestToursHome;
