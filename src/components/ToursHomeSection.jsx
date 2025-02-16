import SectionHeaders from "./utils/SectionHeaders";
import ToursHome from "./ToursHome";
import ViewAllLink from "./utils/ViewAllLink";

function ToursHomeSection() {
  return (
    <section className="tourHome section  max-w-container  mx-auto">
      <SectionHeaders
        title="تور های مسافرتی مهر پرواز"
        description="جدید ترین و پرطرفدار ترین تور های گردشگری مهرپرواز"
      >
        <ViewAllLink />
      </SectionHeaders>
      <ToursHome />
    </section>
  );
}

export default ToursHomeSection;
