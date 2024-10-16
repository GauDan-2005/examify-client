import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../Button/Button";

import { logoutUser } from "../../store/reducers/userSlice";
import { setPage } from "../../store/reducers/pageSlice";

import styles from "./Sidebar.module.scss";
import { images } from "../../constants/images";

const Sidebar = ({ routes }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <Link to={"/"} className={styles.logo_wrapper}>
        <img src={images.logo} alt="Examify" className={styles.logo} />
      </Link>
      <div className={styles.routes}>
        {routes.map((route, idx) => (
          <Link
            key={route.name}
            onClick={() => {
              navigate(route.path);
              dispatch(setPage(route.name));

              // if same page refresh it
              if (location.pathname === route.path) {
                window.location.reload();
              }
            }}
            to={route.path}
            className={`${styles.route} ${
              location.pathname === route.path ? styles.active : ""
            }`}
          >
            <p className={styles.route_title}>{route.name}</p>
          </Link>
        ))}
      </div>
      <div className={styles.logout_wrapper}>
        <Button
          title={"Sign out"}
          onClick={() => dispatch(logoutUser())}
          className={styles.logout_btn}
        />
      </div>
    </div>
  );
};

export default Sidebar;
