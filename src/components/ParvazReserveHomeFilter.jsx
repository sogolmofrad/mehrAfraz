import { FaAngleDown } from "react-icons/fa6";
function ParvazReserveHomeFilter() {
  return (
    <div className="mt-8 flex text-sm text-grey gap-4 font-thin">
      <button className="flex items-center gap-3 py-4 px-8 border-2 border-greyExtraLight hover:border-mainPrimary hover:text-mainPrimary rounded-xl">
        <span>یک طرفه</span>
        <FaAngleDown />
      </button>
    </div>
  );
}

export default ParvazReserveHomeFilter;
