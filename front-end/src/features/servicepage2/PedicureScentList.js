import { IconsData } from "./data/ServiceData";
import styles from "./css/PedicureScentList.module.css";

const PedicureScentList = () => {
  return (
    <div className={styles.pedicureContainer}>
      <h3 className={styles.title}>Please Pick Your Favorite Scent</h3>
      <p className={styles.description}>
        After a busy day, try our Organic pedicure. Natural stuff, foot care,
        warm mask, hot cloth, special wax, and a 15-min massage to end your
        tiring day. Don't miss our Paris pedicure! Choose from 4 JELLY scents
        and enjoy extras: callus removal, warm mask, paraffin wax, hot towel,
        plus a 12-min massage. Dive in!"
      </p>

      <div className={styles.flexContainer}>
        {IconsData.map((icon, index) => (
          <div className={styles.flexItem} key={index}>
            <img src={icon.image} alt={icon.name} />
            <div className={styles.itemName}>{icon.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PedicureScentList;
