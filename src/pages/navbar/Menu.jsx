import React, { useContext } from "react";
import Styles from "./navbar.module.css";
import { FaHeart, FaBars } from "react-icons/fa";
import { SidebarContext } from "../../apis/SidebarContext";

const Menu = () => {
  let { setToggle } = useContext(SidebarContext);
  return (
    <div className={Styles.menuBlock}>
      <ul>
        <li>
          <a href="#">Download App</a>
        </li>
        <li>
          <a href="#" style={{
                color: "blue",
                background: "#fff",
                borderRadius: "4px",
          }}
          >
            List Property
            <span
              style={{
                color: "#fff",
                background: "#F22B68",
                borderRadius: "4px",
                padding: "1px",
              }}
            >
              free
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            Saved{" "}
            <span>
              <FaHeart />
            </span>
          </a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#" className={Styles.dashboardMenu}>
            Dashboard
          </a>
        </li>
        <li>
          <button
            href="#"
            onClick={e => {
              setToggle(true);
              e.stopPropagation();
            }}
          >
            <FaBars />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
