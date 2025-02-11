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
      <div className="relative flex justify-evenly bg-white w-[40%]  border-black p-[4.8rem] mx-auto z-[100] rounded-[3.2rem]">
        <div className="w-full">
          <div>
            <h2 className="text-[2.4rem] mb-[5px]">ثبت نام</h2>
            <p className="text-[1.4rem]">لطفا اطلاعات خود را وارد نمایید</p>
          </div>
          <form
            className="my-[2.8rem] flex flex-col gap-[2.8rem]"
            onSubmit={handleSubmitNewUser}
          >
            <div>
              <h3 className="text-[2rem] mb-[2.4rem]">اطلاعات آژانس</h3>
              <div className="w-full grid grid-cols-2 grid-rows-3 gap-[2.4rem]">
                <input
                  type="text"
                  required
                  placeholder="نام آژانس به فارسی"
                  value={agency.agencyName}
                  onChange={(e) =>
                    dispatch({ type: "setAgencyName", payload: e.target.value })
                  }
                  className="w-full px-[2rem] py-[1rem] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
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
                  className="w-full text-right px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
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
                  className="w-full px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
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
                  className="w-full px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
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
                  className="col-span-2 w-full px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
                />
              </div>
            </div>
            <div>
              <h3 className="text-[2rem] my-[2.4rem]">اطلاعات کاربر مدیر</h3>
              <div className="w-full grid grid-cols-2 grid-rows-3 gap-[2.4rem]">
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
                  className="w-full px-[2rem] py-[1rem] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
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
                  className="w-full text-right px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
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
                  className="w-full px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
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
                  className="w-full text-right px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-mainPrimary"
                />
              </div>
            </div>
            <div className="flex gap-[2.4rem]">
              <button className="w-[30%]  text-gray_7 py-[1rem] px-[2rem] justify-center flex items-center gap-[1rem] text-[1.6rem] rounded-[3.2rem]  hover:text-mainPrimary">
                <span>
                  <FaArrowRightLong />
                </span>
                <span>بازگشت</span>
              </button>
              <button
                type="submit"
                className="w-[70%] bg-mainPrimary text-white py-[1rem] px-[2rem] text-center rounded-[3.2rem] text-[1.6rem] hover:bg-mainSecondary"
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
        <button
          className="p-[2.4rem] rounded-full absolute top-[2rem] left-[2rem] hover:bg-gray_1"
          onClick={onClose}
        >
          <IoMdClose className="text-[2rem]" />
        </button>
      </div>
    </>
  );
}

export default RegisterModal;
