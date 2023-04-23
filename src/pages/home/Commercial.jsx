import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Styles from "./home.module.css";

const Commercial = () => {
  return (
    <>
      <div className={Styles.home}>
        <img
          src="https://c.housingcdn.com/demand/s/common/assets/defaultBannerCommercial.a281bb54.jpg"
          alt="img"
        />
      </div>
      <section className={Styles.home_content}>
        <h1>Properties to buy in Bengaluru</h1>
        <p>Yahan Search Khatam Karo</p>
        <div className={Styles.formBox}>
          <p className={Styles.linkText}>
            <span>
              <Link to="/">BUY</Link>
            </span>
            <span>
              <Link to="/rent">RENT</Link>
            </span>
            <span className={Styles.underline}>
              <Link to="/commercial">COMMERCIAL<sup style={{
                color: "#fff",
                background: "deeppink",
                padding:"2px"}}>new</sup></Link>
            </span>
            <span>
              <Link to="/pg">PG/CO-LIVING</Link>
            </span>
            <span>
              <Link to="/plots">PLOTS</Link>
            </span>
          </p>
          <form className={Styles.inputForm}>
            <select id="city" name="city">
              <option value="volvo">Bengaluru</option>
              <option value="saab">Mumbai</option>
              <option value="fiat">Hyderabadh</option>
              <option value="audi">Pune</option>
              <option value="fiat">Chennai</option>
              <option value="audi">Delhi</option>
              <option value="fiat">Kolkata</option>
              <option value="audi">Thane</option>
            </select>
            <input
              type="text"
              id="search"
              placeholder="Search for locality , landmark or builder"
            />
            <button style={{ border: "none" }}>
              <FaSearch /> Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Commercial;
