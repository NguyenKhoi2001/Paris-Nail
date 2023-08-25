import { Link } from "react-router-dom";
import styles from "./css/NewInspirationHub.module.css";
import NailImage1 from "../../assets/images/nail/Nail1.jpg";
import NailImage2 from "../../assets/images/nail/Nail2.jpg";
import NailImage3 from "../../assets/images/nail/Nail3.jpg";
import NailImage4 from "../../assets/images/nail/Nail4.jpg";
import NailImage5 from "../../assets/images/nail/Nail5.jpg";
import NailImage6 from "../../assets/images/nail/Nail6.jpg";
const NewInspirationHub = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>NAIL INSPIRATION HUB</div>
      <div className={styles.galleryGrid}>
        <div className={styles.card}>
          <img src={NailImage1} alt="Nail 1" />
        </div>
        <div className={styles.card}>
          <img src={NailImage2} alt="Nail 2" />
        </div>
        <div className={styles.card}>
          <img src={NailImage3} alt="Nail 3" />
        </div>
        <div className={styles.card}>
          <img src={NailImage4} alt="Nail 4" />
        </div>
        <div className={styles.card}>
          <img src={NailImage5} alt="Nail 5" />
        </div>
        <div className={styles.card}>
          <img src={NailImage6} alt="Nail 6" />
        </div>
      </div>
      <div className={styles.viewMoreBtn}>
        <Link>View More</Link>
      </div>
    </div>
  );
};

export default NewInspirationHub;
