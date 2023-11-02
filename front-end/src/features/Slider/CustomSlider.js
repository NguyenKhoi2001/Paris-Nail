import React, { useEffect, useState } from "react";
import styles from "./CustomSlider.module.css";

const CustomSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (moveTo) => {
    if (moveTo >= images.length) moveTo = 0;
    if (moveTo < 0) moveTo = images.length - 1;

    setCurrentSlide(moveTo);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + 1;
        return nextSlide >= images.length ? 0 : nextSlide;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

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
        onClick={() => changeSlide(currentSlide - 1)}
      ></div>
      <div
        className={styles.rightButton}
        onClick={() => changeSlide(currentSlide + 1)}
      ></div>

      <div className={styles.imageChangeButtonsContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={
              currentSlide === index
                ? `${styles.imageChangeButtons} ${styles.active}`
                : styles.imageChangeButtons
            }
            onClick={() => changeSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
