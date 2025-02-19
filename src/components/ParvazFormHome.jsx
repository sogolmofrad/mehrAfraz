import { useReducer, useState } from "react";
import DatePicker from "react-multi-date-picker";
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
  departureTime: null,
  arrivalDate: null,
  afterBefore: null,
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
    case "setAfterBefore":
      return { ...state, afterBefore: action.payload };
    case "setPassengerNumber":
      return { ...state, passengerNumber: action.payload };
    default:
      return state;
  }
}

function ParvazFormHome() {
  const [{ origin, arrival, arrivalDate, afterBefore }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [isJalali, setIsJalali] = useState(true);

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
    const formData = { origin, arrival, arrivalDate, afterBefore };
    console.log(formData);
  }

  function handleJalali() {
    setIsJalali(!isJalali);
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
          <div className="flex items-center w-[190px] p-3 border border-gray-300 rounded-xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <CiLocationOn className="size-medium" />
            </div>
            <Select
              options={arrivals}
              labelField="name"
              valueField="id"
              placeholder="مقصد"
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
                  onChange={(date) =>
                    dispatch({
                      type: "setArrivalDate",
                      payload: date.toLocaleString(),
                    })
                  }
                  format="YYYY/MM/DD"
                  value={arrivalDate}
                  render={<DateInput value={arrivalDate} />}
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
              <Select
                options={afterBefores}
                labelField="name"
                valueField="value"
                placeholder="فقط همین تاریخ"
                onChange={(e) =>
                  dispatch({ type: "setAfterBefore", payload: e[0].value })
                }
                direction="rtl"
                className="focus:shadow-none text-sm w-[150px] "
              />
              <input
                type="text"
                className="text-sm py-2 w-[50%]"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex items-center w-[190px] p-3 border border-gray-300 rounded-xl">
            <Select>
              <Option>بزرگسال</Option>
              <Option>کودک</Option>
            </Select>
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
const DateInput = ({ onFocus, value, onChange, dispatch }) => (
  <input
    onFocus={onFocus}
    value={value}
    onChange={onChange}
    type="text"
    placeholder="تاریخ رفت"
    className="text-sm py-2 mr-3 border-l-1 w-[80%] border-gray-300"
  />
);

export default ParvazFormHome;
