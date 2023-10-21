import React from "react";
import styles from "./css/ServicePage3.module.css";
import GalleryImage1 from "../assets/images/nail/Gallery1.jpg";

const ServicePage3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.serviceContainer}>
        <div className={styles.column}>
          <div className={styles.box}>
            <img
              src={GalleryImage1}
              alt="Service demo 1"
              className={styles.roundImage}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.textContainer}>
            <div className={styles.title}></div>
            <table className={styles.customTable}>
              <thead>
                <tr>
                  <td></td>
                  <td>Fullset</td>
                  <td>Fill</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Acrylic </td>
                  <td>$40</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>Acrylic With Gel </td>
                  <td>$58</td>
                  <td>$48</td>
                </tr>
                <tr>
                  <td>Solar Color </td>
                  <td>$50</td>
                  <td>$40</td>
                </tr>
                <tr>
                  <td>Solar Pink & White</td>
                  <td>$55</td>
                  <td>$45</td>
                </tr>
                <tr>
                  <td>Solar Omber </td>
                  <td>$55</td>
                  <td>$45</td>
                </tr>
                <tr>
                  <td>Pink </td>
                  <td></td>
                  <td>$35</td>
                </tr>
                <tr>
                  <td>White Tips </td>
                  <td>$45</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage3;
