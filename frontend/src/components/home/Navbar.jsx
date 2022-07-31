import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getmybag, getUser, getUserbag } from "../../Redux/action";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const { user, mybag } = useSelector((state) => state.reducer);
  const [active, setActive] = useState("Men");
  const [info, setinfo] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const dispatch = useDispatch();
  console.log(mybag);
  const token = localStorage.getItem("jwtoken");
  useEffect(() => {
    dispatch(getUser());
  }, [isLoggedIn, token, mybag]);

  useEffect(() => {
    dispatch(getUserbag(user?.user?._id));
  }, [isLoggedIn, token, user]);
  const navigate = useNavigate();

  const logout = () => {
    axios
      .get("https://heady-rabbits-8947.herokuapp.com/users/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLoggedIn(false);
        dispatch(getmybag([]));
        localStorage.removeItem("jwtoken");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

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
                    <NavLink to="/products/men-printed-shirts">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">Vests</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">
                      Co-ord Sets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">Kurtas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">Henleys</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">Jackets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">
                      Sweatshirt & Hoodie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">
                      Sweaters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">
                      Customize T-shirts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-printed-shirts">
                      Sweaters
                    </NavLink>
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
                    <NavLink to="/products/men-joggers">Boxers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Sorts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers"> Pnats</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Jeans</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">Joggers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">
                      Plus Size Store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-joggers">bRIEFS</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/men-activewear">
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
                    <NavLink to="/products/men-activewear">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="/men"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/men-activewear">
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
                    <NavLink to="/women">
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
                    <NavLink to="/products/women-tshirts">
                      Full Slave T_Shirt
                    </NavLink>
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
                    <NavLink to="/products/women-tshirts"> Kurties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-tshirts">Vest</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-tshirts"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-tshirts">Polo T-Shirt</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-tshirts">Shirts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-tshirts">Kurtas</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/women">
                      <h5>Bottom Wear</h5>
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
                    <NavLink to="/products/women-joggers">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-joggers">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/women-joggers">
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
                    <NavLink to="/products/women-pyjamas">
                      Neharu Jackets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      {" "}
                      <h5>Reginal</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Marati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Bengali T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Gujrati T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      Tamil T-Shirt
                    </NavLink>
                  </li>
                </ul>
                <ul className={styles.typesofMenu}>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/Anime-Bewakoof-Homepage-NavigationCircleIcon-final-1632292125.jpg"
                        alt=""
                      />
                      <span>Amine Collection</span>
                    </NavLink>
                  </li>
                  {/* <li><NavLink to="/products/oneplus"><https://images.bewakoof.com/nav_menu/WinterWear-Bewakoof-Homepage-NavigationCircleIcon-1630653435.png" alt=""/><span>Winter Collection</span></NavLink></li> */}
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/navi-collab-icon-1579514101.gif"
                        alt=""
                      />
                      <span>Collebration</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/nav-icon-1617643368.png"
                        alt=""
                      />
                      <span>Shop Unique Brands</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
                      <img
                        src="https://images.bewakoof.com/nav_menu/new-arrival-icon-1625237098.png"
                        alt=""
                      />
                      <span>Upcomming Collection</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/women-pyjamas">
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
            <NavLink to="/products/xiaomi">MOBILE COVERS</NavLink>
            <div id={styles.mainMenu3}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink to="/products/xiaomi">
                      <h2 className={styles.dropH2}>POPULAR</h2>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/xiaomi">
                      <h3>Xiaomi</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/xiaomi">Realme 9 Power</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/xiaomi">Xiaomi Mi 10T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/xiaomi">Xiaomi Redami K2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/samsung">
                      <h3>Sumsang Galaxy F62</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/samsung"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/samsung">Sumsung Galaxy F41</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/samsung">Sumsumg Galaxy A30</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/oneplus">
                      <h3>Oneplus</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/oneplus">Oneplus 9R</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/oneplus">Oneplus 8 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/oneplus">Oneplus 8T</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">
                      {" "}
                      <h3>Realme</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Realme 6</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/realme">Realme 5</NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <NavLink to="/products/iphone">
                      <h3>Apple</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">iphone 13</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">iphone 12</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">iphone 12 pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">
                      <h3>Vivo</h3>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">vovo vii Pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone"> Vivo X60</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products/iphone">Vivo Y91</NavLink>
                  </li>
                </ul>
                <hr />
                <ul></ul>

                <ul>
                  <li>
                    <NavLink to="/products/oneplus">
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
          {!token && (
            <NavLink
              id={styles.loginButton}
              className={styles.lInk}
              to="/login"
              onClick={() => setActive("")}
            >
              Login
            </NavLink>
          )}
          {user?.user?.email && (
            <li
              className="relative"
              onMouseOver={() => setinfo(true)}
              onMouseLeave={() => setinfo(false)}
            >
              <p>
                <FaUserAlt className="cursor-pointer text-[18px] ml-2" />
              </p>
              {info && (
                <div className="absolute text-center top-[20px] left-[-80px] shadow-lg border rounded-sm  bg-white w-auto px-4 py-4">
                  <div className="flex items-center">
                    <img
                      src={user.user.avatar}
                      alt="avatar"
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <p className="text-[18px] ml-2 font-[500]">
                      {user.user.first_name} {user.user.Last_name}
                    </p>
                  </div>
                  <p className="text-[16px]  my-2 w-full ml-2 font-[600]">
                    {user.user.email}
                  </p>
                  <button
                    onClick={logout}
                    className="text-black bg-[#fdd835] py-1 px-2 font-[600]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}

          <li>
            <p
              className="cursor-pointer text-xl"
              onClick={() => {
                if (!user?.user?.email) {
                  return navigate("/login");
                }
                navigate(`/wishlist/${user.user._id}`);
              }}
            >
              <VscHeart />
            </p>
          </li>
          <li>
            <p
              className="cursor-pointer text-xl"
              onClick={() => {
                if (!user?.user?.email) {
                  return navigate("/login");
                }
                navigate(`/cart/${user.user._id}`);
              }}
            >
              <span className="relative">
                <IoBagOutline />
                <span className="absolute top-[-5px] left-3 text-[11px] flex items-center justify-center bg-[#fdd835] rounded-full h-[18px] w-[18px] text-center">
                  {mybag.length}
                </span>
              </span>
            </p>
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
            to="/products/men-joggers"
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
