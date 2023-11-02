import React, { useEffect, useState } from "react";
import styles from "./css/ServicePage.module.css";
import ServiceImageBGLeft1 from "../assets/images/website/ServiceBGLeft.png";
import ServiceImageBGRight1 from "../assets/images/website/ServiceBGRight.png";
import bannerImage from "../assets/images/service/NailServiceBanner3.png";
import {
  menuData,
  menuLabels,
} from "../features/servicepage2/data/ServiceData";
import ServiceGridLayout from "../features/servicepage2/ServiceGridLayout";
import ServiceFilterDropdown from "../features/servicepage2/ServiceFilterDropdown";

import ServicePagination from "../features/servicepage2/ServicePagination";
import ServiceSearchBox from "../features/servicepage2/ServiceSearchBox";
import ServiceManicureSection from "../features/servicepage2/ServiceManicureSection";
import PedicureServiceSection from "../features/servicepage2/PedicureServiceSection";
import EyelashServiceSection from "../features/servicepage2/EyelashServiceSection";

const ServicePage = () => {
  const [filter, setFilter] = useState("All");
  const [filteredServices, setFilteredServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const servicesPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let results = [...menuData];

    // Filter based on type if not "All"
    if (filter !== "All") {
      results = results.filter((service) => service.type === filter);
    }

    // Filter based on search term
    results = results.filter(
      (service) =>
        service.title &&
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(results);

    setFilteredServices(results);
    setTotalPages(Math.ceil(results.length / servicesPerPage));
  }, [filter, searchTerm]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const endIndex = currentPage * servicesPerPage;
  const startIndex = endIndex - servicesPerPage;
  const displayedServices = filteredServices.slice(startIndex, endIndex);

  return (
    <div className={styles.wrapper}>
      <img src={bannerImage} alt="Service Banner" className={styles.banner} />
      <div className={styles.nailServiceContainer}>
        <div className={styles.serviceContent}>
          <img
            src={ServiceImageBGLeft1}
            className={styles.imageBackgroundLeft}
            alt="bg left"
          ></img>
          <img
            src={ServiceImageBGRight1}
            className={styles.imageBackgroundRight}
            alt="bg left"
          ></img>
          <div className={styles.wrapperTitle}>
            <h2>Nail Services</h2>
          </div>
          <div className={styles.filterSection}>
            <ServiceSearchBox
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ServiceFilterDropdown
              menuLabels={menuLabels}
              onFilterChange={handleFilterChange}
            />
          </div>
          <ServiceGridLayout services={displayedServices} />
          <ServicePagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className={styles.serviceContent}>
        <img
          src={ServiceImageBGLeft1}
          className={styles.imageBackgroundLeft}
          alt="bg left"
        ></img>
        <img
          src={ServiceImageBGRight1}
          className={styles.imageBackgroundRight}
          alt="bg left"
        ></img>
        <div className={styles.wrapperTitle}>
          <h2>Manicure</h2>
        </div>
        <ServiceManicureSection />
      </div>
      <div className={styles.serviceContent}>
        <img
          src={ServiceImageBGLeft1}
          className={styles.imageBackgroundLeft}
          alt="bg left"
        ></img>
        <img
          src={ServiceImageBGRight1}
          className={styles.imageBackgroundRight}
          alt="bg left"
        ></img>
        <div className={styles.wrapperTitle}>
          <h2>Pedicure</h2>
        </div>
        <PedicureServiceSection />
      </div>

      <div className={styles.serviceContent}>
        <img
          src={ServiceImageBGLeft1}
          className={styles.imageBackgroundLeft}
          alt="bg left"
        ></img>
        <img
          src={ServiceImageBGRight1}
          className={styles.imageBackgroundRight}
          alt="bg left"
        ></img>
        <div className={styles.wrapperTitle}>
          <h2>Eyelash</h2>
        </div>
        <EyelashServiceSection />
      </div>
    </div>
  );
};

export default ServicePage;
