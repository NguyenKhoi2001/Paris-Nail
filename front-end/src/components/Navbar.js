import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Navbar.module.css";
import logo from "../assets/images/website/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isHomepage }) => {
  const navClasses = isHomepage
    ? styles.nav
    : `${styles.nav} ${styles.differentNav}`;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navContainer}>
      <nav className={navClasses}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Link to="/">
              <div className={styles.text}>
                P
                <span className={styles.logoContainer}>
                  <img loading="lazy" src={logo} alt="logo" />
                </span>
                RIS NAILS
              </div>
            </Link>
          </div>

          <div className={isMenuOpen ? styles.linksActive : styles.links}>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/price">
                <li>Menu Prices</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/appointments">
                <li>Appointments</li>
              </Link>
            </ul>
          </div>

          <div className={styles.menuIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
