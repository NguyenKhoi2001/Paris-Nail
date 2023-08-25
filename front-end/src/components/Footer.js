import React from "react";
import styles from "./css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftContent}>
        © Copyright 2023 Paris Nail <br />
        All Rights Reserved.
      </div>
      <div className={styles.rightContent}>
        <span>Follow Us: </span>
        <div className={styles.iconDisplay}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
