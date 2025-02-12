import { useReducer, useState } from "react";
import { MdFlight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
const initialState = {
  origin: "",
  hotel: "",
  arrivalDate: null,
  leaveDate: null,
  passengerNumber: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setOrigin":
      return { ...state, origin: action.payload };
    case "setHotel":
      return { ...state, hotel: action.payload };
    case "setArrivalDate":
      return { ...state, arrivalDate: action.payload };
    case "setLeaveDate":
      return { ...state, leaveDate: action.payload };
    default:
      return { ...state };
  }
}
function HotelFromHome() {
  const [{ origin, hotel, arrivalDate, leaveDate }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [focusState, setFocusState] = useState({
    from: false,
    to: false,
    date: false,
    passengerNumber: false,
  });

  const handleFocus = (inputName) => {
    setFocusState((prevState) => ({
      ...prevState,
      [inputName]: true,
    }));
  };

  const handleBlur = (inputName) => {
    setFocusState((prevState) => ({
      ...prevState,
      [inputName]: false,
    }));
  };

  //handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      origin,
      hotel,
      arrivalDate,
      leaveDate,
    };
    console.log(formData);
  }

  return (
    <div className="mt-20">
      <form className="form flex" onSubmit={handleSubmit}>
        <div className="inputGp flex items-center gap-4">
          <div className=" bg-greyLight py-6 px-2 rounded-lg">
            <MdFlight className="size-medium" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="from" className="text-xl font-bold">
              مبدا
            </label>
            <input
              name="from"
              type="text"
              value={origin}
              onChange={(e) =>
                dispatch({ type: "setOrigin", payload: e.target.value })
              }
              placeholder={focusState.from ? " " : "مبدا خود را انتخاب کنید"}
              className="text-sm w-[22rem]"
              onFocus={() => handleFocus("from")}
              onBlur={() => handleBlur("from")}
            />
          </div>
        </div>

        <div className="inputGp flex items-center gap-4">
          <div className=" bg-greyLight py-6 px-2 rounded-lg">
            <IoLocationOutline className="size-medium" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to" className="text-xl font-bold">
              نام شهر/هتل
            </label>
            <input
              name="to"
              type="text"
              value={hotel}
              onChange={(e) =>
                dispatch({
                  type: "setHotel",
                  payload: e.target.value,
                })
              }
              placeholder={focusState.to ? " " : "مقصد خود را انتخاب کنید"}
              className="text-sm w-[22rem]"
              onFocus={() => handleFocus("to")}
              onBlur={() => handleBlur("to")}
            />
          </div>
        </div>

        <div className="inputGp flex items-center gap-4">
          <div className=" bg-greyLight py-6 px-2 rounded-lg">
            <SlCalender className="size-medium" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-xl font-bold">
              تاریخ رفت
            </label>
            <input
              name="date"
              type="text"
              placeholder={
                focusState.date ? " " : "تاریخ رفت خود را انتخاب کنید"
              }
              className="text-sm w-[22rem]"
              onFocus={() => handleFocus("date")}
              onBlur={() => handleBlur("date")}
            />
          </div>
        </div>
        <div className="inputGp flex items-center gap-4">
          <div className=" bg-greyLight py-6 px-2 rounded-lg">
            <SlCalender className="size-medium" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-lg font-bold">
              تاریخ برگشت
            </label>
            <input
              name="date"
              type="text"
              placeholder={
                focusState.date ? " " : "تاریخ برگشت خود را انتخاب کنید"
              }
              className="text-sm w-[22rem]"
              onFocus={() => handleFocus("date")}
              onBlur={() => handleBlur("date")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-mainPrimary p-4 text-2xl text-white rounded-xl hover:bg-mainSecondary"
        >
          <CiSearch />
        </button>
      </form>
    </div>
  );
}

export default HotelFromHome;
