import BestToursHome from "./BestToursHome";
import SectionHeaders from "./SectionHeaders";
import { FaArrowLeftLong } from "react-icons/fa6";
function BestToursHomeSection() {
  return (
    <section className="tourHome section mt-[7rem] px-[7rem]">
      <SectionHeaders
        title="تور های مسافرتی مهر پرواز"
        description="جدید ترین و پرطرفدار ترین تور های گردشگری مهرپرواز"
      >
        <button className="text-[1.6rem] text-redPrimary flex items-center px-[1rem] py-[5px] rounded-[2.4rem] border-2 border-redPrimary hover:text-redSecondary hover:border-redSecondary">
          <span>مشاهده همه</span>
          <span className="mr-[1rem]">
            <FaArrowLeftLong />
          </span>
        </button>
      </SectionHeaders>
      <BestToursHome />
    </section>
  );
}

export default BestToursHomeSection;
