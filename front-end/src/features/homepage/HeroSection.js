import styles from "./css/HeroSection.module.css";
import heroImage from "../../assets/images/website/hero-images.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <img loading="lazy" src={heroImage} alt="hero section" />
      <div className={styles.heroContent}>
        <div className={styles.title}>
          LET'S MAKE YOUR NAIL AS UNIQUE AS YOU
        </div>
        <Link to="/appointments" className={styles.linkBtn}>
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
};
export default HeroSection;
