import React from "react";
import styles from "./ImageSelectorButtons.module.css";

const ImageSelectorButtons = ({ images, currentSlide, onSelect }) => {
  return (
    <div className={styles.imageChangeButtonsContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={
            currentSlide === index
              ? `${styles.imageChangeButtons} ${styles.active}`
              : styles.imageChangeButtons
          }
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default ImageSelectorButtons;
