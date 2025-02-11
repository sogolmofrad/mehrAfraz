import { useState } from "react";
import { Link } from "react-router";
import SubNavbarTourIran from "../SubNavbarTourIran";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isMenuTourIranOpen, setIsMenuTourIranOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuTourIranOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="text-[1.6rem] mr-[5rem] w-[70%] text-grey navbar">
        <ul className="flex items-end justify-between text-gray_8 font-medium">
          <li className="flex items-center">
            <Link to="" onClick={toggleMenu} className="flex items-center">
              تور داخلی
              <FaChevronDown className="mr-[0.5rem] text-[1.2rem]" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="" onClick={toggleMenu} className="flex items-center">
              تور خارجی
              <FaChevronDown className="mr-[0.5rem] text-[1.2rem]" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="" onClick={toggleMenu} className="flex items-center">
              رزرو و خرید
              <FaChevronDown className="mr-[0.5rem] text-[1.2rem]" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/magazine" className="flex items-center">
              مجله گردشگری
              <FaChevronDown className="mr-[0.5rem] text-[1.2rem]" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="" onClick={toggleMenu} className="flex items-center">
              بیشتر
              <FaChevronDown className="mr-[0.5rem] text-[1.2rem]" />
            </Link>
          </li>
        </ul>
      </nav>
      {isMenuTourIranOpen && <SubNavbarTourIran />}
    </>
  );
}

export default Navbar;
