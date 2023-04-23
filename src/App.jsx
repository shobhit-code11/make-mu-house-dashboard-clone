//Browser Router
// import React from "react";
// import SideBarProvider from "./apis/SidebarContext";
// import SidebarMenu from "./components/sidebars/SidebarMenu";
// import Home from "./pages/home/Home";
// import Navbar from "./pages/navbar/Navbar";
// import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
// import Rent from "./pages/home/Rent";
// import Buy from "./pages/home/Buy";
// import Commercial from "./pages/home/Commercial";
// import Pg from "./pages/home/Pg";
// import Plots from "./pages/home/Plots";

// const App = () => {
//   return (
//     <Router>
//       <SideBarProvider>
//         <nav>
//           <Navbar />
//         </nav>
//         <aside>
//           <SidebarMenu />
//         </aside>
        
//         <Routes>
//           <Route path="/" element={<Buy />} />
//           <Route path="/rent" element={<Rent />} />
//           <Route path="/commercial" element={<Commercial />} />
//           <Route path="/pg" element={<Pg />} />
//           <Route path="/plots" element={<Plots />} />
//         </Routes>
//       </SideBarProvider>
//     </Router>
//   );
// };

// export default App;


// custom roter
// import React from "react";
// import SideBarProvider from "./apis/SidebarContext";
// import SidebarMenu from "./components/sidebars/SidebarMenu";
// import Home from "./pages/home/Home";
// import Navbar from "./pages/navbar/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Rent from "./pages/home/Rent";
// import Buy from "./pages/home/Buy";
// import Commercial from "./pages/home/Commercial";
// import Pg from "./pages/home/Pg";
// import Plots from "./pages/home/Plots";

// const App = () => {
//   return (
//     <Router>
//       <SideBarProvider>
//         <nav>
//           <Navbar />
//         </nav>
//         <aside>
//           <SidebarMenu />
//         </aside>

//         <Home />
//       </SideBarProvider>
//     </Router>
//   );
// };

// export default App




import React from "react";
import SideBarProvider from "./apis/SidebarContext";
import SidebarMenu from "./components/sidebars/SidebarMenu";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rent from "./pages/home/Rent";
import Buy from "./pages/home/Buy";
import Commercial from "./pages/home/Commercial";
import Pg from "./pages/home/Pg";
import Plots from "./pages/home/Plots";
import MainRoutes from "./routes/MainRoute";
import Modal from "./components/helper/Modal";
import ModalProvider from "./apis/ModalContext";
//*import SidebarModal from "./components/helper/SidebarModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ModalProvider>
        <SideBarProvider>
          {/* <Modal> */}
          <nav>
            <Navbar />
          </nav>
          <ToastContainer theme="dark" pauseOnHover />
          <aside>
            {/* <SidebarModal> */}
            <SidebarMenu />
            <Home />
            {/* </SidebarModal> */}
          </aside>
          <main>
            <MainRoutes />
          </main>
          {/* </Modal> */}
        </SideBarProvider>
      </ModalProvider>
    </Router>
  );
}; 

export default App;