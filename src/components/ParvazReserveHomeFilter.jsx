import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
function ParvazReserveHomeFilter() {
  const [way, setWay] = useState("oneWay");
  return (
    <div className="mt-8 flex text-sm text-grey gap-4 font-thin">
      <select
        className="flex items-center gap-3 py-4 px-8 border-2 border-greyExtraLight hover:border-mainPrimary hover:text-mainPrimary rounded-xl"
        onChange={(e) => setWay(e.target.value)}
      >
        <option value="oneWay">یک طرفه</option>
        <option value="twoWay">دو طرفه</option>
      </select>
    </div>
  );
}

export default ParvazReserveHomeFilter;
