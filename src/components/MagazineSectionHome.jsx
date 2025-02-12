import React from "react";
import SectionHeaders from "./utils/SectionHeaders";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { BsStopwatch } from "react-icons/bs";
function MagazineSectionHome() {
  return (
    <section className="section  max-w-container mx-auto">
      <SectionHeaders
        title="مجله گردشگری"
        description="تازه ترین خبر ها و مقالات سفر"
      >
        <button className="text-base text-mainPrimary flex items-center px-4 py-2 rounded-lg border-2 border-mainPrimary hover:text-mainSecondary hover:border-mainSecondary">
          <span>مشاهده همه</span>
          <span className="mr-4">
            <FaArrowLeftLong />
          </span>
        </button>
      </SectionHeaders>
      <div className="container mx-auto max-w-container">
        <div className="grid grid-cols-12 gap-grid">
          <div className="col-span-12 lg:col-span-4 ">
            <figure className="rounded-lg h-[50rem] relative">
              <img
                src="/images/magazine1.png"
                alt="magazineBlogl"
                className=" rounded-lg object-cover h-full"
              />
              <div className="absolute bg-greyTransparent backdrop-blur-[30px] w-[80%] p-4 rounded-lg bottom-8  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-8">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-8">
                  <p className="flex items-center text-sm text-white gap-3">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-sm text-white gap-3">
                    <BsStopwatch />
                    <span> زمان مطالعه: 8 دقیقه</span>
                  </p>
                </div>
              </div>
            </figure>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
            <figure className="h-[23.5rem] rounded-lg relative">
              <img
                src="/images/magazine2.jpg"
                alt="magazineBlogl"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute bg-greyTransparent backdrop-blur-[30px] w-[80%] p-4 rounded-lg bottom-8  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-xl">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-8">
                  <p className="flex items-center text-sm text-white gap-3">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-sm text-white gap-3">
                    <BsStopwatch />
                    <span> زمان مطالعه: 8 دقیقه</span>
                  </p>
                </div>
              </div>
            </figure>
            <figure className="h-[23.5rem] rounded-lg relative">
              <img
                src="/images/magazine3.jpg"
                alt="magazineBlogl"
                className=" rounded-lg object-fill w-full h-full"
              />
              <div className="absolute bg-greyTransparent backdrop-blur-[30px]  w-[80%] p-4 rounded-lg bottom-8  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-xl">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-8">
                  <p className="flex items-center text-sm text-white gap-3">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-sm text-white gap-3">
                    <BsStopwatch />
                    <span> زمان مطالعه: 8 دقیقه</span>
                  </p>
                </div>
              </div>
            </figure>
          </div>
          <div className="col-span-12 lg:col-span-4 ">
            <figure className="rounded-lg h-[50rem] relative">
              <img
                src="/images/magazine4.jpg"
                alt="magazineBlogl"
                className=" rounded-lg object-cover h-full"
              />
              <div className="absolute bg-greyTransparent backdrop-blur-[30px] w-[80%] p-4 rounded-lg bottom-8  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-xl">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-8">
                  <p className="flex items-center text-sm text-white gap-3">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-sm text-white gap-3">
                    <BsStopwatch />
                    <span> زمان مطالعه: 8 دقیقه</span>
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MagazineSectionHome;
