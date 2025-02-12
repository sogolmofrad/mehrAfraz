import { BiSupport } from "react-icons/bi";
import { PiDevicesLight } from "react-icons/pi";
import { IoCloudDoneOutline } from "react-icons/io5";
import IconTextBox from "./utils/IconTextBox";
function SupportSectionHome() {
  return (
    <section className="section w-full bg-white">
      <div className="flex justify-between max-w-container items-center mx-auto">
        <IconTextBox
          icon={<BiSupport />}
          heading="پشتیبانی 24 ساعته"
          paragraph="در هر ساعت از شبانه روز با ما تماس بگیرید"
        />
        <IconTextBox
          icon={<PiDevicesLight />}
          heading="ارائه تمای خدمات پرواز"
          paragraph="ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)"
        />

        <IconTextBox
          icon={<IoCloudDoneOutline />}
          heading="تضمین کیفیت سفر"
          paragraph="در هر ساعت از شبانه روز با ما تماس بگیرید"
        />
      </div>
    </section>
  );
}

export default SupportSectionHome;
