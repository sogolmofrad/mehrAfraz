import { useState } from "react";
import ParvazReserveHomeFilter from "./ParvazReserveHomeFilter";
import ParvazFormHome from "./ParvazFormHome";
import HotelFromHome from "./HotelFormHome";
import TourFormHome from "./TourFormHome";

function ReserveHomeBox() {
  const [activeBtn, setActiveBtn] = useState(1);

  function handleBtnClick(btnId) {
    setActiveBtn(btnId);
  }

  return (
    <div className="flex flex-col -mt-[2rem] z-10 w-[95%] bg-white rounded-[2.4rem] p-[3rem] items-start">
      <div className="reserveButtonGp flex self-center bg-greyLight py-[1rem] px-[2rem] rounded-[8rem]">
        <button
          className={`${
            activeBtn === 1
              ? "reserveGpBtn bg-redPrimary text-white"
              : "reserveGpBtn"
          }`}
          onClick={() => handleBtnClick(1)}
        >
          بلیط پرواز
        </button>
        <button
          className={`${
            activeBtn === 2
              ? "reserveGpBtn bg-redPrimary text-white"
              : "reserveGpBtn"
          }`}
          onClick={() => handleBtnClick(2)}
        >
          رزرو هتل
        </button>
        <button
          className={`${
            activeBtn === 3
              ? "reserveGpBtn bg-redPrimary text-white"
              : "reserveGpBtn"
          }`}
          onClick={() => handleBtnClick(3)}
        >
          رزرو تور
        </button>
      </div>
      {activeBtn === 1 && <ParvazReserveHomeFilter />}
      {activeBtn === 1 && <ParvazFormHome />}
      {activeBtn === 2 && <HotelFromHome />}
      {activeBtn === 3 && <TourFormHome />}
    </div>
  );
}

export default ReserveHomeBox;
