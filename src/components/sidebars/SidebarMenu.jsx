// import React, { useContext, useEffect, useRef, useState } from "react";
// import reactDOM from "react-dom";
// import { SidebarContext } from "../../apis/SidebarContext";
// import { FaTimes } from "react-icons/fa";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { GiBirdHouse } from "react-icons/gi";
// import Collapsible from "react-collapsible";

// const SidebarMenu = () => {
//   let { toggle, setToggle } = useContext(SidebarContext);
//   let [state, setState] = useState("close");
//   let detectRef = useRef();

//   function BoxComponent(prop) {
//     return (
//       <>
//         <div className="collapse_box">
//           <span>
//             <GiBirdHouse />
//           </span>
//           <span style={{ color: "black" }}>{prop.text}</span>
//         </div>
//       </>
//     );
//   }

//   // useEffect(() => {
//   function clickOut(e) {
//     if (detectRef.current.classList.contains("open")) {
//       // if (e.target !== detectRef.current) {
//       setToggle(false);
//     }
//   }
//   document.addEventListener("click", clickOut);
//   // },[detectRef])

//   let ShowSidebarMenu = () => {
//     return (
//       <nav
//         className={`${toggle ? "open" : "close"} sidebar`}
//         ref={detectRef}
//         onClick={e => e.stopPropagation()}
//       >
//         <div className="closeIcon" onClick={() => setToggle(false)}>
//           <FaTimes />
//         </div>
//         <div className="profile">
//           <img
//             src="https://c.housingcdn.com/demand/s/common/assets/tenant-avatar.81d688a4.png"
//             alt="img"
//             className="profile-pic"
//           />
//           <div className="profile-info">
//             <p>Hello 👋🏻</p>
//             <p>
//               <span>
//                 <IoIosCheckmarkCircleOutline />
//               </span>{" "}
//               Easy Contact with sellers
//             </p>
//             <p>
//               <span>
//                 <IoIosCheckmarkCircleOutline />{" "}
//               </span>
//               Personalized experience
//             </p>
//             <button className="login_btn">Login</button>
//           </div>
//         </div>
//         <hr />
//         <section className="myActivity">
//           <h1>My Activity</h1>
//           <div className="activityBox">
//             <div>
//               <span>
//                 <GiBirdHouse />
//               </span>
//               <span>Contacted Properties</span>
//             </div>
//             <div>
//               <span>
//                 <GiBirdHouse />
//               </span>
//               <span>Seen Properties</span>
//             </div>
//             <div>
//               <span>
//                 <GiBirdHouse />
//               </span>
//               <span>Saved Properties</span>
//             </div>
//             <div>
//               <span>
//                 <GiBirdHouse />
//               </span>
//               <span>Recent Searches</span>
//             </div>
//           </div>
//         </section>
//         <section className="collapse">
//           <h1>My Transactions</h1>
//           <Collapsible
//             trigger="Quick Links"
//             triggerStyle={{
//               color: "black",
//               background: "white",
//               display: "inline-block",
//               width: "100%",
//               padding: "10px",
//             }}
//           >
//             <div style={{ display: "flex", flexWrap: "wrap" }}>
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//             </div>
//           </Collapsible>
//           <Collapsible
//             trigger="Housing Edge"
//             triggerStyle={{
//               color: "black",
//               background: "white",
//               display: "inline-block",
//               width: "100%",
//               padding: "10px",
//             }}
//           >
//             <div style={{ display: "flex", flexWrap: "wrap" }}>
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//             </div>
//           </Collapsible>
//           <Collapsible
//             trigger="Services"
//             triggerStyle={{
//               color: "black",
//               background: "white",
//               display: "inline-block",
//               width: "100%",
//               padding: "10px",
//             }}
//           >
//             <div style={{ display: "flex", flexWrap: "wrap" }}>
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//             </div>
//           </Collapsible>
//           <Collapsible
//             trigger="Top Search"
//             triggerStyle={{
//               color: "black",
//               background: "white",
//               display: "inline-block",
//               width: "100%",
//               padding: "10px",
//             }}
//           >
//             <div style={{ display: "flex", flexWrap: "wrap" }}>
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//             </div>
//           </Collapsible>
//           <h1>Unsubscribe alerts</h1>
//           <Collapsible
//             trigger="Housing Advice"
//             triggerStyle={{
//               color: "black",
//               background: "white",
//               display: "inline-block",
//               width: "100%",
//               padding: "10px",
//             }}
//           >
//             <div style={{ display: "flex", flexWrap: "wrap" }}>
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//               <BoxComponent text="Contacted Properties" />
//             </div>
//           </Collapsible>
//         </section>
//         <div className="help_lang">
//           <p>
//             <span></span>
//             <span>Visit Help Center</span>
//             <span></span>
//           </p>
//           <p>
//             <span></span>
//             <span>Preffered language</span>
//             <span></span>
//           </p>
//         </div>
//         <section className="sidebar_footer">
//           <div className="download_app">
//             <p>Download Housing app</p>
//             <p>
//               <img
//                 src="https://c.housingcdn.com/supply/s/common/assets/app-store.29706cde.png"
//                 alt="img"
//               />
//               <img
//                 src="https://c.housingcdn.com/supply/s/common/assets/google-play.b94036af.png"
//                 alt="img"
//               />
//             </p>
//           </div>
//           <div className="scanner">
//             <img
//               src="https://c.housingcdn.com/supply/s/common/assets/qr-code.da92c2f2.png"
//               alt="img"
//             />
//           </div>
//         </section>
//       </nav>
//     );
//   };

