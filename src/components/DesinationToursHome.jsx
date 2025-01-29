import { useEffect, useState } from "react";
import DestinationTourCard from "./DestinationTourCard";

function DesinationToursHome({ containerRef }) {
  const [destinationTours, setDestinationTours] = useState([]);
  useEffect(function () {
    async function fetchTours() {
      try {
        const res = await fetch("/data/destination-tours.json");
        const tourData = await res.json();
        setDestinationTours(tourData);
      } catch (error) {
        console.log("there was an error" + error);
      }
    }
    fetchTours();
  }, []);
  return (
    <div
      className="tourContainer flex my-[3rem]  gap-[1.6rem]  overflow-x-auto"
      ref={containerRef}
    >
      {destinationTours.map((tour, i) => (
        <DestinationTourCard tour={tour} key={i} />
      ))}
    </div>
  );
}

export default DesinationToursHome;
