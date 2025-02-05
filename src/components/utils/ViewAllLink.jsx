import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
function ViewAllLink({ linkUrl = "#" }) {
  return (
    <Link
      to={linkUrl}
      className="text-[1.6rem] text-red_5 flex items-center px-[1rem] py-[5px] rounded-[2.4rem] border-2 border-red_5 hover:text-redSecondary hover:border-redSecondary"
    >
      <span>مشاهده بیشتر</span>
      <span className="mr-[1rem]">
        <FaArrowLeftLong />
      </span>
    </Link>
  );
}

export default ViewAllLink;
