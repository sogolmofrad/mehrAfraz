import { Link } from "react-router";

function AdvertSectionHome() {
  return (
    <section className="tourHome section mt-[7rem] px-[10rem] max-w-[1400px] mx-auto">
      <div className="flex gap-[1.6rem]">
        <Link to="">
          <figure>
            <img src="/images/ad1.png" alt="Advertisement" />
          </figure>
        </Link>
        <Link to="">
          <figure>
            <img src="/images/ad2.png" alt="Advertisement" />
          </figure>
        </Link>
      </div>
    </section>
  );
}

export default AdvertSectionHome;
