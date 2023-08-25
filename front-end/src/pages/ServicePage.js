import ServiceImage1 from "../assets/images/website/Service1.jpg";
import ServiceImage2 from "../assets/images/website/Service2.jpg";
import ServiceImage3 from "../assets/images/website/Service3.jpg";
import ServiceImage4 from "../assets/images/website/Service4.jpg";
import ServiceImage5 from "../assets/images/website/Service5.jpg";
import styles from "./css/ServicePage.module.css";

const ServicePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={ServiceImage1} alt="service 1" />
      </div>
      <div className={styles.imageContainer}>
        <img src={ServiceImage2} alt="service 2" />
      </div>
      <div className={styles.imageContainer}>
        <img src={ServiceImage3} alt="service 3" />
      </div>
      <div className={styles.imageContainer}>
        <img src={ServiceImage4} alt="service 4" />
      </div>
      <div className={styles.imageContainer}>
        <img src={ServiceImage5} alt="service 5" />
      </div>
    </div>
  );
};
export default ServicePage;
