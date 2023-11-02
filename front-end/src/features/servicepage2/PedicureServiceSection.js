import React from "react";
import styles from "./css/PedicureServiceSection.module.css";

import { pedicureServices } from "./data/ServiceData";
import PedicureItemSwiper from "../Slider/PedicureItemSwiper";
import PedicureScentList from "./PedicureScentList";

const PedicureServiceSection = () => {
  return (
    <div>
      <div className={styles.pedicureContainer}>
        <p className={styles.guidance}>Swipe to see more</p>
        <PedicureItemSwiper data={pedicureServices}></PedicureItemSwiper>
      </div>
      <PedicureScentList />
    </div>
  );
};

export default PedicureServiceSection;
