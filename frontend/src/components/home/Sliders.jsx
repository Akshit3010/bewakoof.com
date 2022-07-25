import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { NavLink } from "react-router-dom";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Sliders({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {data.map((e, i) => (
          <SwiperSlide className={styles.manSwip} key={i}>
            <NavLink to="/products/men-printed-shirts">
              <img src={e.IMG} alt="" />
            </NavLink>
            <div>
              <p>₹{e.price}</p>
              <p className={styles.diScount}>₹{e.mrp}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="Swip">
            <p>1</p>
        </SwiperSlide>
        <SwiperSlide>
            <p>1</p>
        </SwiperSlide>
        <SwiperSlide>
            <p>1</p>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
