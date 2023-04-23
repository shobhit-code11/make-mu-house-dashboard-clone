import React from 'react'
import Styles from "./navbar.module.css"
import {FaHome} from "react-icons/fa"

const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <a href="#">
        <span >
    <FaHome style={{color: "yellow"}}/>
        </span>
        <span> MakeMyHouse</span>
      </a>
    </div>
  );
}

export default Logo