import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
import Sliders from "./Sliders";
import { NavLink } from "react-router-dom";
const Homeprod = () => {
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
      IMG: "https://images.bewakoof.com/t320/men-s-brown-color-block-casual-shoes-516758-1657290228-1.JPG",
      price: "1199",
      mrp: "2999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-white-printed-sports-shoes-516757-1657531319-1.JPG",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-white-printed-casual-shoes-515444-1657174060-1.JPG",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-grey-white-color-block-casual-shoes-516773-1657290595-1.JPG",
      price: "740",
      mrp: "3299",
    },
    {
      IMG: "https://images.bewakoof.com/t320/highly-motivated-velcro-men-s-slider-507844-1656603154-1.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-brown-casual-shoes-515421-1657173563-1.JPG",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-blue-white-color-block-casual-shoes-516824-1657290558-1.JPG",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-grey-printed-sliders-516778-1657531686-1.JPG",
      price: "499",
      mrp: "999",
    },
  ];
  const assidata = [
    {
      IMG: "https://images.bewakoof.com/t320/captain-america-printed-small-backpack-avl-229361-1655746877-5.jpg",
      price: "499",
      mrp: "999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/don-t-follow-me-lightweight-adjustable-strap-women-s-slider-361112-1655814698-3.jpg",
      price: "632",
      mrp: "1178",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-black-adjustable-velcro-sliders-481910-1655813699-1.jpg",
      price: "699",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/load-game-adjustable-strap-men-slider-373620-1656138694-1.jpg",
      price: "350",
      mrp: "679",
    },
    {
      IMG: "https://images.bewakoof.com/t320/blue-baba-printed-small-backpack-229646-1655813929-5.jpg",
      price: "799",
      mrp: "1999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/army-camouflage-lightweight-adjustable-strap-men-slider-333613-1655747768-5.jpg",
      price: "399",
      mrp: "1199",
    },
    {
      IMG: "https://images.bewakoof.com/t320/classic-beige-men-s-zig-zag-slider-459354-1656140409-1.jpg",
      price: "749",
      mrp: "3999",
    },
    {
      IMG: "https://images.bewakoof.com/t320/men-s-grey-printed-sliders-516778-1657531686-1.JPG",
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
                src="https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker--1--1651324109.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.Single_slider_part}>
            <NavLink to="/men">
              {" "}
              <img
                src="https://images.bewakoof.com/uploads/grid/app/happy-weekend-sale-live-banners-common-1658416184.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/designer-cover-city-1656070119.jpg"
                alt=""
              />
            </NavLink>
          </div>
          <div key="4" className={styles.Single_slider_part}>
            <NavLink to="/men">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/unnamed-1656056673.gif"
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
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-bestsellers-1657622402.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-new-arrivals-1657622405.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-official-merch-1657622406.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-mobile-covers-1657622404.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-mobile-grippers-1657622404.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.nineImg}
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-sliders-1657622407.jpg"
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
            src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-customisation-1657622403.jpg"
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
      </div>
      <h3 className={styles.popH3}>TRENDING</h3>
      <div className={styles.slidersDiv}>
        <Sliders data={assidata} />
        <NavLink className={styles.navLinks} to="/">
          VIEW ALL
        </NavLink>
      </div>
      <h3 className={styles.popH3}>POPULAR CATEGORIES</h3>
      <div className={styles.popDiv}>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-mobile-covers-1657542496.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-sliders-1657542498.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1657542495.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-flip-flops-1657542496.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-notebook-1657542498.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.popImg}
            src="https://images.bewakoof.com/uploads/grid/app/category-box-casual-shoes-1657542495.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.Box}>
        <Slider className={styles.Total_slider_part} {...settings}>
          <div key="1" className={styles.Single_slider_part}>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Accessories-1656397807.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="2" className={styles.Single_slider_part}>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-Backpack-low-1646747551.gif"
                alt=""
              />
            </NavLink>
          </div>
          <div key="3" className={styles.Single_slider_part}>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-New-Arrivals-Accessories--1--1652689573.jpg"
                alt=""
              />
            </NavLink>
          </div>
        </Slider>
      </div>
      <h3 className={styles.popH3}>THE GANG'S FAVOURITE</h3>
      <div className={styles.favDiv}>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1656667081.jpg"
          alt=""
        />
        <img
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sliders-1656667081.jpg"
          alt=""
        />
      </div>
      <h3 className={styles.popH3}>WHATS NEW</h3>
      <div className={styles.slidersDiv}>
        <Sliders data={maindata} />
        <NavLink className={styles.navLinks} to="/">
          VIEW ALL
        </NavLink>
      </div>
    </div>
  );
};

export default Homeprod;
