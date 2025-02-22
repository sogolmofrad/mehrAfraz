import { useState } from "react";

import ParvazFormHome from "./ParvazFormHome";
import TourFormHome from "./TourFormHome";
import HotelSearchFormHome from "./HotelSearchFormHome";

function SearchBoxHome() {
  const [activeBtn, setActiveBtn] = useState(1);

  function handleBtnClick(btnId) {
    setActiveBtn(btnId);
  }

  return (
    <div className="flex flex-col -mt-24 z-10 bg-white rounded-lg py-medium px-base mx-auto items-start max-w-[1150px] w-full">
      <div className="reserveButtonGp flex self-center bg-gray_1 py-4 px-8 rounded-[8rem]">
        <button
          className={`${
            activeBtn === 1
              ? "reserveGpBtn bg-mainPrimary text-white"
              : "reserveGpBtn"
          }`}
          onClick={() => handleBtnClick(1)}
        >
          پرواز یک طرفه
        </button>
        <button
          className={`${
            activeBtn === 2
              ? "reserveGpBtn bg-mainPrimary text-white"
              : "reserveGpBtn"
          }`}
          onClick={() => handleBtnClick(2)}
        >
          پرواز دوطرفه
        </button>
        <button
          className={`${
            activeBtn === 3
              ? "reserveGpBtn bg-mainPrimary text-white"
              : "reserveGpBtn"
          }`}
          onClick={() => handleBtnClick(3)}
        >
          رزرو هتل
        </button>
        <button
          className={`${
            activeBtn === 4
              ? "reserveGpBtn bg-mainPrimary text-white"
              : "reserveGpBtn"
          }`}
          onClick={() => handleBtnClick(4)}
        >
          رزرو تور
        </button>
      </div>

      {activeBtn === 1 && <ParvazFormHome oneWay={true} />}
      {activeBtn === 2 && <ParvazFormHome oneWay={false} />}
      {activeBtn === 3 && <HotelSearchFormHome />}
      {activeBtn === 4 && <TourFormHome />}
    </div>
  );
}

export default SearchBoxHome;
