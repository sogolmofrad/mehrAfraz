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
    <div className="flex my-[3rem]  gap-[1.6rem]">
      {bestTours.map((tour, i) => (
        <BestTourCard bestTour={tour} key={i} />
      ))}
    </div>
  );
}

export default BestToursHome;
