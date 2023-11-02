import React from "react";
import styles from "./css/GalleryPage.module.css";
import GalleryImage1 from "../assets/images/nail/Gallery1.jpg";
import GalleryImage2 from "../assets/images/nail/Gallery2.jpg";
import GalleryImage3 from "../assets/images/nail/Gallery3.jpg";
import GalleryImage4 from "../assets/images/nail/Gallery4.jpg";
import GalleryImage5 from "../assets/images/nail/Gallery5.jpg";
import GalleryImage6 from "../assets/images/nail/Gallery6.jpg";
import GalleryImage7 from "../assets/images/nail/Gallery7.jpg";
import GalleryImage8 from "../assets/images/nail/Gallery8.jpg";
import GalleryImage9 from "../assets/images/nail/Gallery9.jpg";

const GalleryPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Best Gallery</div>
      <div className={styles.galleryGrid}>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage1} alt="Nail 1" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage2} alt="Nail 2" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage3} alt="Nail 3" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage4} alt="Nail 4" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage5} alt="Nail 5" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage6} alt="Nail 6" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage7} alt="Nail 7" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage8} alt="Nail 8" />
        </div>
        <div className={styles.card}>
          <img loading="lazy" src={GalleryImage9} alt="Nail 9" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