//   return reactDOM.createPortal(
//     <>
//       <ShowSidebarMenu />
//     </>,
//     document.getElementById("sidebarMenu")
//   );
// };

// export default SidebarMenu;

import React, { useContext, useEffect, useRef, useState } from "react";
import reactDOM from "react-dom";
import { SidebarContext } from "../../apis/SidebarContext";
import { FaTimes } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GiBirdHouse } from "react-icons/gi";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { ModalContext } from "../../apis/ModalContext";
import Modal from "../helper/Modal";
import Login from "../auth/Login";
import AuthBlock from "../auth/AuthBlock";

const SidebarMenu = () => {
  let { toggle, setToggle } = useContext(SidebarContext);
  let [state, setState] = useState("close");
  const { show, setShow } = useContext(ModalContext);
  let detectRef = useRef();

  function BoxComponent(prop) {
    return (
      <>
        <div className="collapse_box">
          <span>
            <GiBirdHouse />
          </span>
          <span style={{ color: "black" }}>{prop.text}</span>
        </div>
      </>
    );
  }

  // useEffect(() => {
  function clickOut(e) {
    if (detectRef.current.classList.contains("open")) {
      // if (e.target !== detectRef.current) {
      setToggle(false);
    }
  }
  document.addEventListener("click", clickOut);
  // },[detectRef])

  let ShowSidebarMenu = () => {
    return (
      <nav
        className={`${toggle ? "open" : "close"} sidebar`}
        ref={detectRef}
        onClick={e => e.stopPropagation()}
        style={{ zIndex: "2" }}
      >
        <div className="closeIcon" onClick={() => setToggle(false)}>
          <FaTimes />
        </div>
        <div className="profile">
          <img
            src="https://c.housingcdn.com/demand/s/common/assets/tenant-avatar.81d688a4.png"
            alt="img"
            className="profile-pic"
          />
          <div className="profile-info">
            <p>Hello 👋🏻</p>
            <p>
              <span>
                <IoIosCheckmarkCircleOutline />
              </span>{" "}
              Easy Contact with sellers
            </p>
            <p>
              <span>
                <IoIosCheckmarkCircleOutline />{" "}
              </span>
              Personalized experience
            </p>
            <button
              className="login_btn"
              onClick={e => {
                e.stopPropagation();
                setShow(true);
              }}
            >
              Login
            </button>
            <Modal onClose={() => setShow(false)} show={show}>
              <AuthBlock />
            </Modal>
          </div>
        </div>
        <hr />
        <section className="myActivity">
          <h1>My Activity</h1>
          <div className="activityBox">
            <div>
              <span>
                <GiBirdHouse />
              </span>
              <span>Contacted Properties</span>
            </div>
            <div>
              <span>
                <GiBirdHouse />
              </span>
              <span>Seen Properties</span>
            </div>
            <div>
              <span>
                <GiBirdHouse />
              </span>
              <span>Saved Properties</span>
            </div>
            <div>
              <span>
                <GiBirdHouse />
              </span>
              <span>Recent Searches</span>
            </div>
          </div>
        </section>
        <section className="collapse">
          <h1>My Transactions</h1>
          <Collapsible
            trigger="Quick Links"
            triggerStyle={{
              color: "black",
              background: "white",
              display: "inline-block",
              width: "100%",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
            </div>
          </Collapsible>
          <Collapsible
            trigger="Housing Edge"
            triggerStyle={{
              color: "black",
              background: "white",
              display: "inline-block",
              width: "100%",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
            </div>
          </Collapsible>
          <Collapsible
            trigger="Services"
            triggerStyle={{
              color: "black",
              background: "white",
              display: "inline-block",
              width: "100%",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
            </div>
          </Collapsible>
          <Collapsible
            trigger="Top Search"
            triggerStyle={{
              color: "black",
              background: "white",
              display: "inline-block",
              width: "100%",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
            </div>
          </Collapsible>
          <h1>Unsubscribe alerts</h1>
          <Collapsible
            trigger="Housing Advice"
            triggerStyle={{
              color: "black",
              background: "white",
              display: "inline-block",
              width: "100%",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
              <BoxComponent text="Contacted Properties" />
            </div>
          </Collapsible>
        </section>
        <div className="help_lang">
          <p>
            <span></span>
            <span>Visit Help Center</span>
            <span></span>
          </p>
          <p>
            <span></span>
            <span>Preffered language</span>
            <span></span>
          </p>
        </div>
        <section className="sidebar_footer">
          <div className="download_app">
            <p>Download Housing app</p>
            <p>
              <img
                src="https://c.housingcdn.com/supply/s/common/assets/app-store.29706cde.png"
                alt="img"
              />
              <img
                src="https://c.housingcdn.com/supply/s/common/assets/google-play.b94036af.png"
                alt="img"
              />
            </p>
          </div>
          <div className="scanner">
            <img
              src="https://c.housingcdn.com/supply/s/common/assets/qr-code.da92c2f2.png"
              alt="img"
            />
          </div>
        </section>
      </nav>
    );
  };

  return <ShowSidebarMenu />;
};

export default SidebarMenu;
