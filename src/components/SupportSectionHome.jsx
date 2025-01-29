import { BiSupport } from "react-icons/bi";
import { PiDevicesLight } from "react-icons/pi";
import { IoCloudDoneOutline } from "react-icons/io5";
function SupportSectionHome() {
  return (
    <section className="section p-[7rem]  mt-[10rem] bg-white">
      <div className="flex justify-between w-[80%] items-center mx-auto px-[1rem]">
        <div className="flex flex-col items-center gap-[2rem]">
          <BiSupport className="text-[4rem] text-redPrimary" />
          <h3 className="text-[1.6rem] font-bold">پشتیبانی 24ساعته</h3>
          <p className="text-[1.4rem] text-grey">
            در هر ساعت از شبانه روز با ما تماس بگیرید
          </p>
        </div>
        <div className="flex flex-col items-center gap-[2rem]">
          <PiDevicesLight className="text-[4rem] text-redPrimary" />
          <h3 className="text-[1.6rem] font-bold">ارائه تمای خدمات پرواز</h3>
          <p className="text-[1.4rem] text-grey">
            ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)
          </p>
        </div>
        <div className="flex flex-col items-center gap-[2rem]">
          <IoCloudDoneOutline className="text-[4rem] text-redPrimary" />
          <h3 className="text-[1.6rem] font-bold">ارائه تمای خدمات پرواز</h3>
          <p className="text-[1.4rem] text-grey">
            ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)
          </p>
        </div>
      </div>
    </section>
  );
}

export default SupportSectionHome;
