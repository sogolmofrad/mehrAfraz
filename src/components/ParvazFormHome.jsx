import { useReducer, useState } from "react";
import { MdFlight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const initialState = {
  origin: "",
  destination: "",
  departureTime: null,
  arrivalTime: null,
  passengerNumber: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setOrigin":
      return { ...state, origin: action.payload };
    case "setDestination":
      return { ...state, destination: action.payload };
    case "setdepartureTime":
      return { ...state, departureTime: action.payload };
    case "setArrivalTime":
      return { ...state, arrivalTime: action.payload };
    case "setPassengerNumber":
      return { ...state, passengerNumber: action.payload };
    default:
      return { ...state };
  }
}
function ParvazFormHome() {
  const [
    { origin, destination, departureTime, arrivalTime, passengerNumber },
    dispatch,
  ] = useReducer(reducer, initialState);
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
      destination,
      departureTime,
      arrivalTime,
      passengerNumber,
    };
    console.log(formData);
  }

  return (
    <div className="mt-8">
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
            <MdFlight className="size-medium" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to" className="text-xl font-bold">
              مقصد
            </label>
            <input
              name="to"
              type="text"
              value={destination}
              onChange={(e) =>
                dispatch({
                  type: "setDestination",
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
              تاریخ رفت و برگشت
            </label>
            <input
              name="date"
              type="text"
              placeholder={
                focusState.date ? " " : "تاریخ سفر خود را انتخاب کنید"
              }
              className="text-sm w-[22rem]"
              onFocus={() => handleFocus("date")}
              onBlur={() => handleBlur("date")}
            />
          </div>
        </div>

        <div className="inputGp flex items-center gap-4">
          <div className=" bg-greyLight py-6 px-2 rounded-lg">
            <IoMdPerson className="size-medium" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passengerNumber" className="text-xl font-bold">
              تعداد مسافران
            </label>
            <input
              name="passengerNumber"
              type="text"
              value={passengerNumber}
              onChange={(e) =>
                dispatch({
                  type: "setPassengerNumber",
                  payload: e.target.value,
                })
              }
              placeholder={
                focusState.passengerNumber
                  ? " "
                  : "تعداد مسافران خود را انتخاب کنید"
              }
              className="text-sm w-[22rem]"
              onFocus={() => handleFocus("passengerNumber")}
              onBlur={() => handleBlur("passengerNumber")}
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

export default ParvazFormHome;
