import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarDiv}>
        <Link to={"/"}>
          <img
            className={styles.logo}
            src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f436.svg"
            alt=""
          />
        </Link>
        <Link to={"/puppy"}>
          <h2>Puppy</h2>
        </Link>
        <Link to={"/search"}>
          <h2>Search</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
