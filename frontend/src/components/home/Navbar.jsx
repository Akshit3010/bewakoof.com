import React from "react";
import styles from "./main.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
const Navbar = () => {
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
            <div>
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
                Contect us
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
            <NavLink to="/men">MEN</NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Printed T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Oversized T-shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Fashion T-Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"> Plain T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Half Sleeve T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Full Slave T_Shirt</NavLink>
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
                    <NavLink to="/men">Pyjmas</NavLink>
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
                    <NavLink to="/men">Kurtans</NavLink>
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
            <NavLink to="/men">WOMEN</NavLink>
            <div id={styles.mainMenu2}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>TopWear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Half Sleeve T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Full Slave T_Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Printed T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"> Kurties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Vest</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Polo T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Kurtas</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Kurtans</NavLink>
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
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h5>Ethnic Fusion Wear</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Kurtans</NavLink>
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
            <NavLink to="/men">MOBILE COVER</NavLink>
            <div id={styles.mainMenu3}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h2 className={styles.dropH2}>POPULAR</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      <h3>Xiaomi</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Realme 9 Power</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Xiaomi Mi 10T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Xiaomi Redami K2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      <h3>Sumsang Galaxy F62</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Sumsung Galaxy F41</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Sumsumg Galaxy A30</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h3>Oneplus</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Oneplus 9R</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Oneplus 8 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Oneplus 8T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      {" "}
                      <h3>Realme</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Realme 6</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Realme 5</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/men">
                      <h3>Apple</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">iphone 13</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">iphone 12</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">iphone 12 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">
                      <h3>Vivo</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">vovo vii Pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/men"> Vivo X60</NavLink>
                  </li>
                  <li>
                    <NavLink to="/men">Vivo Y91</NavLink>
                  </li>
                </ul>
                <hr />
                <ul></ul>

                <ul>
                  <li>
                    <NavLink to="/men">
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
          <NavLink id={styles.loginButton} className={styles.lInk} to="/login">
            Login
          </NavLink>

          <li>
            <NavLink to="/men">
              <VscHeart />
            </NavLink>
          </li>
          <li>
            <NavLink to="/men">
              <span>
                <IoBagOutline />
                <sup id={styles.iTems}>0</sup>
              </span>
            </NavLink>
          </li>
        </div>
      </div>
      <hr className={styles.hrLine} />
      <div id={styles.dataBar}>
        <li>
          <NavLink className={styles.lInk} to="/">
            MEN
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.lInk} to="/women">
            WOMEN
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={styles.lInk} to="/accessories">
            ACCESSORIES
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
