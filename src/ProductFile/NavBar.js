import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../context/cordContextProvider";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const { state } = useContext(CardContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to={"/product"}>
          Product
        </Link>
        <div className={styles.iconContainer}>
          <Link to={"./shopCard"}>
            <img src="./img/shop.svg" alt="shop" />
          </Link>
          <span>{state.itemCounters}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
