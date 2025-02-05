import { useEffect, useState } from "react";
import TourCardHome from "./TourCardHome";

function ToursHome() {
  const [tours, setTours] = useState([]);
  useEffect(function () {
    async function fetchTours() {
      const toursRes = await fetch("/data/tours-simple.json");
      const toursData = await toursRes.json();
      setTours(toursData);
    }
    fetchTours();
  }, []);
  console.log(tours);
  return (
    <div className="container mx-auto max-w-container">
      <div className="grid grid-cols-12 gap-grid">
        {tours.map((tour, i) => (
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <TourCardHome key={i} tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToursHome;
