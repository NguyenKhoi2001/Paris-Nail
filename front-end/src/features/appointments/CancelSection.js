import React from "react";
import styles from "./css/CancelSection.module.css";

function CancelSection() {
  return (
    <div className={styles.cancelSection}>
      <div className={styles.title}>HELP US WITH CANCELLATION</div>
      <div className={styles.lineBreak}></div>
      <div className={styles.subTitle}>CANCELLATION POLICY</div>
      <p className={styles.description}>
        WE ASK THAT YOU GIVE US 24 HOURS NOTICE IF YOU NEED TO CANCEL YOUR
        APPOINTMENT.
      </p>
      <div className={styles.subTitle}>Paris Nails</div>
      <div className={styles.infoSection}>
        <div className={styles.left}>
          <div className={styles.subTitle}>Meet US at</div>
          <p>
            816 E PRINCETON DR SUITE 102,
            <br />
            PRINCETON, TX 75407
            <br />
            OR 945-241-5962
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.subTitle}>Hours</div>
          <p>
            <span className={styles.date}>MON-FRI</span> 10:00 am – 07:30 pm
            <br />
            <span className={styles.date}>SAT</span> 09:30 am – 06:00 pm
            <br />
            <span className={styles.date}>SUN</span> 11:00 am – 05:00 pm
          </p>
        </div>
      </div>
    </div>
  );
}

export default CancelSection;
