// CardComponent.js
import React from "react";
import styles from "./css/ServiceCardItem.module.css";

const ServiceCardItem = ({ serviceName, price, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img loading="lazy" src={img} alt={serviceName} />
      </div>
      <div className={styles.cardContent}>
        {price && (
          <p className={styles.description}>
            <span className={styles.priceValue}>${price}</span>
          </p>
        )}
        <h3 className={styles.title}>{serviceName}</h3>
      </div>
    </div>
  );
};

export default ServiceCardItem;
