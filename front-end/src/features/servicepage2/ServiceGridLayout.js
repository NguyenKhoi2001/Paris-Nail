import React from "react";
import styles from "./css/ServiceGridLayout.module.css";
import ServiceCardItem from "./ServiceCardItem";

const ServiceGridLayout = ({ services }) => {
  return (
    <div className={styles.grid}>
      {services &&
        services.length > 0 &&
        services.map((item) => (
          <ServiceCardItem
            key={`${item.title}-${item.type}`}
            serviceName={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
    </div>
  );
};

export default ServiceGridLayout;
