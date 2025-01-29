import { FaArrowLeftLong } from "react-icons/fa6";

function TourCardHome({ tour }) {
  return (
    <div className="w-[29rem] bg-white p-[1.4rem]  rounded-[3.2rem]">
      <figure className="relative h-[23rem]">
        <img
          src={tour.image}
          alt="tour Image"
          className="w-full h-full rounded-[2.4rem]"
        />
        <div className="absolute inset-0 bg-linear-black rounded-[2.4rem]"></div>
        <figcaption className="absolute bottom-[2rem] right-[1.5rem]">
          <h3 className="text-[1.8rem] text-white">{tour.name}</h3>
          <p className="text-[1.4rem] text-white">{tour.company}</p>
        </figcaption>
      </figure>
      <p className="text-[1.6rem] font-bold mt-[2rem]">
        شروع قیمت از {tour.basicPrice} ریال
      </p>
      <div className="flex justify-between  mt-[2rem]">
        <p className="text-[1.6rem] text-grey">
          {tour.duration} شب و {tour.duration + 1} روز
        </p>
        <button className="text-redPrimary  text-[1.4rem] flex px-[1rem] py-[5px] rounded-[2.4rem] hover:bg-pinkExtraLight hover:text-redSecondary active:border-2 active:border-pinkLight active:text-redPrimar active:bg-white">
          <span>تاریخ های تور</span>
          <span className="mr-[1rem]">
            <FaArrowLeftLong />
          </span>
        </button>
      </div>
    </div>
  );
}

export default TourCardHome;
