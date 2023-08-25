import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Navbar.module.css";
import logo from "../assets/images/website/Logo.png";

const Navbar = ({ isHomepage }) => {
  const navClasses = isHomepage
    ? styles.nav
    : `${styles.nav} ${styles.different}`;

  return (
    <nav className={navClasses}>
      <div className={styles.logo}>
        <Link to="/">
          <div className={styles.text}>
            P
            <span className={styles.logoContainer}>
              <img src={logo} alt="logo" />
            </span>
            RIS NAILS
          </div>
        </Link>
      </div>

      <div className={styles.links}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/appointments">Appointments</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}></div>
    </nav>
  );
};

export default Navbar;
