import React, { useState, useEffect } from "react";
import styles from "./css/HeroSection.module.css";
import HeroImage1 from "../../assets/images/website/hero-images1.jpg";
import HeroImage2 from "../../assets/images/website/hero-images2.jpg";
import HeroImage3 from "../../assets/images/website/hero-images3.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const images = [HeroImage1, HeroImage2, HeroImage3]; // Add your hero images here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(6000); // Start with 6 seconds

  useEffect(() => {
    // Initially change image after 6 seconds
    const initialTimeout = setTimeout(() => {
      setIntervalTime(12000); // After the first change, set the interval to 12 seconds
    }, 6000); // 6 seconds before switching to 12 seconds

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => {
      clearTimeout(initialTimeout); // Clean up the initial timeout
      clearInterval(interval); // Clean up the interval
    };
  }, [images.length, intervalTime]); // Run effect when images or intervalTime changes

  return (
    <div className={styles.heroSection}>
      <div className={styles.imageSlider}>
        <img
          loading="lazy"
          src={images[currentImageIndex]}
          alt={`Hero ${currentImageIndex + 1}`}
          className={styles.heroImage}
        />
      </div>
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
