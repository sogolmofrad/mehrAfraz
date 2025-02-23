import { useEffect, useReducer, useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { TbArrowsExchange2 } from "react-icons/tb";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import "react-multi-date-picker/styles/colors/teal.css";
import Select from "react-dropdown-select";
import clsx from "clsx";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  ComboboxButton,
} from "@headlessui/react";

const initialState = {
  origin: null,
  arrival: null,
  departureDate: null,
  arrivalDate: null,
  afterBefore: null,
  passengers: { adults: 1, children: 0, infants: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case "setOrigin":
      return { ...state, origin: action.payload };
    case "setArrival":
      return { ...state, arrival: action.payload };
    case "setDepartureDate":
      return { ...state, departureDate: action.payload };
    case "setArrivalDate":
      return { ...state, arrivalDate: action.payload };
    case "setAfterBefore":
      return { ...state, afterBefore: action.payload };
    case "setAdults":
      return {
        ...state,
        passengers: {
          ...state.passengers,
          adults: state.passengers.adults + action.payload,
        },
      };
    case "setChildren":
      return {
        ...state,
        passengers: {
          ...state.passengers,
          children: state.passengers.children + action.payload,
        },
      };
    case "setInfants":
      return {
        ...state,
        passengers: {
          ...state.passengers,
          infants: state.passengers.infants + action.payload,
        },
      };
    default:
      return state;
  }
}

