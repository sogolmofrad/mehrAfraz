import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
function ViewAllLink({ linkUrl = "#" }) {
  return (
    <Link
      to={linkUrl}
      className="text-[1.4rem] text-mainPrimary flex items-center px-[1rem] py-[5px] rounded-[2.4rem] border-2 border-mainPrimary hover:text-mainSecondary hover:border-mainSecondary"
    >
      <span>مشاهده بیشتر</span>
      <span className="mr-[1rem]">
        <FaArrowLeftLong />
      </span>
    </Link>
  );
}

export default ViewAllLink;
