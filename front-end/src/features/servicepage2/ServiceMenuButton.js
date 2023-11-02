import React from "react";
import styles from "./css/ServiceMenuButton.module.css";

const ServiceMenuButton = ({ isActive, label, onClick }) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ServiceMenuButton;
