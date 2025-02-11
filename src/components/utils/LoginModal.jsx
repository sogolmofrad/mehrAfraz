import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function LoginModal({ onClose, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className=" bg-blackTransparent backdrop-blur-[1px] w-screen h-screen absolute inset-0 z-[60]"></div>
      <div className="relative flex justify-evenly bg-white w-[40%] border-red border-black p-[4.8rem] mx-auto z-[100] rounded-[3.2rem]">
        <div className="w-[40%]">
          <div>
            <h2 className="text-[2.4rem] mb-[5px]">ورود</h2>
            <p className="text-[1.4rem]">لطفا اطلاعات خود را وارد نمایید</p>
          </div>
          <form className="my-[2.8rem] flex flex-col gap-[2.8rem]">
            <input
              type="text"
              required
              placeholder="نام گاربری"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-red_5"
            />
            <input
              type="password"
              required
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-[1.2rem] py-[5px] text-[1.6rem] border-2 border-gray_5 rounded-[3.2rem] focus:border-red_5"
            />
            <div className="flex flex-col gap-[2.8rem]">
              <button
                type="submit"
                className="w-full bg-red_5 text-white py-[1rem] px-[2rem] text-center rounded-[3.2rem] text-[1.6rem] hover:bg-red_7"
              >
                ورود
              </button>
              <button
                className="w-full text-gray_7 text-center text-[1.6rem] hover:text-red_5"
                onClick={onRegister}
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
        <div className="w-[40%] flex flex-col justify-center items-center gap-[1rem]">
          <img src="/images/logo.webp" alt="logo" className="w-[70%]" />
          <p className="text-center text-[1.6rem] w-[80%]">
            آیا می خواهید سفر متفاوتی داشته باشید؟ آیا شوق کسب تجربه های تازه و
            ثبت خاطراتی لذت بخش را دارید؟ تورهای گردشگری آژانس مسافرتی مهرپرواز
            برای همین هدف در اختیار شماست
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
