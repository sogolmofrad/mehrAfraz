import { useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import ViewAllLink from "./utils/ViewAllLink";

function AdvertiseWithVideoHome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function toggleVideoPlay() {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <section className="section  max-w-container mx-auto flex justify-between items-center">
      <div className="sectionDescription w-[50%] flex flex-col gap-[2rem] justify-between items-start">
        <h2 className="text-[3.2rem] font-bold">تجربه سفری به یاد ماندنی!</h2>
        <p className="text-justify text-[1.8rem]/[3.6rem] font-light">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <ViewAllLink />
      </div>
      <div className="w-[40%] relative">
        <video
          ref={videoRef}
          className="w-full rounded-[3.2rem]"
          src="/videos/ad1-video.mp4"
          playsInline
          loop
          muted
        />
        <button
          onClick={toggleVideoPlay}
          className="absolute inset-0 text-white flex items-center justify-center"
        >
          <IoPlayOutline className="text-[8.5rem]" />;
        </button>
      </div>
    </section>
  );
}

export default AdvertiseWithVideoHome;
