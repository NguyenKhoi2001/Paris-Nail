import React from "react";
import styles from "./css/ServiceSearchBox.module.css";

const ServiceSearchBox = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search services..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className={styles.searchInput}
  />
);

export default ServiceSearchBox;
