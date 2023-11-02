import React from "react";
import styles from "./css/HorizontalServiceCard.module.css";

const HorizontalEyelashCardRight = ({
  image,
  serviceName,
  prices,
  description,
}) => {
  return (
    <div className={styles.itemContainer}>
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
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={serviceName} />
      </div>
    </div>
  );
};

export default HorizontalEyelashCardRight;
