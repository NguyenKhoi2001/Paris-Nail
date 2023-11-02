import React from "react";
import styles from "./css/ServicePagination.module.css";

const ServicePagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className={styles.pagination}>
    {currentPage > 1 && (
      <button onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
    )}
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={currentPage === index + 1 ? styles.activePage : ""}
      >
        {index + 1}
      </button>
    ))}
    {currentPage < totalPages && (
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
    )}
  </div>
);

export default ServicePagination;
