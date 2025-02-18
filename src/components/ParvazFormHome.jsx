import { useReducer } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { TbArrowsExchange2 } from "react-icons/tb";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import "react-multi-date-picker/styles/colors/teal.css";
const initialState = {
  origin: "",
  arrival: "",
  departureTime: null,
  arrivalDate: null,
  passengerNumber: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setOrigin":
      return { ...state, origin: action.payload };
    case "setArrival":
      return { ...state, arrival: action.payload };
    case "setDepartureTime":
      return { ...state, departureTime: action.payload };
    case "setArrivalDate":
      return { ...state, arrivalDate: action.payload };
    case "setPassengerNumber":
      return { ...state, passengerNumber: action.payload };
    default:
      return state;
  }
}

function ParvazFormHome() {
  const [{ origin, arrival, arrivalDate }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const weekDays = ["ی", "د", "س", "چ", "پ", "ج", "ش"];

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { origin, arrival, arrivalDate };
    console.log(formData);
  }

  return (
    <div className="mt-8 w-full">
      <form
        className="form flex justify-between w-full"
        onSubmit={handleSubmit}
      >
        <div className="inputGp flex items-center justify-between gap-4">
          {/* Origin Input */}
          <div className="flex items-center w-[190px] p-3 border border-gray-300 rounded-xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <RiFlightTakeoffFill className="size-medium" />
            </div>
            <input
              type="text"
              value={origin}
              onChange={(e) =>
                dispatch({ type: "setOrigin", payload: e.target.value })
              }
              placeholder="مبدا"
              className="text-sm w-[80%] mr-3 py-2"
              autoComplete="off"
            />
          </div>

          {/* Swap Button */}
          <button type="button">
            <TbArrowsExchange2 className="size-medium" />
          </button>

          {/* Arrival Input */}
          <div className="flex items-center w-[190px] p-3 border border-gray-300 rounded-xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <CiLocationOn className="size-medium" />
            </div>
            <input
              type="text"
              value={arrival}
              onChange={(e) =>
                dispatch({ type: "setArrival", payload: e.target.value })
              }
              placeholder="مقصد"
              className="text-sm w-[80%]  mr-3 py-2"
              autoComplete="off"
            />
          </div>

          {/* Date Picker */}
          <div className="flex items-center w-[290px] p-3 border border-gray-300 rounded-xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <PiCalendarDotsDuotone className="size-medium" />
            </div>
            <div className="flex justify-between w-[90%]">
              <DatePicker
                mapDays={({
                  date,
                  today,
                  selectedDate,
                  currentMonth,
                  isSameDate,
                }) => {
                  let props = {};

                  props.style = {
                    color: "#262626",
                  };

                  if (isSameDate(date, today)) props.style.color = "green";
                  if (isSameDate(date, selectedDate))
                    props.style = {
                      ...props.style,
                      color: "white",
                      backgroundColor: "#3B4D5C",
                      fontWeight: "bold",
                    };

                  return props;
                }}
                weekDays={weekDays}
                selected={arrivalDate}
                onChange={(date) =>
                  dispatch({ type: "setArrivalDate", payload: date })
                }
                calendar={persian}
                locale={persian_fa}
                render={<DateInput />}
                calendarClassName="w-[290px] bg-white border border-gray-200 shadow-lg rounded-lg"
                className="teal"
              />
              <input
                type="text"
                className="text-sm py-2 w-[50%]"
                autoComplete="off"
                placeholder="تاریخ های قبل و بعد"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
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

// Custom Input Component for DatePicker
const DateInput = ({ onFocus, value, onChange }) => (
  <input
    onFocus={onFocus}
    value={value}
    onChange={onChange}
    type="text"
    placeholder="تاریخ رفت "
    className="text-sm py-2 mr-3 border-l-1 w-[90%] border-gray-300"
  />
);

export default ParvazFormHome;
