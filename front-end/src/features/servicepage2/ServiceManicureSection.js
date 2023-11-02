import React from "react";
import styles from "./css/ServiceHorizontalSection.module.css";

import HorizontalServiceCard from "./HorizontalServiceCard";
import HorizontalServiceCardRight from "./HorizontalServiceCardRight";

import { manicureServices } from "./data/ServiceData";

const ServiceManicureSection = () => {
  const manicureService1 = manicureServices[0];
  const manicureService2 = manicureServices[1];
  const manicureService3 = manicureServices[2];
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <HorizontalServiceCard
          images={manicureService1.images}
          serviceName={manicureService1.name}
          prices={manicureService1.prices}
          description={manicureService1.description}
        />
        <div className={styles.mobileDisplay}>
          <HorizontalServiceCard
            images={manicureService2.images}
            serviceName={manicureService2.name}
            prices={manicureService2.prices}
            description={manicureService2.description}
          />
        </div>
        <div className={styles.desktopDisplay}>
          <HorizontalServiceCardRight
            images={manicureService2.images}
            serviceName={manicureService2.name}
            prices={manicureService2.prices}
            description={manicureService2.description}
          />
        </div>

        <HorizontalServiceCard
          images={manicureService3.images}
          serviceName={manicureService3.name}
          prices={manicureService3.prices}
          description={manicureService3.description}
        />
      </div>
    </div>
  );
};

export default ServiceManicureSection;
