import { useState } from "react";
import { Link } from "react-router";
import SubNavbarTourIran from "./SubNavbarTourIran";

function Navbar() {
  const [isMenuTourIranOpen, setIsMenuTourIranOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuTourIranOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="text-[1.6rem] mr-[5rem] w-[70%] text-grey navbar">
        <ul className="flex items-end justify-between">
          <li className="flex items-center">
            <Link to="" onClick={toggleMenu}>
              تور داخلی
            </Link>
            <img
              src="images/icons8-down-50.png"
              className="w-[1.2rem] h-[1.2rem] mr-[0.5rem]"
            />
          </li>
          <li className="flex items-center">
            <Link to="">تور خارجی</Link>
            <img
              src="images/icons8-down-50.png"
              className="w-[1.2rem] h-[1.2rem] mr-[0.5rem]"
            />
          </li>
          <li className="flex items-center">
            <Link to="">رزرو و خرید </Link>
            <img
              src="images/icons8-down-50.png"
              className="w-[1.2rem] h-[1.2rem] mr-[0.5rem]"
            />
          </li>
          <li className="flex items-center">
            <Link to="">مجله گردشگری </Link>
            <img
              src="images/icons8-down-50.png"
              className="w-[1.2rem] h-[1.2rem] mr-[0.5rem]"
            />
          </li>
          <li className="flex items-center">
            <Link to="">بیشتر</Link>
            <img
              src="images/icons8-down-50.png"
              className="w-[1.2rem] h-[1.2rem] mr-[0.5rem]"
            />
          </li>
        </ul>
      </nav>
      {isMenuTourIranOpen && <SubNavbarTourIran />}
    </>
  );
}

export default Navbar;
