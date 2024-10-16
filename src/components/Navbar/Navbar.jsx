import { useLocation } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar = ({ routes }) => {
  const location = useLocation();

  const isNavbarActive = routes.some(
    (route) => route.path === location.pathname
  );

  const navTitle =
    routes.find((route) => route.path === location.pathname)?.name ||
    "Default Title";

  return (
    isNavbarActive && (
      <div className={styles.navbar}>
        <div className={styles.main}>
          <p className={styles.page_title}>{navTitle}</p>
        </div>
      </div>
    )
  );
};

export default Navbar;
