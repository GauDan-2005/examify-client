import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [activeInput, setActiveInput] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    try {
      const res = axios.post("/api/auth/login", userData);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
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
            title={"Login"}
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
