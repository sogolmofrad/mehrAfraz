import { Link } from "react-router";

function AdvertSectionHome() {
  return (
    <section className="section advertiseHome my-[10rem] px-[7rem]">
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
