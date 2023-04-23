import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div id={Styles.navbarBlock}>
      <article>
        <Logo />
        <Menu />
      </article>
    </div>
  );
};

export default Navbar;
