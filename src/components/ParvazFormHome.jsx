import { useReducer, useState } from "react";
import { MdFlight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiFlightTakeoffFill } from "react-icons/ri";
const initialState = {
  origin: "",
  arrival: "",
  departureTime: null,
  arrivalTime: null,
  passengerNumber: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setOrigin":
      return { ...state, origin: action.payload };
    case "setArrival":
      return { ...state, arrival: action.payload };
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
    { origin, arrival, departureTime, arrivalTime, passengerNumber },
    dispatch,
  ] = useReducer(reducer, initialState);
  // const [focusState, setFocusState] = useState({
  //   from: false,
  //   to: false,
  //   date: false,
  //   passengerNumber: false,
  // });

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
      arrival,
      departureTime,
      arrivalTime,
      passengerNumber,
    };
    console.log(formData);
  }

  return (
    <div className="mt-8 w-full">
      <form
        className="form flex justify-between w-full"
        onSubmit={handleSubmit}
      >
        <div className="inputGp flex items-center justify-between gap-4">
          <div className="flex items-center w-[188px] p-3 border-1 rounded-xl">
            <div className=" bg-gray_1 p-3 rounded-lg">
              <RiFlightTakeoffFill className="size-medium" />
            </div>
            <input
              type="text"
              value={origin}
              onChange={(e) =>
                dispatch({ type: "setOrigin", payload: e.target.value })
              }
              placeholder="مبدا"
              className="text-sm w-[80%] mr-base"
              autoComplete="off"
              onBlur={() => handleBlur("from")}
            />
          </div>
          <div className="flex items-center w-[188px] p-3 border-1 rounded-xl">
            <div className=" bg-gray_1 p-3 rounded-lg">
              <CiLocationOn className="size-medium" />
            </div>
            <input
              type="text"
              value={arrival}
              onChange={(e) =>
                dispatch({ type: "setArrival", payload: e.target.value })
              }
              placeholder="مقصد"
              className="text-sm w-[80%] mr-base"
              autoComplete="off"
              onBlur={() => handleBlur("from")}
            />
          </div>
          <div className="flex items-center w-[188px] p-3 border-1 rounded-xl">
            <div className=" bg-gray_1 p-3 rounded-lg">
              <SlCalender className="size-medium" />
            </div>
            <input
              type="text"
              value={arrival}
              onChange={(e) =>
                dispatch({ type: "setArrival", payload: e.target.value })
              }
              placeholder="مقصد"
              className="text-sm w-[80%] mr-base"
              autoComplete="off"
              onBlur={() => handleBlur("from")}
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
