import { useRoutes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomePage from "../pages/home/HomePage";
import PageNotFount from "../pages/PageNotFount";

let MainRoutes = () => {
    let customRoutes = useRoutes([
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <PageNotFount />,
      },
    ]);
    return customRoutes;
}

export default MainRoutes;