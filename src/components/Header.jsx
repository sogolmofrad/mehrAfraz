import Navbar from "./Navbar";

function Header() {
  return (
    <>
      {/* Desktop Header */}
      <header className="w-full hidden relative lg:block header justify-between bg-white py-section  shadow-lg">
        <div className="container flex max-w-container mx-auto justify-between">
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

            <button className="bg-red_5 flex items-center py-[1rem] px-[2rem]  rounded-[4rem] hover:bg-redSecondary">
              <img
                src="/images/icons8-phone-50.png"
                className="w-[2rem] h-[2rem] pb-[2px]"
              />
              <span className="text-white text-[1.8rem]">۰۲۱-۸۸۵۰۷۱۹۰</span>
            </button>

            <button className="flex items-center py-[1rem] px-[2rem] mx-[1rem] rounded-[4rem] border-2 border-greyExtraLight hover:shadow-lg">
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
