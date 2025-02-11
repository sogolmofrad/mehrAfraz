import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { FaChevronLeft } from "react-icons/fa";

function PageTitle({ title }) {
  return (
    <div>
      <div className="container mx-auto max-w-container flex items-center">
        <TbSmartHome className="text-[2.4rem] text-gray_5" />
        <FaChevronLeft className="text-[2rem] text-gray_5" />
        <h1 className="text-[1.6rem] text-gray_10">{title}</h1>
      </div>
    </div>
  );
}

export default PageTitle;
