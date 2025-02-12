import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { FaChevronLeft } from "react-icons/fa";

function PageTitle({ title }) {
  return (
    <div>
      <div className="container mx-auto max-w-container flex items-center">
        <TbSmartHome className="text-2xl text-gray_5" />
        <FaChevronLeft className="text-xl text-gray_5" />
        <h1 className="text-base text-gray_10">{title}</h1>
      </div>
    </div>
  );
}

export default PageTitle;
