import React from "react";
import styles from "./css/AboutUsSection.module.css";

import BrandAndColorImage from "../../assets/images/website/brand-color.jpg";
import comfortImage from "../../assets/images/website/comfort.jpg";
import catchingTrendImage from "../../assets/images/website/catching-trend.png";
import qualityImage from "../../assets/images/website/quality.jpg";

const AboutUsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About Us</div>

      <div className={styles.row}>
        <div className={styles.image}>
          <img loading="lazy" src={BrandAndColorImage} alt="brand and color" />
        </div>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Many Brands and Colors</div>
          <div className={styles.text}>
            We understand that selecting nail polish is about more than just
            color and appearance. It's about trust in a product that lives up to
            our standards for quality, durability, and branding. Before choosing
            any single item, we always question ourselves, "Is this what we
            should serve our customers?" This isn't just what we do; it's what
            we believe in.
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Catching Trend</div>
          <div className={styles.text}>
            Our society changes quickly, and the nail industry is no exception.
            We adapt every day to meet the needs of our customers. Whether
            you're trendy or not, we’ll help you find the best options for your
            nails.
          </div>
        </div>
        <div className={styles.image}>
          <img loading="lazy" src={catchingTrendImage} alt="catching trend" />
        </div>
      </div>

      <div className={styles.title}>Our Mission</div>

      <div className={styles.row}>
        <div className={styles.image}>
          <img loading="lazy" src={comfortImage} alt="comfort comes first" />
        </div>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Comfort First, Always!</div>
          <div className={styles.text}>
            We prioritize atmosphere above all else. Whether it's the smell, the
            space, or the staff, every little detail matters. In our Asian
            culture, you're not just a customer; you're our guest.
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Next, Come Quality</div>
          <div className={styles.text}>
            Just like the clothes we wear, the nail set should express our
            individuality and be a reflection of our personality. This is what
            guides us in offering the highest quality products for our
            customers.
          </div>
        </div>
        <div className={styles.image}>
          <img loading="lazy" src={qualityImage} alt="quality" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
