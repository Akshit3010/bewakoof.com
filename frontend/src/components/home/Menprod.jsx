import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
import Sliders from "./Sliders";
import { NavLink } from "react-router-dom";
const Menprod = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const maindata = [
    {
      IMG: "https://images.bewakoof.com/t320/men-s-full-sleeve-t-shirts-1094-1655746804-1.jpg",
      price: "1199",
      mrp: "2999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/white-half-sleeve-t-shirt-105-1655746873-1.jpg",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-white-t-shirt-1093-1655746832-1.jpg",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-t-shirt-106-1655745629-5.jpg",
      price: "740",
      mrp: "3299",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-panther-portrait-t-shirt-472722-1656143727-1.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/meteor-grey-full-sleeve-t-shirt-211959-1655747978-5.jpg",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-relax-t-shirt-387407-1655748035-5.jpg",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-blue-t-shirt-115-1655747790-1.jpg",
      price: "499",
      mrp: "999",
    },
  ];
  const assidata = [
    {
      IMG: "https://images.bewakoof.com/t320/men-s-blue-peace-not-war-oversized-t-shirt-479634-1656191303-1.jpg",
      price: "499",
      mrp: "999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-relax-t-shirt-387407-1655748035-5.jpg",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/gojo-domain-oversized-fit-t-shirt-520746-1658344284-1.jpg",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/gojo-domain-half-sleeve-t-shirt-520753-1658344246-1.jpg",
      price: "350",
      mrp: "679",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-peace-seeker-typography-oversized-t-shirt-502331-1655810546-1.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/voyage-oversized-fit-t-shirt-520745-1658295402-1.jpg",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/warrior-king-half-sleeve-t-shirt-521400-1658427832-1.jpg",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/warrior-king-oversized-fit-t-shirt-521402-1658427869-1.jpg",
      price: "499",
      mrp: "999",
    },
  ];
  return (
    <div id={styles.sLide1}>
      <div className={styles.Box}>
        <Slider className={styles.Total_slider_part} {...settings}>
          <div key="1" className={styles.Single_slider_part}>
            <NavLink to="/men">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/Screenshot-2022-07-22-123359--1--1658473864.png"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.Single_slider_part}>
            <NavLink to="/men">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/happy-weekend-sale-live-banner-men-1658416183.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/undrdawg-homepage-revised-1658327775.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="4" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/b1g1-men-new-1658468562.jpg"
                alt=""
              />
            </NavLink>
          </div>
        </Slider>
      </div>
      <div className={styles.nineDiv}>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1658480172.gif"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/bestsellers-thumbnail-1657631910.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-arrival-thumbnail-1657631913.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/customisation-thumbnail-1657631911.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/last-size-thumbnail-1657631912.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/plus-size-thumbnail-1657631915.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-mugs-1657622405.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1657631916.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/personal-care-thubnail-1657631915.jpg"
            alt=""
          />
        </div>
      </div>

      <h3 className={styles.popH3}>POPULAR CATEGORIES</h3>
      <div className={styles.popDiv}>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.popDiv}>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shoes-1657526331.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Bags-1657526325.jpg"
            alt=""
          />
        </div>
      </div>
      <h3 className={styles.popH3}>DISCOUNT PE DISCOUNT</h3>
      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/midsize-banner-buy2shorts-common-1658473863.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/midsize-banner-buy2boxers-common-1658473863.jpg"
          alt=""
        />
      </div>

      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sweatshirts---Hoodies-Men-1657788986.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-jackets-men-1657872392.jpg"
          alt=""
        />
      </div>
      <h3 className={styles.popH3}>BESTSELLER FOR MEN</h3>
      <div className={styles.slidersDiv}>
        <Sliders data={assidata} />
        <NavLink className={styles.navLinks} to="/">
          VIEW ALL
        </NavLink>
      </div>
      <div className={styles.Box}>
        <Slider className={styles.Total_slider_part} {...settings}>
          <div key="1" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/minion-homepage-men-1658140992.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/oversized-men-1658468563.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/Static-JustArrived-Cargo-men-1658250092.gif"
                alt=""
              />
            </NavLink>
          </div>
        </Slider>
      </div>
      <h3 className={styles.popH3}>CLEREANCE ZONE</h3>
      <div className={styles.slidersDiv}>
        <Sliders data={maindata} />
        <NavLink className={styles.navLinks} to="/">
          VIEW ALL
        </NavLink>
      </div>
      <h3 className={styles.popH3}>THE STOPPED COLLECTION</h3>
      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-men-1657003958.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/unnamed-1657696177.jpg"
          alt=""
        />
      </div>
      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/meshirt-men-1656488700.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Full-Sleeves-Men-1658308584.jpg"
          alt=""
        />
      </div>
      <div className={styles.addVet}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"
          alt=""
        />
      </div>
      <h3 className={styles.popH3}>Customize your T-shirts</h3>
      <div className={styles.addVet}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Menprod;
