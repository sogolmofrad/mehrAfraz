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

  return (
    <div className="container mx-auto max-w-container">
      <div className="grid grid-cols-12 gap-grid">
        {tours.map((tour) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3"
            key={tour.id}
          >
            <TourCardHome tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToursHome;
