import { Link } from "react-router-dom";
import styles from "./css/ServiceOfferSection.module.css";
import serviceImage from "../../assets/images/website/service-title.jpg";
import eyelashImage from "../../assets/images/website/eyelash.jpg";
import pedicureImage from "../../assets/images/website/pedicure.jpg";
import nailImage from "../../assets/images/website/nail.jpg"; // Adding a nail image as placeholder

const ServiceOfferSection = () => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.title}>Service Offer</div>
        <div className={styles.imageContainer}>
          <img loading="lazy" src={serviceImage} alt="Service Offer" />
        </div>
        <div className={styles.serviceGallery}>
          <div className={styles.serviceColumn}>
            <div className={styles.title}>Nail Service</div>
            <div className={styles.imageContainer}>
              <img loading="lazy" src={nailImage} alt="nail service" />
            </div>
            <div className={styles.description}>
              You like your hands beautiful? You've got the right tab. Here, we
              will shape and color your nails just right.
            </div>
          </div>
          <div className={styles.serviceColumn}>
            <div className={styles.title}>Pedicure</div>
            <div className={styles.imageContainer}>
              <img loading="lazy" src={pedicureImage} alt="pedicure" />
            </div>
            <div className={styles.description}>
              Make sure don't forget your feet. They deserve great care, with
              nail shaping, moisturizing, jelly soaks.
            </div>
          </div>
          <div className={styles.serviceColumn}>
            <div className={styles.title}>Eyelash</div>
            <div className={styles.imageContainer}>
              <img loading="lazy" src={eyelashImage} alt="eyelash" />
            </div>
            <div className={styles.description}>
              As we always say, 'The eyes are the windows of the soul,' and we
              believe they deserve beautiful lashes with our eyelash services.
            </div>
          </div>
        </div>
        <div className={styles.viewMoreBtn}>
          <Link to="/services">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferSection;