function ParvazFormHome({ oneWay }) {
  const [
    { origin, arrival, arrivalDate, afterBefore, departureDate, passengers },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [originQuery, setOriginQuery] = useState("");
  const [arrivalQuery, setArrivalQuery] = useState("");
  const [isJalali, setIsJalali] = useState(true);

  const [showPassengerSearch, setShowpassengerSearch] = useState(false);
  const passengerButtonRef = useRef(null);

  const weekDaysFarsi = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
  const weekDaysEnglish = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const origins = [
    { id: 1, name: "تهران" },
    { id: 2, name: "استانبول" },
    { id: 3, name: "دبی" },
    { id: 4, name: "اصفهان" },
    { id: 5, name: "مشهد" },
  ];
  const arrivals = [
    { id: 1, name: "تهران" },
    { id: 2, name: "استانبول" },
    { id: 3, name: "دبی" },
    { id: 4, name: "اصفهان" },
    { id: 5, name: "مشهد" },
  ];

  const afterBefores = [
    { value: 0, name: "فقط همین تاریخ" },
    { value: 1, name: "1 روز قبل و بعد" },
    { value: 2, name: "2 روز قبل و بعد" },
    { value: 3, name: "3 روز قبل و بعد" },
    { value: 4, name: "4 روز قبل و بعد" },
  ];
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      origin,
      arrival,
      departureDate,
      arrivalDate,
      afterBefore,
      passengers,
    };
    console.log(formData);
  }

  function handleJalali() {
    setIsJalali(!isJalali);
  }

  function handleSetDates(dates) {
    if (dates && dates.length === 2) {
      dispatch({
        type: "setDepartureDate",
        payload: dates[0].toLocaleString(),
      });
      dispatch({ type: "setArrivalDate", payload: dates[1].toLocaleString() });
    }
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        passengerButtonRef.current &&
        !passengerButtonRef.current.contains(event.target)
      ) {
        setShowpassengerSearch(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filterOrigins =
    originQuery === ""
      ? origins
      : origins.filter((city) => city.name.includes(originQuery));

  const filterArrivals =
    arrivalQuery === ""
      ? arrivals
      : arrivals.filter((city) => city.name.includes(arrivalQuery));

  return (
    <div className="mt-8 w-full">
      <form
        className=" form flex justify-between w-full"
        onSubmit={handleSubmit}
      >
        <div className="inputGp flex items-center justify-between gap-4">
          {/* Origin Input */}

          <div className="relative flex items-center w-[220px] p-3 border border-gray-300 rounded-xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <RiFlightTakeoffFill className="size-medium" />
            </div>
            <Combobox
              value={origin}
              onChange={(value) => {
                setOriginQuery(value.name); // Update input display
                dispatch({ type: "setOrigin", payload: value });
              }}
            >
              <ComboboxButton className="w-fit h-[35px] mr-4">
                <ComboboxInput
                  placeholder="مبدا"
                  value={originQuery}
                  onChange={(event) => setOriginQuery(event.target.value)}
                  className="w-full text-sm h-full"
                  required
                />
              </ComboboxButton>

              <ComboboxOptions
                className={clsx(
                  "w-[200px] rounded-searchBox p-0  bg-white absolute top-full left-[20px] empty:invisible  z-20 shadow-searchBox",
                  "transition duration-500 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                <div
                  className="ep-arrow  rmdp-ep-arrow rmdp-ep-shadow teal visible absolute left-[20px] bottom-full h-[11px] w-[20px] z-101"
                  direction="top"
                ></div>
                {filterOrigins.map((city) => (
                  <ComboboxOption
                    key={city.id}
                    value={city} // Pass the whole object
                    className="cursor-pointer text-mainPrimary p-4 text-sm hover:bg-gray-200 last:rounded-b-lg"
                  >
                    {city.name} {/* Only show the name */}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>
          </div>

          {/* Swap Button */}
          <button type="button">
            <TbArrowsExchange2 className="size-medium" />
          </button>

          {/* Arrival Input */}
          <div className="relative flex items-center w-[220px] p-3 border border-gray-300 rounded-xl">
            <div className=" bg-gray-100 p-3 rounded-lg">
              <CiLocationOn className="size-medium" />
            </div>
            <Combobox
              value={arrival}
              onChange={(value) => {
                setArrivalQuery(value.name); // Update input display
                dispatch({ type: "setArrival", payload: value });
              }}
            >
              <ComboboxButton className="w-fit h-[35px] mr-4">
                <ComboboxInput
                  placeholder="مقصد"
                  value={arrivalQuery}
                  onChange={(event) => setArrivalQuery(event.target.value)}
                  className="w-full text-sm h-full"
                  required
                />
              </ComboboxButton>

              <ComboboxOptions
                className={clsx(
                  "w-[200px] rounded-searchBox p-0  bg-white absolute top-full left-[20px] empty:invisible  z-20 shadow-searchBox",
                  "transition duration-500 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
              >
                <div
                  className="ep-arrow  rmdp-ep-arrow rmdp-ep-shadow teal visible absolute left-[20px] bottom-full h-[11px] w-[20px] z-101"
                  direction="top"
                ></div>
                {filterArrivals.map((city) => (
                  <ComboboxOption
                    key={city.id}
                    value={city} // Pass the whole object
                    className="cursor-pointer text-mainPrimary p-4 text-sm hover:bg-gray-200 last:rounded-b-searchBox"
                  >
                    {city.name} {/* Only show the name */}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </Combobox>

            {/* <Select
              options={arrivals}
              labelField="name"
              valueField="id"
              placeholder="مقصد"
              onChange={(e) => dispatch({ type: "setArrival", payload: e })}
              direction="rtl"
              className="focus:shadow-none text-sm w-[150px] "
            /> */}
          </div>

          {/* Date Picker */}
          {oneWay && (
            <div className="flex items-center w-[290px] p-3 border border-gray-300 rounded-xl">
              <div className="bg-gray-100 p-3 rounded-lg">
                <PiCalendarDotsDuotone className="size-medium" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <DatePicker
                    numberOfMonths={2}
                    monthYearSeparator="|"
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
                    weekDays={isJalali ? weekDaysFarsi : weekDaysEnglish}
                    calendar={isJalali ? persian : ""}
                    locale={isJalali ? persian_fa : ""}
                    onChange={(date) =>
                      dispatch({
                        type: "setArrivalDate",
                        payload: date.toLocaleString(),
                      })
                    }
                    format="YYYY/MM/DD"
                    value={arrivalDate}
                    render={<DateInput value={arrivalDate} oneWay={oneWay} />}
                    calendarClassName="w-[290px] bg-white border border-gray-200 shadow-lg rounded-lg"
                    className="teal"
                  >
                    <div className="w-full flex p-base justify-between border-t-2">
                      <button
                        className=" text-mainPrimary text-sm hover:text-gray_5"
                        onClick={handleJalali}
                      >
                        تقویم میلادی
                      </button>
                    </div>
                  </DatePicker>
                </div>
                {/* <Select
                    options={afterBefores}
                    labelField="name"
                    valueField="value"
                    placeholder="فقط همین تاریخ"
                    onChange={(e) =>
                      dispatch({ type: "setAfterBefore", payload: e[0].value })
                    }
                    direction="rtl"
                    className="focus:shadow-none text-sm w-[150px] "
                  /> */}
                <input
                  type="text"
                  className="text-sm py-2 w-[50%]"
                  autoComplete="off"
                />
              </div>
            </div>
          )}
          {!oneWay && (
            <div className="flex items-center w-[290px] p-3 border border-gray-300 rounded-xl">
              <div className="bg-gray-100 p-3 rounded-lg">
                <PiCalendarDotsDuotone className="size-medium" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <DatePicker
                    numberOfMonths={2}
                    monthYearSeparator="|"
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
                    weekDays={isJalali ? weekDaysFarsi : weekDaysEnglish}
                    calendar={isJalali ? persian : ""}
                    locale={isJalali ? persian_fa : ""}
                    onChange={(dates) => handleSetDates(dates)}
                    format="YYYY/MM/DD"
                    values={
                      departureDate && arrivalDate
                        ? [
                            new DateObject(departureDate),
                            new DateObject(arrivalDate),
                          ]
                        : []
                    }
                    render={<DateInput value={arrivalDate} oneWay={oneWay} />}
                    calendarClassName="w-[290px] bg-white border border-gray-200 shadow-lg rounded-lg"
                    className="teal"
                    range
                  >
                    <div className="w-full flex p-base justify-between border-t-2">
                      <button
                        className=" text-mainPrimary text-sm hover:text-gray_5"
                        onClick={handleJalali}
                      >
                        تقویم میلادی
                      </button>
                    </div>
                  </DatePicker>
                </div>
              </div>
            </div>
          )}

          <div className="relative" ref={passengerButtonRef}>
            <div className="flex items-center w-[220px] p-3 border border-gray-300 rounded-xl">
              <div
                role="button"
                className="p-3"
                onClick={() => setShowpassengerSearch(!showPassengerSearch)}
              >
                <label className="text-sm">
                  {passengers.adults + passengers.children + passengers.infants}{" "}
                  مسافر
                </label>
              </div>
            </div>
            {showPassengerSearch && (
              <div className="absolute inset-0 p-medium bg-white h-fit top-[55px]  rounded-xl flex flex-col gap-8 w-[300px] rounded-b-lg shadow-lg">
                <div className="flex justify-between w-full">
                  <p className="text-sm flex flex-col font-medium">
                    <span>بزرگسال</span>
                    <span className="text-xs">بالای 12 سال</span>
                  </p>
                  <div className="flex justify-between items-center gap-4">
                    <button
                      className="text-lg text-mainPrimary flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 border-mainPrimary"
                      onClick={() =>
                        dispatch({ type: "setAdults", payload: 1 })
                      }
                    >
                      +
                    </button>
                    <span className="text-lg">{passengers.adults}</span>
                    <button
                      disabled={passengers.adults == 1}
                      className={`text-lg text-mainPrimary flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 border-mainPrimary ${
                        passengers.adults == 1
                          ? "text-gray_4 border-gray_4"
                          : ""
                      }`}
                      onClick={() =>
                        dispatch({ type: "setAdults", payload: -1 })
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-sm flex flex-col font-medium">
                    <span>کودک</span>
                    <span className="text-xs">2 تا 12 سال</span>
                  </p>
                  <div className="flex justify-between items-center gap-4">
                    <button
                      className="text-lg text-mainPrimary flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 border-mainPrimary"
                      disabled={
                        passengers.infants + passengers.children ===
                        passengers.adults * 5
                      }
                      onClick={() =>
                        dispatch({ type: "setChildren", payload: 1 })
                      }
                    >
                      +
                    </button>
                    <span className="text-lg">{passengers.children}</span>
                    <button
                      disabled={passengers.children == 0}
                      className={`text-lg text-mainPrimary flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 border-mainPrimary ${
                        !passengers.children ? "text-gray_4 border-gray_4" : ""
                      }`}
                      onClick={() =>
                        dispatch({ type: "setChildren", payload: -1 })
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-sm flex flex-col font-medium">
                    <span>نوزاد</span>
                    <span className="text-xs">0 تا 2 سال</span>
                  </p>
                  <div className="flex justify-between items-center gap-4">
                    <button
                      disabled={passengers.infants === passengers.adults}
                      className="text-lg text-mainPrimary flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 border-mainPrimary"
                      onClick={() =>
                        dispatch({ type: "setInfants", payload: 1 })
                      }
                    >
                      +
                    </button>
                    <span className="text-lg">{passengers.infants}</span>
                    <button
                      disabled={passengers.infants == 0}
                      className={`text-lg text-mainPrimary flex items-center justify-center w-[40px] h-[40px] rounded-full border-1 border-mainPrimary ${
                        !passengers.infants ? "text-gray_4 border-gray_4" : ""
                      }`}
                      onClick={() =>
                        dispatch({ type: "setInfants", payload: -1 })
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-mainPrimary h-[50px] w-[50px] flex justify-center items-center  text-2xl text-white rounded-xl hover:bg-mainSecondary"
        >
          <CiSearch />
        </button>
      </form>
    </div>
  );
}

// Custom Input Component for DatePicker
const DateInput = ({ oneWay, onFocus, value, onChange, dispatch }) => (
  <input
    onFocus={onFocus}
    value={value}
    onChange={onChange}
    type="text"
    placeholder={oneWay ? "تاریخ رفت" : "تاریخ رفت و برگشت "}
    className={
      oneWay
        ? "text-sm py-2 mr-3 border-l-1 w-[80%] border-gray-300"
        : "text-sm py-2 mr-3"
    }
  />
);

export default ParvazFormHome;
