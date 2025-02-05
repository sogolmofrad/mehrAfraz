import SectionHeaders from "./utils/SectionHeaders";
import ToursHome from "./ToursHome";

function ToursHomeSection() {
  return (
    <section className="tourHome section  max-w-container  mx-auto">
      <SectionHeaders
        title="تور های مسافرتی مهر پرواز"
        description="جدید ترین و پرطرفدار ترین تور های گردشگری مهرپرواز"
      />
      <ToursHome />
    </section>
  );
}

export default ToursHomeSection;
