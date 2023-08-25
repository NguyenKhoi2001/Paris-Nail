import JobImage1 from "../../assets/images/website/Job1.jpg";
import JobImage2 from "../../assets/images/website/Job2.jpg";
import JobImage3 from "../../assets/images/website/Job3.jpg";
import JobImage4 from "../../assets/images/website/Job4.jpg";
import JobImage5 from "../../assets/images/website/Job5.jpg";
import JobImage6 from "../../assets/images/website/Job6.jpg";
import JobImage7 from "../../assets/images/website/Job7.jpg";
import JobImage8 from "../../assets/images/website/Job8.jpg";
import JobImage9 from "../../assets/images/website/Job9.jpg";
import JobImage10 from "../../assets/images/website/Job10.jpg";
import JobImage11 from "../../assets/images/website/Job11.jpg";
import JobImage12 from "../../assets/images/website/Job12.jpg";
import Slider2D from "../../components/Slider2D";

import styles from "./css/JobSlider.module.css";

const JobSlider = () => {
  const images = [
    JobImage1,
    JobImage2,
    JobImage3,
    JobImage4,
    JobImage5,
    JobImage6,

    JobImage7,

    JobImage8,

    JobImage9,
    JobImage10,
    JobImage11,
    JobImage12,
  ];
  return (
    <div className={styles.jobContainer}>
      <Slider2D images={images} />
      <div className={styles.title}>
        <div>Need A job contact us</div>
        <div>We always Hiring</div>
      </div>
    </div>
  );
};

export default JobSlider;
