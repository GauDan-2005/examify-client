import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import useAuth from "../../api/useAuth";

import { setUser } from "../../store/reducers/userSlice";

import Button from "../../components/Button/Button";

import styles from "./Login.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [activeInput, setActiveInput] = useState(null);

  const { loginUser, loading } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    if (!userData.email || !userData.password) {
      toast.error("Please fill all the fields");
      return;
    }

    loginUser(userData, (response, error) => {
      if (error) {
        toast.error(error.response.data.msg);
        return;
      }

      if (response?.data?.token) {
        dispatch(setUser(response?.data));
        toast.success("Login successful");
        navigate("/user/dashboard");
      }
    });
  };

  return (
    <div className={styles.login}>
      <p className={styles.header_text}>Sign In</p>
      <div className={styles.form}>
        <div
          className={`${styles.input_wrapper} ${
            activeInput === "email" ? styles.active : ""
          }`}
        >
          <p className={styles.input_label}>Email</p>
          <input
            type="text"
            name="email"
            className={`${styles.text_input} ${
              activeInput === "email" ? styles.active : ""
            }`}
            value={userData.email}
            onChange={handleInputChange}
            onFocus={() => setActiveInput("email")}
            onBlur={() => setActiveInput(null)}
          />
        </div>
        <div
          className={`${styles.input_wrapper} ${
            activeInput === "password" ? styles.active : ""
          }`}
        >
          <p className={styles.input_label}>Password</p>
          <input
            type="password"
            name="password"
            className={`${styles.text_input} ${
              activeInput === "password" ? styles.active : ""
            }`}
            value={userData.password}
            onChange={handleInputChange}
            onFocus={() => setActiveInput("password")}
            onBlur={() => setActiveInput(null)}
          />
        </div>
        <div className={styles.action_wrapper}>
          <Button
            title={loading ? "Loading" : "Login"}
            onClick={onSubmit}
            className={styles.login_btn}
          />
        </div>
      </div>
      <p className={styles.link_text}>
        New to Examify?{" "}
        <a href="/register" className={styles.link}>
          Sign up now
        </a>
      </p>
    </div>
  );
};

export default Login;
