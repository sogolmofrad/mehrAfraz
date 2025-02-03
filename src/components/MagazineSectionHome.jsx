import React from "react";
import SectionHeaders from "./SectionHeaders";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { BsStopwatch } from "react-icons/bs";
function MagazineSectionHome() {
  return (
    <section className="section mt-[10rem] px-[10rem] max-w-[1400px] mx-auto">
      <SectionHeaders
        title="مجله گردشگری"
        description="تازه ترین خبر ها و مقالات سفر"
      >
        <button className="text-[1.6rem] text-redPrimary flex items-center px-[1rem] py-[5px] rounded-[2.4rem] border-2 border-redPrimary hover:text-redSecondary hover:border-redSecondary">
          <span>مشاهده همه</span>
          <span className="mr-[1rem]">
            <FaArrowLeftLong />
          </span>
        </button>
      </SectionHeaders>
      <div className="container mx-auto max-w-[1200px] mt-[10rem]">
        <div className="grid grid-cols-12 gap-[3rem]">
          <div className="col-span-12 lg:col-span-4 ">
            <figure className="rounded-[2.4rem] h-[50rem] relative">
              <img
                src="/images/magazine1.png"
                alt="magazineBlogl"
                className=" rounded-[2.4rem] object-cover h-full"
              />
              <div className="absolute bg-greyTransparent w-[80%] p-[1rem] rounded-[2.4rem] bottom-[2rem]  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-[2rem]">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-[2rem]">
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
                    <BsStopwatch />
                    <span> زمان مطالعه: 8 دقیقه</span>
                  </p>
                </div>
              </div>
            </figure>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
            <figure className="h-[23.5rem] rounded-[2.4rem] relative">
              <img
                src="/images/magazine2.jpg"
                alt="magazineBlogl"
                className="rounded-[2.4rem] object-cover w-full h-full"
              />
              <div className="absolute bg-greyTransparent w-[80%] p-[1rem] rounded-[2.4rem] bottom-[2rem]  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-[2rem]">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-[2rem]">
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
                    <BsStopwatch />
                    <span> زمان مطالعه: 8 دقیقه</span>
                  </p>
                </div>
              </div>
            </figure>
            <figure className="h-[23.5rem] rounded-[2.4rem] relative">
              <img
                src="/images/magazine3.jpg"
                alt="magazineBlogl"
                className=" rounded-[2.4rem] object-fill w-full h-full"
              />
              <div className="absolute bg-greyTransparent w-[80%] p-[1rem] rounded-[2.4rem] bottom-[2rem]  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-[2rem]">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-[2rem]">
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
                    <BsStopwatch />
                    <span> زمان مطالعه: 8 دقیقه</span>
                  </p>
                </div>
              </div>
            </figure>
          </div>
          <div className="col-span-12 lg:col-span-4 ">
            <figure className="rounded-[2.4rem] h-[50rem] relative">
              <img
                src="/images/magazine4.jpg"
                alt="magazineBlogl"
                className=" rounded-[2.4rem] object-cover h-full"
              />
              <div className="absolute bg-greyTransparent w-[80%] p-[1rem] rounded-[2.4rem] bottom-[2rem]  left-1/2 transform -translate-x-1/2">
                <p className="text-white text-[2rem]">
                  موزه متروپولیتن نیویورک؛ جهانی تودرتو از قرون وسطی تا امروز
                </p>
                <div className="flex mt-[2rem]">
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
                    <LuUserRound />
                    <span>سارا احمدی</span>
                  </p>
                  <p className="flex items-center text-[1.4rem] text-white gap-[0.8rem]">
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
