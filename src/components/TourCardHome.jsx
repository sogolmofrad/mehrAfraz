import { FaArrowLeftLong } from "react-icons/fa6";

function TourCardHome({ tour }) {
  return (
    <div className="bg-white p-small  rounded-xl">
      <figure className="relative h-[23rem]">
        <img
          src={tour.image}
          alt="tour Image"
          className="w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-linear-black rounded-lg"></div>
        <figcaption className="absolute bottom-8 right-6">
          <h3 className="text-lg text-white">{tour.name}</h3>
          <p className="text-sm text-white">{tour.company}</p>
        </figcaption>
      </figure>
      <p className="text-base font-bold mt-8">
        شروع قیمت از {tour.basicPrice} ریال
      </p>
      <div className="flex justify-between  mt-8">
        <p className="text-base text-grey">
          {tour.duration} شب و {tour.duration + 1} روز
        </p>
        <button className="text-mainPrimary  text-sm flex px-4 py-2 rounded-lg hover:bg-pinkExtraLight hover:text-mainSecondary active:border-2 active:border-pinkLight active:text-redPrimar active:bg-white">
          <span>تاریخ های تور</span>
          <span className="mr-4">
            <FaArrowLeftLong />
          </span>
        </button>
      </div>
    </div>
  );
}

export default TourCardHome;
