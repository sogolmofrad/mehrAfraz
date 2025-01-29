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
    <div className="grid grid-cols-4 my-[3rem]  gap-[2.4rem]">
      {tours.map((tour, i) => (
        <TourCardHome key={i} tour={tour} />
      ))}
    </div>
  );
}

export default ToursHome;
