import React from "react";
import styles from "./css/HorizontalServiceCard.module.css";

const HorizontalEyelashCard = ({ image, serviceName, prices, description }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img loading="lazy" src={image} alt={serviceName} />
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
      </div>
    </div>
  );
};

export default HorizontalEyelashCard;
