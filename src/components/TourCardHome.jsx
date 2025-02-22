import { Link } from "react-router";
import { HiArrowLongLeft } from "react-icons/hi2";
function TourCardHome({ tour }) {
  return (
    <Link to={tour.url} className="tourCard">
      <div className="relative  rounded-xl h-[30rem]">
        <figure className=" h-full object-contain">
          <img
            src={tour.image}
            alt="tour Image"
            className="w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 bg-linear-black rounded-lg"></div>
        </figure>
        <div className="h-full w-full absolute inset-0 bg-transparent p-base flex flex-col justify-end">
          <div className="text-white flex text-lg font-bold justify-between mb-8 items-center">
            <span>{tour.origin}</span>
            <span className="relative">
              <img src="/images/line.png" />
              <figure className="centerhv w-fit bg-white rounded-full p-3">
                <img
                  src={tour.airline.image}
                  alt="airline"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </figure>
            </span>
            <span>{tour.arrival}</span>
          </div>
          <div className="bg-white p-xs rounded-lg h-fit ">
            <div>
              <span className="text-sm text-gray_10 font-medium">
                {tour.date}
              </span>
              <span>-</span>
              <span className="text-sx text-gray_6">
                {tour.duration} شب و {tour.duration + 1} روز
              </span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray_10 ">
                شروع از {tour.basicPrice} ریال
              </p>
              <button className="text-mainPrimary  text-xl flex p-4  rounded-xl hover:bg-mainPrimary hover:text-white  text-center">
                <span className="text-center">
                  <HiArrowLongLeft />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TourCardHome;
