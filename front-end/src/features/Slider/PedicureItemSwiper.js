import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./PedicureItemSwiper.module.css";
import CardWithImageSelector from "../servicepage2/CardWithImageSelector";

const PedicureItemSwiper = ({ data }) => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CardWithImageSelector
              images={item.images}
              serviceName={item.name}
              prices={item.prices}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PedicureItemSwiper;
