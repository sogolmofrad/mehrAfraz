import React, { useReducer } from "react";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
const initialState = {
  agencyName: "",
  agencyPhone: null,
  agencyEmail: "",
  agencyDirector: "",
  agencyAddress: "",
  directorName: "",
  directorFamilyname: "",
  directorEmail: "",
  directorPhone: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "setAgencyName":
      return { ...state, agencyName: action.payload };
    case "setAgencyPhone":
      return { ...state, agencyPhone: action.payload };
    case "setAgencyEmail":
      return { ...state, agencyEmail: action.payload };
    case "setAgencyDirector":
      return { ...state, agencyDirector: action.payload };
    case "setAgencyAddress":
      return { ...state, agencyAddress: action.payload };
    case "setDirectorName":
      return { ...state, directorName: action.payload };
    case "setDirectorFamilyname":
      return { ...state, directorFamilyname: action.payload };
    case "setDirectorEmail":
      return { ...state, directorEmail: action.payload };
    case "setDirectorPhone":
      return { ...state, directorPhone: action.payload };
    default:
      return { ...state };
  }
}
function RegisterModal({ onClose }) {
  const [agency, dispatch] = useReducer(reducer, initialState);
  function handleSubmitNewUser() {
    e.preventDefault();
    const newUser = agency;
    console.log(newUser);
  }
  return (
    <>
      <div className=" bg-blackTransparent backdrop-blur-[1px] w-screen h-screen absolute inset-0 z-[60]"></div>
      <div className="relative flex justify-evenly bg-white w-[40%]  border-black p-18 mx-auto z-[100] rounded-xl">
        <div className="w-full">
          <div>
            <h2 className="text-2xl mb-1">ثبت نام</h2>
            <p className="text-sm">لطفا اطلاعات خود را وارد نمایید</p>
          </div>
          <form
            className="my-11 flex flex-col gap-11"
            onSubmit={handleSubmitNewUser}
          >
            <div>
              <h3 className="text-xl mb-medium">اطلاعات آژانس</h3>
              <div className="w-full grid grid-cols-2 grid-rows-3 gap-medium">
                <input
                  type="text"
                  required
                  placeholder="نام آژانس به فارسی"
                  value={agency.agencyName}
                  onChange={(e) =>
                    dispatch({ type: "setAgencyName", payload: e.target.value })
                  }
                  className="w-full px-8 py-4 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
                <input
                  type="tel"
                  required
                  placeholder="شماره تماس"
                  value={agency.agencyPhone}
                  onChange={(e) =>
                    dispatch({
                      type: "setAgencyPhone",
                      payload: e.target.value,
                    })
                  }
                  className="w-full text-right px-xs py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
                <input
                  type="email"
                  required
                  placeholder="آدرس ایمیل"
                  value={agency.agencyEmail}
                  onChange={(e) =>
                    dispatch({
                      type: "setAgencyEmail",
                      payload: e.target.value,
                    })
                  }
                  className="w-full px-xs py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
                <input
                  type="text"
                  placeholder="نام مدیر"
                  value={agency.agencyDirector}
                  required
                  onChange={(e) =>
                    dispatch({
                      type: "setAgencyDirector",
                      payload: e.target.value,
                    })
                  }
                  className="w-full px-xs py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
                <input
                  type="text"
                  placeholder="آدرس"
                  value={agency.agencyAddress}
                  required
                  onChange={(e) =>
                    dispatch({
                      type: "setAgencyAddress",
                      payload: e.target.value,
                    })
                  }
                  className="col-span-2 w-full px-xs py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl my-medium">اطلاعات کاربر مدیر</h3>
              <div className="w-full grid grid-cols-2 grid-rows-3 gap-medium">
                <input
                  type="text"
                  placeholder="نام"
                  required
                  value={agency.directorName}
                  onChange={(e) =>
                    dispatch({
                      type: "setDirectorName",
                      payload: e.target.value,
                    })
                  }
                  className="w-full px-8 py-4 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  required
                  value={agency.directorFamilyname}
                  onChange={(e) =>
                    dispatch({
                      type: "setDirectorFamilyname",
                      payload: e.target.value,
                    })
                  }
                  className="w-full text-right px-xs py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
                <input
                  type="email"
                  placeholder="آدرس ایمیل"
                  value={agency.directorEmail}
                  required
                  onChange={(e) =>
                    dispatch({
                      type: "setDirectorEmail",
                      payload: e.target.value,
                    })
                  }
                  className="w-full px-xs py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
                <input
                  type="tell"
                  placeholder="شماره تلفن"
                  value={agency.directorPhone}
                  required
                  onChange={(e) =>
                    dispatch({
                      type: "setDirectorPhone",
                      payload: e.target.value,
                    })
                  }
                  className="w-full text-right px-xs py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
                />
              </div>
            </div>
            <div className="flex gap-medium">
              <button className="w-[30%]  text-gray_7 py-4 px-8 justify-center flex items-center gap-4 text-base rounded-xl  hover:text-mainPrimary">
                <span>
                  <FaArrowRightLong />
                </span>
                <span>بازگشت</span>
              </button>
              <button
                type="submit"
                className="w-[70%] bg-mainPrimary text-white py-4 px-8 text-center rounded-xl text-base hover:bg-mainSecondary"
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
        <button
          className="p-medium rounded-full absolute top-8 left-8 hover:bg-gray_1"
          onClick={onClose}
        >
          <IoMdClose className="text-xl" />
        </button>
      </div>
    </>
  );
}

export default RegisterModal;
