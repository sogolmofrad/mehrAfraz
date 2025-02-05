import { useRef, useState } from "react";
import DesinationToursHome from "./DesinationToursHome";
import SectionHeaders from "./utils/SectionHeaders";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import ViewAllLink from "./utils/ViewAllLink";

function DestinationsSectionHome() {
  return (
    <section className="tourHome section   max-w-container mx-auto">
      <SectionHeaders
        title="مقاصد گردشگری مهرپرواز"
        description="با بزرگترین مقصدهای گردشگری جهان و آداب و رسوم و فرهنگ هایش  آشنا شوید"
      >
        <ViewAllLink />
      </SectionHeaders>
      <DesinationToursHome />
    </section>
  );
}

export default DestinationsSectionHome;
