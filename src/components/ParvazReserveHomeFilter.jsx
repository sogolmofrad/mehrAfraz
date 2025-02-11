import { FaAngleDown } from "react-icons/fa6";
function ParvazReserveHomeFilter() {
  return (
    <div className="mt-[2rem] flex text-[1.4rem] text-grey gap-[1rem] font-thin">
      <button className="flex items-center gap-[7px] py-[1rem] px-[2rem] border-2 border-greyExtraLight hover:border-mainPrimary hover:text-mainPrimary rounded-[3.2rem]">
        <span>یک طرفه</span>
        <FaAngleDown />
      </button>
      <button className="flex items-center gap-[7px] py-[1rem] px-[2rem] border-2 border-greyExtraLight hover:border-mainPrimary hover:text-mainPrimary rounded-[3.2rem]">
        <span>اکونومی</span>
        <FaAngleDown />
      </button>
      <button className="flex items-center gap-[7px] py-[1rem] px-[2rem] border-2 border-greyExtraLight hover:border-mainPrimary hover:text-mainPrimary rounded-[3.2rem]">
        <span>بازه مقایسه ای</span>
        <FaAngleDown />
      </button>
    </div>
  );
}

export default ParvazReserveHomeFilter;
