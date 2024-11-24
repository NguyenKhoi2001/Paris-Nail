import AboutUsSection from "../features/homepage/AboutUsSection";
import HeroSection from "../features/homepage/HeroSection";
import JobSlider from "../features/homepage/JobSlider";
import NewInspirationHub from "../features/homepage/NewInspirationHub";
import ServiceOfferSection from "../features/homepage/ServiceOfferSection";
import "./css/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <JobSlider />
      <ServiceOfferSection />
      <AboutUsSection />
      <NewInspirationHub />
    </div>
  );
};
export default Homepage;
