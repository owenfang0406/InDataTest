import React from "react"
import styles from "./NavBar.module.css"
import SubNavBar from "../SubNavBar/SubNavBar"

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.upperBar}>
        <img src={require("./logo_160.png")} className={styles.logo}></img>
        <img src={require("./user.png")} className={styles.userLogo}></img>
      </div>
      <SubNavBar></SubNavBar>
    </nav>
  )
}

export default NavBar
