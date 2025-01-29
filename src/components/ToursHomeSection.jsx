import SectionHeaders from "./SectionHeaders";
import ToursHome from "./ToursHome";

function ToursHomeSection() {
  return (
    <section className="tourHome section mt-[7rem] px-[7rem]">
      <SectionHeaders
        title="تور های مسافرتی مهر پرواز"
        description="جدید ترین و پرطرفدار ترین تور های گردشگری مهرپرواز"
      />
      <ToursHome />
    </section>
  );
}

export default ToursHomeSection;
