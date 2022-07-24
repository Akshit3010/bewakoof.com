import React, { useState } from "react";
import styles from "./main.module.css";
import { NavLink } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
const Navbar = () => {
  const [active, setActive] = useState("Men");
  return (
    <div id={styles.fixedNav}>
      <div className={styles.upperDiv}>
        <div className={styles.upperNav}>
          <div className={styles.leftupperNav}>
            <div>
              <NavLink className={styles.linksNav} to="/Offer">
                Offer
              </NavLink>
            </div>
            <div>
              <NavLink className={styles.linksNav} to="/Fanbook">
                Fanbook
              </NavLink>
            </div>
            <div className="flex items-center">
              <BsPhone className={styles.bsIcon} />
              <NavLink className={styles.linksNav} to="/Dld">
                {" "}
                Download App
              </NavLink>
            </div>
            <div>
              <NavLink className={styles.linksNav} to="/Mbr">
                TriBe Membership
              </NavLink>
            </div>
          </div>
          <div className={styles.RightupperNav}>
            <div>
              <NavLink className={styles.linksNav} to="/Contect">
                Contact us
              </NavLink>
            </div>
            <div>
              <NavLink className={styles.linksNav} to="/Trkodr">
                Track Order
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.navBar}>
        <div id={styles.menuNav}>
          <li>
            <NavLink to="/">
              <img
                src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/men-printed-shirts"
              onClick={() => setActive("")}
            >
              MEN
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/products/men-printed-shirts"
                      onClick={() => setActive("")}
                    >
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-printed-shirts"
                      onClick={() => setActive("")}
                    >
                      Printed T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-printed-shirts"
                      onClick={() => setActive("")}
                    >
                      Oversized T-shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-printed-shirts"
                      onClick={() => setActive("")}
                    >
                      Fashion T-Shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-printed-shirts"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Plain T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-printed-shirts"
                      onClick={() => setActive("")}
                    >
                      Half Sleeve T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-printed-shirts"
                      onClick={() => setActive("")}
                    >
                      Full Slave T_Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Vests</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Co-ord Sets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Kurtas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Henleys</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Jackets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Sweatshirt & Hoodie</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Sweaters</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Customize T-shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Sweaters</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>Bottomwear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-joggers"
                      onClick={() => setActive("")}
                    >
                      Joggers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Boxers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Sorts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"> Pnats</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Jeans</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Joggers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Plus Size Store</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">bRIEFS</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/men-activewear"
                      onClick={() => setActive("")}
                    >
                      Activewear
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Neharu Jackets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Marati T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Bengali T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Gujrati T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Tamil T-Shirt</NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/men">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="/men"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/men">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-men-logo-last-size-1592822253.png"
                        alt=""
                      />
                      <span>Last Size Left</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/products/women-tshirts" onClick={() => setActive("")}>
              WOMEN
            </NavLink>
            <div id={styles.mainMenu2}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-tshirts"
                      onClick={() => setActive("")}
                    >
                      Half Sleeve T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Full Slave T_Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-tshirts"
                      onClick={() => setActive("")}
                    >
                      Printed T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Kurties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Vest</NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Polo T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Kurtas</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-joggers"
                      onClick={() => setActive("")}
                    >
                      Joggers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Neharu Jackets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Marati T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Bengali T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Gujrati T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Tamil T-Shirt</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products/women-pyjamas"
                      onClick={() => setActive("")}
                    >
                      Pyjamas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Neharu Jackets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Marati T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Bengali T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Gujrati T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Tamil T-Shirt</NavLink>
                  </li>
                </ul>
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="/"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-men-logo-last-size-1592822253.png"
                        alt=""
                      />
                      <span>Last Size Left</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/">MOBILE COVERS</NavLink>
            <div id={styles.mainMenu3}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h2 className={styles.dropH2}>POPULAR</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <h3>Xiaomi</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Realme 9 Power</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Xiaomi Mi 10T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Xiaomi Redami K2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <h3>Sumsang Galaxy F62</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Sumsung Galaxy F41</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Sumsumg Galaxy A30</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h3>Oneplus</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Oneplus 9R</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Oneplus 8 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Oneplus 8T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      {" "}
                      <h3>Realme</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Realme 6</NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Realme 5</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h3>Apple</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">iphone 13</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">iphone 12</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">iphone 12 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <h3>Vivo</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">vovo vii Pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> Vivo X60</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Vivo Y91</NavLink>
                  </li>
                </ul>
                <hr />
                <ul></ul>

                <ul>
                  <li>
                    <NavLink to="/">
                      <span></span>
                      <img
                        src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg"
                        alt=""
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </div>
        <div id={styles.searchBars}>
          <li>
            <div className={styles.iconInput}>
              <IoSearchOutline />
              <input
                type="text"
                id={styles.inpSrch}
                placeholder="search by product,category or collection"
              ></input>
            </div>
            <div id={styles.searchBarsData}></div>
          </li>
          <NavLink
            id={styles.loginButton}
            className={styles.lInk}
            to="/login"
            onClick={() => setActive("")}
          >
            Login
          </NavLink>

          <li>
            <NavLink to="/wishlist">
              <VscHeart />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <span className="relative">
                <IoBagOutline />
                <span className="absolute top-[-5px] left-3 text-[11px] bg-[#fdd835] rounded-full h-[18px] w-[18px] text-center">
                  0
                </span>
              </span>
            </NavLink>
          </li>
        </div>
      </div>
      <hr className={styles.hrLine} />

      <div id={styles.dataBar}>
        <li>
          <NavLink
            className={
              active === "Men"
                ? "text-[#333] text-[16px] font-[800] border-b-4 border-[#ffd835]"
                : ""
            }
            to="/"
            onClick={() => setActive("Men")}
          >
            MEN
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              active === "Women"
                ? "text-[#333] text-[16px] font-[800] border-b-4 border-[#ffd835]"
                : ""
            }
            to="/women"
            onClick={() => setActive("Women")}
          >
            WOMEN
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={
              active === "Accessory"
                ? "text-[#333] text-[16px] font-[800] border-b-4 border-[#ffd835]"
                : ""
            }
            to="/accessories"
            onClick={() => setActive("Accessory")}
          >
            ACCESSORIES
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
