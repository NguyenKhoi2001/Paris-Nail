import React, { useState } from "react";
import styles from "./css/CardWithImageSelector.module.css";
import CustomSliderImageSelector from "../Slider/image selector button/CustomSliderImageSelector";
import ImageSelectorButtons from "../Slider/image selector button/ImageSelectorButtons";

const CardWithImageSelector = ({
  images,
  serviceName,
  prices,
  description,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.sliderContainer}>
        <CustomSliderImageSelector
          images={images}
          currentSlide={currentSlide}
          changeSlide={changeSlide}
        />
      </div>
      <div className={styles.itemContent}>
        <div className={styles.titleSection}>
          <h3 className={styles.serviceName}>{serviceName}</h3>
          <div className={styles.priceSection}>
            {prices.map((price, index) => (
              <p key={index}>{price}</p>
            ))}
          </div>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <ImageSelectorButtons
          images={images}
          currentSlide={currentSlide}
          onSelect={changeSlide}
        />
      </div>
    </div>
  );
};

export default CardWithImageSelector;
