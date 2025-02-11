import { useEffect, useState } from "react";
import AdvertiseWithVideoHome from "../components/AdvertiseWithVideoHome";
import AdvertSectionHome from "../components/AdvertSectionHome";
import BestToursHomeSection from "../components/BestToursHomeSection";
import DestinationsSectionHome from "../components/DestinationsSectionHome";
import Header from "../components/layout/Header";
import HomeSliderSection from "../components/HomeSliderSection";
import SpecialHotelsSectionHome from "../components/SpecialHotelsSectionHome";
import SupportSectionHome from "../components/SupportSectionHome";
import ToursHomeSection from "../components/ToursHomeSection";

import Footer from "../components/layout/Footer";

import MembershipSectionHome from "../components/MembershipSectionHome";
import MagazineSectionHome from "../components/MagazineSectionHome";
import AboutSection from "../components/AboutSection";
import QuestionAnswerSection from "../components/QuestionAnswerSection";

function Home() {
  const [hotels, setHotels] = useState([]);
  useEffect(function () {
    async function fetchHotels() {
      try {
        const res = await fetch("/data/hotels.json");
        const data = await res.json();
        setHotels(data);
      } catch (error) {
        console.log("there was an error" + error);
      }
    }
    fetchHotels();
  }, []);

  return (
    <div>
      <HomeSliderSection />
      <ToursHomeSection />
      <SupportSectionHome />
      <BestToursHomeSection />
      <AdvertSectionHome />
      <DestinationsSectionHome />
      <AdvertiseWithVideoHome />
      {hotels &&
        hotels.map((hotel, i) => (
          <SpecialHotelsSectionHome hotel={hotel} key={i} />
        ))}
      <MembershipSectionHome />
      <MagazineSectionHome />
      <AboutSection />
      <QuestionAnswerSection />
    </div>
  );
}

export default Home;
