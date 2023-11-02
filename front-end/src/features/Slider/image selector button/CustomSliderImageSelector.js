import React, { useEffect } from "react";
import styles from "./CustomSliderImageSelector.module.css";

const CustomSliderImageSelector = ({ images, currentSlide, changeSlide }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, currentSlide, changeSlide]);
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              currentSlide === index
                ? `${styles.slide} ${styles.active}`
                : styles.slide
            }
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div
        className={styles.leftButton}
        onClick={() =>
          changeSlide((currentSlide - 1 + images.length) % images.length)
        }
      ></div>
      <div
        className={styles.rightButton}
        onClick={() => changeSlide((currentSlide + 1) % images.length)}
      ></div>
    </div>
  );
};

export default CustomSliderImageSelector;
