import ServiceImage1 from "../assets/images/website/ServiceAlt1.png";
import ServiceImage2a from "../assets/images/website/ServiceAlt2.1.png";
import ServiceImage2b from "../assets/images/website/ServiceAlt2.2.png";
import ServiceImage3a from "../assets/images/website/ServiceAlt3.1.png";
import ServiceImage3b from "../assets/images/website/ServiceAlt3.2.png";
import ServiceImage4 from "../assets/images/website/ServiceAlt4.png";
import ServiceImage5 from "../assets/images/website/ServiceAlt5.png";
import ServiceImage6 from "../assets/images/website/ServiceAlt6.png";
import ServiceImageBG1 from "../assets/images/website/ServiceAltBG1.png";
import ServiceImageBG2 from "../assets/images/website/ServiceAltBG2.png";
import ServiceImageBG3 from "../assets/images/website/ServiceAltBG3.png";
import ServiceImageBG4 from "../assets/images/website/ServiceAltBG4.png";
import ServiceImageBG5 from "../assets/images/website/ServiceAltBG5.png";
import ServiceImageBG6 from "../assets/images/website/ServiceAltBG6.png";
import styles from "./css/ServicePage.module.css";

const ServicePage2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContent}
          src={ServiceImage1}
          alt="service 1"
        />
        <img
          className={styles.imageBackground}
          src={ServiceImageBG1}
          alt="Background 1"
        />
      </div>

      <div className={styles.imageContainer}>
        <img
          className={styles.imageTitle}
          src={ServiceImage2a}
          alt="service 2"
        />
        <img
          className={styles.imageContent}
          src={ServiceImage2b}
          alt="service 2"
        />
        <img
          className={styles.imageBackground}
          src={ServiceImageBG2}
          alt="Background 2"
        />
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageTitle}
          src={ServiceImage3a}
          alt="service 3"
        />
        <img
          className={styles.imageContent}
          src={ServiceImage3b}
          alt="service 3"
        />
        <img
          className={styles.imageBackground}
          src={ServiceImageBG3}
          alt="Background 3"
        />
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContent}
          src={ServiceImage4}
          alt="service 4"
        />
        <img
          className={styles.imageBackground}
          src={ServiceImageBG4}
          alt="Background 4"
        />
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContent}
          src={ServiceImage5}
          alt="service 5"
        />
        <img
          className={styles.imageBackground}
          src={ServiceImageBG5}
          alt="Background 5"
        />
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageContent}
          src={ServiceImage6}
          alt="service 6"
        />
        <img
          className={styles.imageBackground}
          src={ServiceImageBG6}
          alt="Background 6"
        />
      </div>
    </div>
  );
};
export default ServicePage2;
