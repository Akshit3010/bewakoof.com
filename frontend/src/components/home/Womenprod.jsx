import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
import Sliders from "./Sliders";
import { NavLink } from "react-router-dom";
const Womenprod = () => {
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
      IMG: "https://images.bewakoof.com/t320/women-s-white-boyfriend-t-shirt-119167-1658407377-5.jpg",
      price: "1199",
      mrp: "2999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/climbing-pocket-panda-boyfriend-t-shirt-231686-1655748622-5.jpg",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/women-s-black-boyfriend-t-shirt-103943-1655747757-5.jpg",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/women-s-black-choose-happiness-boyfriend-t-shirt-300978-1655810920-5.jpg",
      price: "740",
      mrp: "3299",
    },
    {
      IMG: "https://images.bewakoof.com/t320/women-s-black-food-bear-boyfriend-t-shirt-392142-1655810977-5.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/women-s-purple-sundays-we-do-nothing-graphic-printed-boyfriend-t-shirt-505581-1655817269-1.jpg",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/women-s-white-boyfriend-t-shirt-119167-1658407355-1.jpg",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/women-s-black-choose-happiness-t-shirt-300981-1655814136-1.jpg",
      price: "499",
      mrp: "999",
    },
  ];
  const assidata = [
    {
      IMG: "https://images.bewakoof.com/t320/foodie-boyfriend-t-shirt-520756-1658344214-1.jpg",
      price: "499",
      mrp: "999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/women-s-pink-blue-color-block-t-shirt-480974-1656147867-1.jpg",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/voyage-oversized-fit-t-shirt-520740-1658295225-1.jpg",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/voyage-boyfriend-t-shirt-520743-1658295262-1.jpg",
      price: "350",
      mrp: "679",
    },
    {
      IMG: "https://images.bewakoof.com/t320/all-day-everyday-boyfriend-t-shirt-387286-1655748266-5.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/beyond-infinity-boyfriend-t-shirt-520755-1658295300-1.jpg",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/gangsta-oversized-fit-t-shirt-521395-1658427800-1.jpg",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/all-day-everyday-boyfriend-t-shirt-387286-1655748244-1.jpg",
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
                src="https://images.bewakoof.com/uploads/grid/app/bbuy2joggers-common-1658473862.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.Single_slider_part}>
            <NavLink to="/men">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/weekend-sale-women-new-1658468289.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/b1g1-women-new-1658468283.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="4" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/bf-tee-women-1658468286.jpg"
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
            src="https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Women-1658480172.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/bests-sellers-women-1657696851.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/women-new-arrival--1657696857.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/custom-wonmen-1657696851.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/last-size-women-1657696853.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/plus-size-women-1657696854.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/merch-store-women-1657696853.jpg"
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
            src="https://images.bewakoof.com/uploads/grid/app/pc-women-1657696854.jpg"
            alt=""
          />
        </div>
      </div>

      <h3 className={styles.popH3}>POPULAR CATEGORIES</h3>
      <div className={styles.popDiv}>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-BoyfriendTees-1657527656.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-FashionTops-1657527658.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-OversizedTees-1657527660.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Dresses-1657527657.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PJs-1657527660.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Joggers-1657527659.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.popDiv}>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Shorts-1657527662.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Jeans-1657527659.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Covers-1657527657.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Boxers-1657527655.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-Bagss-1657534528.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-WOMEN-PrrintedTees-1657527661.jpg"
            alt=""
          />
        </div>
      </div>
      <h3 className={styles.popH3}>DISCOUNT PE DISCOUNT</h3>
      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/midsize-banner-buy2shorts-common-1658475318.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/midsize-banner-buy2boxers-common-1658475318.jpg"
          alt=""
        />
      </div>

      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sweatshirts---Hoodies-Women-1657788986.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-women-1657003959.jpg"
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
                src="https://images.bewakoof.com/uploads/grid/app/clearance-women---Copy-1658475317.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/Static-JustArrived-Disney-women-1658250093.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/minion-homepage-women-1658140993.jpg"
                alt=""
              />{" "}
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
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-jackets-women-1657872393.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/meshirt-women-1656488700.jpg"
          alt=""
        />
      </div>
      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Joggers-Women-1658308584.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Pyjamas-Women-1658122291.jpg"
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

export default Womenprod;
