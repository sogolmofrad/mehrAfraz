import { Link } from "react-router";

function AdvertSectionHome() {
  return (
    <section className="tourHome section   max-w-container mx-auto">
      <div className="flex gap-base">
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
