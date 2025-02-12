import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function LoginModal({ onClose, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className=" bg-blackTransparent backdrop-blur-[1px] w-screen h-screen absolute inset-0 z-[60]"></div>
      <div className="relative flex justify-evenly bg-white w-[40%]  border-black p-18 mx-auto z-[100] rounded-xl">
        <div className="w-[40%]">
          <div>
            <h2 className="text-2xl mb-2">ورود</h2>
            <p className="text-sm">لطفا اطلاعات خود را وارد نمایید</p>
          </div>
          <form className="my-11 flex flex-col gap-11">
            <input
              type="text"
              required
              placeholder="نام گاربری"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
            />
            <input
              type="password"
              required
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-2 text-base border-2 border-gray_5 rounded-xl focus:border-mainPrimary"
            />
            <div className="flex flex-col gap-11">
              <button
                type="submit"
                className="w-full bg-mainPrimary text-white py-4 px-8 text-center rounded-xl text-base hover:bg-mainSecondary"
              >
                ورود
              </button>
              <button
                className="w-full text-gray_7 text-center text-base hover:text-mainPrimary"
                onClick={onRegister}
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
        <div className="w-[40%] flex flex-col justify-center items-center gap-4">
          <img src="/images/logo.webp" alt="logo" className="w-[70%]" />
          <p className="text-center text-base w-[80%]">
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
