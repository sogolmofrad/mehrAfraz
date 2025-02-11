import { useState } from "react";
import Navbar from "./Navbar";
import LoginModal from "../utils/LoginModal";
import RegisterModal from "../utils/RegisterModal";

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  function openLoginModal() {
    setShowLoginModal(true);
  }

  function closeModal() {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  }

  function openRegisterModal(e) {
    e.preventDefault();
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }
  return (
    <>
      {/* Desktop Header */}
      <header className="w-full hidden relative lg:block header justify-between bg-white py-[1.6rem]  shadow-lg">
        <div className="container flex max-w-container mx-auto justify-between p-0">
          <div className="flex  items-center  w-[60%]">
            <div>
              <img src="/images/logo.webp" alt="logo" className="w-[9rem]" />
            </div>
            <Navbar />
          </div>
          <div className="flex w-[37%] justify-between items-center">
            <img
              src="/images/icons8-notification-50.png"
              className="w-[2rem] h-[2rem]"
            />

            <div className="flex">
              <img
                src="/images/icons8-search-50.png"
                className="w-[2rem] h-[2rem]"
              />
              <span className="text-gray_7 text-[1.6rem] mr-[1rem]">
                پیگیری رزرو
              </span>
            </div>

            <button className="bg-mainPrimary flex items-center py-[1rem] px-[2rem]  rounded-[4rem] hover:bg-mainSecondary">
              <img
                src="/images/icons8-phone-50.png"
                className="w-[2rem] h-[2rem] pb-[2px]"
              />
              <span className="text-white text-[1.8rem]">۰۲۱-۸۸۵۰۷۱۹۰</span>
            </button>

            <button
              className="flex items-center py-[1rem] px-[2rem] mx-[1rem] rounded-[4rem] border-2 border-greyExtraLight hover:shadow-lg"
              onClick={openLoginModal}
            >
              <img
                src="/images/icons8-menu-32.png"
                className="pb-[2px] w-[1.8rem] ml-[1rem]"
              />
              <img
                src="/images/icons8-user-50.png"
                className="w-[2rem]  pb-[2px]"
              />
            </button>
          </div>
        </div>
      </header>
      {showLoginModal && (
        <LoginModal onClose={closeModal} onRegister={openRegisterModal} />
      )}
      {showRegisterModal && <RegisterModal onClose={closeModal} />}
      {/* Mobile Header */}
      <header className="flex lg:hidden justify-between w-full items-center">
        <img
          src="/images/icons8-search-50.png"
          alt="searchIcon"
          className="w-[2rem] h-[2rem]"
        />
        <img src="/images/logo.webp" alt="logo" className="w-[9rem]" />
        <img
          src="/images/icons8-notification-50.png"
          alt="notificationIcon"
          className="w-[2rem] h-[2rem]"
        />
      </header>
    </>
  );
}

export default Header;
