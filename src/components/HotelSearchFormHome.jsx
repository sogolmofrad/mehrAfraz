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

const initialState = {
  origin: null,
  arrival: null,
  departureDate: null,
  arrivalDate: null,
  rooms: {
    room1: { adults: 1, children: [] },
    // room2: { adults: 1, children: [] },
    // room3: { adults: 1, children: [] },
    // room4: { adults: 1, children: [] },
    // room5: { adults: 1, children: [] },
    // room6: { adults: 1, children: [] },
  },
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
    case "setRoom1":
      return {
        ...state,
        rooms: [
          ...state.rooms,
          (rooms1 = {
            ...state.rooms.room1,
            adults: action.payload.adults,
            children: action.payload.children,
          }),
        ],
      };

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

function HotelSearchFormHome() {
  const [{ origin, arrival, arrivalDate, departureDate, rooms }, dispatch] =
    useReducer(reducer, initialState);

  const [isJalali, setIsJalali] = useState(true);
  const [numRooms, setNumRooms] = useState(1);

  const [showPassengerSearch, setShowpassengerSearch] = useState(false);
  const passengerButtonRef = useRef(null);

  const weekDaysFarsi = ["ی", "د", "س", "چ", "پ", "ج", "ش"];
  const weekDaysEnglish = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const numAduls = rooms.room1.adults;
  const numChildren = rooms.room1.children.length;

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

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      origin,
      arrival,
      departureDate,
      arrivalDate,

      rooms,
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

  return (
    <div className="mt-8 w-full">
      <form
        className="form flex justify-between w-full"
        onSubmit={handleSubmit}
      >
        <div className="inputGp flex items-center justify-between gap-4">
          {/* Origin Input */}

          <div className="flex items-center w-[220px] p-3 border border-gray-300 rounded-xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <RiFlightTakeoffFill className="size-medium" />
            </div>
            <Select
              options={origins}
              labelField="name"
              valueField="id"
              placeholder="مبدا"
              onChange={(e) => dispatch({ type: "setOrigin", payload: e })}
              direction="rtl"
              className="focus:shadow-none text-sm w-[150px] "
            />
          </div>

          {/* Swap Button */}
          <button type="button">
            <TbArrowsExchange2 className="size-medium" />
          </button>

          {/* Arrival Input */}
          <div className="flex items-center w-[220px] p-3 border border-gray-300 rounded-xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <CiLocationOn className="size-medium" />
            </div>
            <Select
              options={arrivals}
              labelField="name"
              valueField="id"
              placeholder="مقصد / هتل"
              onChange={(e) => dispatch({ type: "setArrival", payload: e })}
              direction="rtl"
              className="focus:shadow-none text-sm w-[150px] "
            />
          </div>

          {/* Date Picker */}

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
                  render={<DateInput value={arrivalDate} />}
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

          <div className="relative" ref={passengerButtonRef}>
            <div className="flex items-center w-[220px] p-3 border border-gray-300 rounded-xl">
              <div
                role="button"
                className="p-3"
                onClick={() => setShowpassengerSearch(!showPassengerSearch)}
              >
                <label className="text-sm">
                  <span>{numAduls} بزرگسال</span>
                  {numChildren !== 0 && <span>,{childrenNum} کودک </span>}
                  <span>,{numRooms} اتاق</span>
                </label>
              </div>
            </div>
            {showPassengerSearch && (
              <div className="absolute p-medium bg-white h-fit top-[55px] left-0 rounded-xl flex flex-col gap-8 w-[800px] rounded-b-lg shadow-lg   ">
                <div className="flex  w-full items-center gap-8">
                  <p className="text-sm flex flex-col font-medium">
                    <span>تعداد اتاقها</span>
                  </p>
                  <div className="flex gap-4 items-center">
                    <button
                      disabled={numRooms == 6}
                      className="text-base font-bold text-mainPrimary flex items-center justify-center w-[30px] h-[30px] rounded-full border-1 border-mainPrimary"
                      onClick={() => setNumRooms((curr) => curr + 1)}
                    >
                      +
                    </button>
                    <span className="text-sm">{numRooms}</span>
                    <button
                      disabled={numRooms == 1}
                      className="text-lg text-mainPrimary flex items-center justify-center w-[30px] h-[30px] rounded-full border-1 border-mainPrimary"
                      onClick={() => setNumRooms((curr) => curr - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="roomCards w-full">
                  <div className="roomCard p-3 w-[200px] border-2">
                    <div className="flex justify-between w-full">
                      <p className="text-sm flex flex-col font-medium">
                        <span>بزرگسال</span>
                        <span className="text-xs">بالای 12 سال</span>
                      </p>
                      <div className="flex justify-between items-center gap-4">
                        <button className="text-base text-mainPrimary flex items-center justify-center w-[30px] h-[30px] rounded-full border-1 border-mainPrimary">
                          +
                        </button>
                        <span className="text-base">1</span>
                        <button className="text-base text-mainPrimary flex items-center justify-center w-[30px] h-[30px] rounded-full border-1 border-mainPrimary">
                          -
                        </button>
                      </div>
                    </div>
                    <Select placeholder="سن کودک اول" />
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
const DateInput = ({ onFocus, value, onChange, dispatch }) => (
  <input
    onFocus={onFocus}
    value={value}
    onChange={onChange}
    type="text"
    placeholder="تاریخ رفت و برگشت "
    className="text-sm py-2 mr-3"
  />
);

export default HotelSearchFormHome;
