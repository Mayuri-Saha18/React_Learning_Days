import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarDiv} >
          
            <Link to={"/"}>
            <h2>Categories</h2>
            </Link>
            <Link to={"/search"}>
            <h2>Search</h2>
            </Link>
            <Link to={"/wishlist"}>
            <h2>Wishlist</h2>
            </Link>
        </div>

    </nav>
  )
}

export default Navbar