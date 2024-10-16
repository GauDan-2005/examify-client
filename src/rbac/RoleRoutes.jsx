// packages
import { useSelector } from "react-redux";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";

// roles routes
import { ROLE_ROUTES } from "./lib";

// constants
import { SLICE_NAMES } from "../constants/slices";

// components
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

// styles
import styles from "./RoleRoutes.module.scss";

const RoleRoutes = () => {
  const APP_USER = useSelector((state) => state[SLICE_NAMES.USER]?.user);

  const AUTH_ROUTES = ROLE_ROUTES.auth[0].routes;
  const SIDEBAR_ROUTES = APP_USER
    ? ROLE_ROUTES[APP_USER.role][0].routes.filter(
        (route) => route.isSidebarMenu
      )
    : [];

  const NAVBAR_ROUTES = APP_USER
    ? ROLE_ROUTES[APP_USER.role][0].routes.filter((route) => route.isNavBar)
    : [];

  return APP_USER ? (
    <div className={styles.main}>
      <Sidebar routes={SIDEBAR_ROUTES} />
      <div className={styles.body}>
        <Navbar routes={NAVBAR_ROUTES} />
        <Routes>
          {SIDEBAR_ROUTES?.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
          <Route path="/" element={<Navigate to="/user/dashboard" />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div className={styles.main}>
      <Routes>
        {AUTH_ROUTES?.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
};

export default RoleRoutes;
