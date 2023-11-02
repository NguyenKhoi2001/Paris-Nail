import React from "react";
// import { Link } from "react-router-dom";
import styles from "./css/AboutUsSection.module.css";

import BrandAndColorImage from "../../assets/images/website/brand-color.jpg";
import comfortImage from "../../assets/images/website/comfort.jpg";
import catchingTrendImage from "../../assets/images/website/catching-trend.png";
import qualityImage from "../../assets/images/website/quality.jpg";

const AboutUsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About Us</div>

      <div className={styles.rowLeft}>
        <div className={styles.image}>
          <img loading="lazy" src={BrandAndColorImage} alt="brand and color" />
        </div>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Many Brands and Colors</div>
          <div className={styles.text}>
            We understand that selecting nail polish is about more than just
            color and appearance. It's about trust in a product that lives up to
            our standards for quality, durability, and branding. Before choosing
            any single item , we always questioning ourselves "That IS what we
            should, will serve our customers. This isn't just what we do; it's
            what we believe in.
          </div>
        </div>
      </div>

      <div className={styles.rowRight}>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Catching Trend</div>
          <div className={styles.text}>
            At this point, we can see that our society changes quickly; there
            are some bad , yet there are a lot of good ones, too. Especially in
            the nail industry, where we have to change and adapt every single
            day, so we have the ability to meet the needs of our customers. If
            you need an advice on it , we will not hesitate to take the lead and
            help you what trending nails will work best for you. No worries if
            you're trendy or not – we've got you.
          </div>
        </div>
        <div className={styles.image}>
          <img loading="lazy" src={catchingTrendImage} alt="catching trend" />
        </div>
      </div>

      <div className={styles.title}>Our Mission</div>

      <div className={styles.rowLeft}>
        <div className={styles.image}>
          <img loading="lazy" src={comfortImage} alt="comfort come first" />
        </div>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Comfort First, Always!</div>
          <div className={styles.text}>
            Different places have different qualities, and each finds its own
            audience. Whether expensive or cheap, renowned or simple, every
            place has something unique to offer.With us, atmosphere is our
            priority. The smell, the space, the staff, the first impression –
            all the small things matter here. In our Asian culture, you're not
            only our customer; you are our guest.
          </div>
        </div>
      </div>

      <div className={styles.rowRight}>
        <div className={styles.textContent}>
          <div className={styles.subTitle}>Next, Come Quality</div>
          <div className={styles.text}>
            The nail set should be as significant as the clothes we wear,
            whether dressing up for special occasions or simply expressing our
            individuality. These are the principles that guide us, and what we
            strive to improve every day for our customers.
          </div>
        </div>
        <div className={styles.image}>
          <img loading="lazy" src={qualityImage} alt="quality" />
        </div>
      </div>

      {/* <div className={styles.viewMoreBtn}>
        <Link>View More</Link>
      </div> */}
    </div>
  );
};

export default AboutUsSection;
