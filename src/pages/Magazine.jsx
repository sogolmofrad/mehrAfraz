import React from "react";
import PageTitle from "../components/utils/PageTitle";

function Magazine() {
  return (
    <div>
      <div className="w-full h-[200px] heroSection">
        <h1 className="pt-section text-[2.4rem] text-center text-white">
          مجله گردشگری
        </h1>
      </div>
      <div className="h-[50rem] container max-w-container mx-auto grid grid-cols-12 grid-rows-2 gap-[2rem] mt-[-100px] pt-0">
        <figure className="col-span-6 row-span-2  rounded-[2.4rem]">
          <img
            src="/images/mag-pic-1.png"
            alt="magazine"
            className="w-full h-full object-cover  rounded-[2.4rem]"
          />
        </figure>
        <figure className="col-span-6   rounded-[2.4rem]">
          <img
            src="/images/mag-pic-w.png"
            alt="magazine"
            className="w-full h-full object-cover  rounded-[2.4rem]"
          />
        </figure>
      </div>
    </div>
  );
}

export default Magazine;
