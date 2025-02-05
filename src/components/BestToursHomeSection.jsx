import BestToursHome from "./BestToursHome";
import SectionHeaders from "./utils/SectionHeaders";
import ViewAllLink from "./utils/ViewAllLink";

function BestToursHomeSection() {
  return (
    <section className="tourHome section   max-w-container mx-auto">
      <SectionHeaders
        title="تور های مسافرتی مهر پرواز"
        description="جدید ترین و پرطرفدار ترین تور های گردشگری مهرپرواز"
      >
        <ViewAllLink />
      </SectionHeaders>
      <BestToursHome />
    </section>
  );
}

export default BestToursHomeSection;
