import React from "react";
import PageTitle from "../components/utils/PageTitle";

function Magazine() {
  return (
    <div>
      <div className="w-full h-[200px] heroSection">
        <h1 className="pt-section text-2xl text-center text-white">
          مجله گردشگری
        </h1>
      </div>
      <div className="h-[50rem] container max-w-container mx-auto grid grid-cols-12 grid-rows-2 gap-8 mt-[-100px] pt-0">
        <figure className="col-span-6 row-span-2  rounded-lg">
          <img
            src="/images/mag-pic-1.png"
            alt="magazine"
            className="w-full h-full object-cover  rounded-lg"
          />
        </figure>
        <figure className="col-span-6   rounded-lg">
          <img
            src="/images/mag-pic-w.png"
            alt="magazine"
            className="w-full h-full object-cover  rounded-lg"
          />
        </figure>
      </div>
    </div>
  );
}

export default Magazine;
