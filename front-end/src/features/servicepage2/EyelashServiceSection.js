import React from "react";
import styles from "./css/ServiceHorizontalSection.module.css";

import { eyelashData } from "./data/ServiceData"; // Make sure you import eyelashData correctly
import HorizontalEyelashCard from "./HorizontalEyelashCard";
import HorizontalEyelashCardRight from "./HorizontalEyelashCardRight";

const EyelashServiceSection = () => {
  const eyelashService1 = eyelashData[0];
  const eyelashService2 = eyelashData[1];
  const eyelashService3 = eyelashData[2];

  return (
    <div className={styles.container}>
      <HorizontalEyelashCard
        image={eyelashService1.img}
        serviceName={eyelashService1.label}
        prices={eyelashService1.prices}
        description={eyelashService1.description}
      />
      <div className={styles.mobileDisplay}>
        <HorizontalEyelashCard
          image={eyelashService2.img}
          serviceName={eyelashService2.label}
          prices={eyelashService2.prices}
          description={eyelashService2.description}
        />
      </div>
      <div className={styles.desktopDisplay}>
        <HorizontalEyelashCardRight
          image={eyelashService2.img}
          serviceName={eyelashService2.label}
          prices={eyelashService2.prices}
          description={eyelashService2.description}
        />
      </div>
      <HorizontalEyelashCard
        image={eyelashService3.img}
        serviceName={eyelashService3.label}
        prices={eyelashService3.prices}
        description={eyelashService3.description}
      />
    </div>
  );
};

export default EyelashServiceSection;
