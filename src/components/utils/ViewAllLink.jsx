import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
function ViewAllLink({ linkUrl = "#" }) {
  return (
    <Link
      to={linkUrl}
      className="text-sm text-mainPrimary flex items-center px-4 py-2 rounded-lg border-2 border-mainPrimary hover:text-mainSecondary hover:border-mainSecondary"
    >
      <span>مشاهده بیشتر</span>
      <span className="mr-4">
        <FaArrowLeftLong />
      </span>
    </Link>
  );
}

export default ViewAllLink;
