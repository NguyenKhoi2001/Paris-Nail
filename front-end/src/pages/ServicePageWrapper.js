import React, { useState } from "react";
import styles from "./css/ServicePageWrapper.module.css";
import ServiceMenuButton from "../features/servicepage2/ServiceMenuButton";
import ServiceMenuList from "../features/servicepage2/ServiceMenuList";
import EyelashMenuList from "../features/servicepage2/EyelashMenuList";

import ServiceImageBGLeft1 from "../assets/images/website/ServiceBGLeft.png";
import ServiceImageBGRight1 from "../assets/images/website/ServiceBGRight.png";
import ServiceImageBGLeft2 from "../assets/images/website/ServiceBGLeft2.png";
import ServiceImageBGRight2 from "../assets/images/website/ServiceBGRight2.png";

import bannerImage from "../assets/images/service/NailServiceBanner3.png";

import {
  menuData,
  eyelashData,
} from "../features/servicepage2/data/ServiceData";

const ServicePageWrapper = () => {
  const [activeMenu, setActiveMenu] = useState(menuData[0].label);
  const [activeEyelash, setActiveEyelash] = useState(eyelashData[0].label);

  return (
    <div className={styles.wrapper}>
      <img src={bannerImage} alt="Service Banner" className={styles.banner} />
      <div className={styles.nailServiceContainer}>
        <img
          className={styles.imageBackgroundLeft}
          src={ServiceImageBGLeft1}
          alt="Background 1"
        />
        <img
          className={styles.imageBackgroundRight}
          src={ServiceImageBGRight1}
          alt="Background 2"
        />
        <div className={styles.serviceContent}>
          <div className={styles.wrapperTitle}>
            <h2>Nail Services</h2>
          </div>
          <div className={styles.buttonsContainer}>
            {menuData.map(({ label }) => (
              <ServiceMenuButton
                key={label}
                label={label}
                isActive={activeMenu === label}
                onClick={() => setActiveMenu(label)}
              />
            ))}
          </div>
          {menuData.map(({ label, items }) => (
            <ServiceMenuList
              key={label}
              items={items}
              isVisible={activeMenu === label}
            />
          ))}
        </div>
      </div>

      <div className={styles.eyelashContainer}>
        <img
          className={styles.imageBackgroundLeft}
          src={ServiceImageBGLeft2}
          alt="Background 1"
        />
        <img
          className={styles.imageBackgroundRight}
          src={ServiceImageBGRight2}
          alt="Background 2"
        />
        <div className={styles.serviceContent}>
          <div className={styles.wrapperTitle}>
            <h2>Eyelash Menu</h2>
          </div>
          <div className={styles.buttonsContainer}>
            {eyelashData.map(({ label }) => (
              <ServiceMenuButton
                key={label}
                label={label}
                isActive={activeEyelash === label}
                onClick={() => setActiveEyelash(label)}
              />
            ))}
          </div>
          {eyelashData.map(({ label, itemsData, description, img }) => (
            <EyelashMenuList
              key={label}
              itemsData={itemsData}
              description={description}
              img={img}
              isVisible={activeEyelash === label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePageWrapper;
