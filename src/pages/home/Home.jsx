// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Styles from "./home.module.css";

// const Home = () => {
//   const routes = [
//     {
//       path: "/",
//       component: Home,
//     },
//     {
//       path: "/rent",
//       component: Home,
//     },
//     {
//       path: "/commercial",
//       component: Home,
//     },
//     {
//       path: "/pg",
//       component: Home,
//     },
//     {
//       path: "/plots",
//       component: Home,
//     },
//   ];
//   return (
//     <>
//       <div className={Styles.home}>
//         <img
//           src="https://c.housingcdn.com/demand/s/common/assets/defaultBanner.318ea184.jpg"
//           alt="img"
//         />
//       </div>
//       <section className={Styles.home_content}>
//         <h1>Properties to buy in Bengaluru</h1>
//         <p>Yahan Search Khatam Karo</p>
//         <div className={Styles.formBox}>
//           <p className={Styles.linkText}>
//             <span>
//               <Link to="/">BUY</Link>
//             </span>
//             <span>
//               <Link to="/rent">RENT</Link>
//             </span>
//             <span>
//               <Link to="/commercial">COMMERCIAL</Link>
//             </span>
//             <span>
//               <Link to="/pg">PG/CO-LIVING</Link>
//             </span>
//             <span>
//               <Link to="/plots">PLOTS</Link>
//             </span>
//           </p>
//           <form className={Styles.inputForm}>
//             <select id="city" name="city">
//               <option value="volvo">Mubai</option>
//               <option value="saab">Bengaluru</option>
//               <option value="fiat">Hyderabadh</option>
//               <option value="audi">Pune</option>
//               <option value="fiat">Chennai</option>
//               <option value="audi">Delhi</option>
//               <option value="fiat">Kolkata</option>
//               <option value="audi">Thane</option>
//             </select>
//             <input
//               type="text"
//               id="search"
//               placeholder="Search for locality , landmark or builder"
//             />
//             <button>
//               <FaSearch /> Search
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;









import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Outlet, useRoutes } from "react-router-dom";
import Buy from "./Buy";
import Commercial from "./Commercial";
import Styles from "./home.module.css";
import Pg from "./Pg";
import Plots from "./Plots";
import Rent from "./Rent";

const Home = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <Buy />,
    },
    {
      path: "rent",
      element: <Rent />,
    },
    {
      path: "commercial",
      element: <Commercial />,
    },
    {
      path: "pg",
      element: <Pg />,
    },
    {
      path: "plots",
      element: <Plots />,
    },
  ]);
    return routes;
};

export default Home;
