import SectionHeaders from "./SectionHeaders";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function SpecialHotelsSectionHome({ hotel }) {
  return (
    <section className="mt-[10rem] px-[7rem]">
      <SectionHeaders
        title={`هتل های ویژه ${hotel.name}`}
        description="با بزرگترین مقصدهای گردشگری جهان و آداب و رسوم و فرهنگ هایش آشنا شوید"
      ></SectionHeaders>
      <div className="flex mt-[5rem]">
        <div>
          <figure className="relative w-[32rem] h-[42rem]">
            <figcaption className="absolute inset-0 flex flex-col  justify-center items-center text-white z-10 gap-[1rem]">
              <p className="text-[1.4rem]">مشاهده همه هتل های</p>
              <h2 className="text-[1.8rem] font-bold">{hotel.name}</h2>
              <FaArrowUpRightFromSquare className="text-[2.4rem]" />
            </figcaption>
            <img
              src={hotel.primaryImage}
              alt="hotel"   
              className="w-full h-full rounded-[3.2rem]"
            />
            <div className="absolute inset-0 bg-linear-red rounded-[2.4rem]"></div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default SpecialHotelsSectionHome;
