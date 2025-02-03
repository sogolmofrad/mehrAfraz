import { useRef, useState } from "react";
import DesinationToursHome from "./DesinationToursHome";
import SectionHeaders from "./SectionHeaders";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";

function DestinationsSectionHome() {
  const tourContainerRef = useRef(null);
  const [activeButton, setActiveButton] = useState("right");

  const scrollToLeft = () => {
    // Scroll the container to the left
    if (tourContainerRef.current) {
      tourContainerRef.current.scrollTo({
        left: tourContainerRef.current.scrollLeft - 150,
        behavior: "smooth",
      });
    }
    setActiveButton("left");
  };

  const scrollToRight = () => {
    // Scroll the container to the right
    if (tourContainerRef.current) {
      tourContainerRef.current.scrollTo({
        left: tourContainerRef.current.scrollLeft + 150,
        behavior: "smooth",
      });
    }
    setActiveButton("right");
  };
  return (
    <section className="tourHome section mt-[7rem] px-[10rem] max-w-[1400px] mx-auto">
      <SectionHeaders
        title="مقاصد گردشگری مهرپرواز"
        description="با بزرگترین مقصدهای گردشگری جهان و آداب و رسوم و فرهنگ هایش  آشنا شوید"
      >
        <div className="flex gap-[1rem]">
          <button
            className={
              activeButton === "right"
                ? "activeSliderBtn w-[4rem] h-[4rem] bg-white  text-greyMediumLight rounded-full"
                : "w-[4rem] h-[4rem] bg-white  text-greyMediumLight rounded-full"
            }
            onClick={scrollToRight}
          >
            <FaArrowRightLong className="text-[1.rem] mx-auto text-greyMediumLight" />
          </button>
          <button
            className={
              activeButton === "left"
                ? "activeSliderBtn w-[4rem] h-[4rem] bg-white  text-greyMediumLight rounded-full"
                : "w-[4rem] h-[4rem] bg-white  text-greyMediumLight rounded-full"
            }
            onClick={scrollToLeft}
          >
            <FaArrowLeft className="text-[1.rem] mx-auto" />
          </button>
        </div>
      </SectionHeaders>
      <DesinationToursHome containerRef={tourContainerRef} />
    </section>
  );
}

export default DestinationsSectionHome;
