import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import useAuth from "../../api/useAuth";

import { setUser } from "../../store/reducers/userSlice";

import Button from "../../components/Button/Button";

import styles from "./Register.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [activeInput, setActiveInput] = useState(null);

  const { registerUser, loading } = useAuth();
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
    if (!userData.email || !userData.password || !userData.username) {
      toast.error("Please fill all the fields");
      return;
    }

    registerUser(userData, (response, error) => {
      if (error) {
        toast.error("Some error occurred, please try again");
        return;
      }

      if (response?.data?.token) {
        dispatch(setUser(response?.data));
        toast.success("Registration successful");
        navigate("/user/dashboard");
      }
    });
  };

  return (
    <div className={styles.login}>
      <p className={styles.header_text}>Sign Up</p>
      <div className={styles.form}>
        <div
          className={`${styles.input_wrapper} ${
            activeInput === "email" ? styles.active : ""
          }`}
        >
          <p className={styles.input_label}>Username</p>
          <input
            type="text"
            name="username"
            className={`${styles.text_input} ${
              activeInput === "username" ? styles.active : ""
            }`}
            value={userData.username}
            onChange={handleInputChange}
            onFocus={() => setActiveInput("username")}
            onBlur={() => setActiveInput(null)}
          />
        </div>
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
            title={loading ? "Loading" : "Register"}
            onClick={onSubmit}
            className={styles.login_btn}
          />
        </div>
      </div>
      <p className={styles.link_text}>
        Already have an account?{" "}
        <a href="/login" className={styles.link}>
          Sign in now
        </a>
      </p>
    </div>
  );
};

export default Register;
