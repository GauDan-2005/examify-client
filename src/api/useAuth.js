import { useState } from "react";
import { axios_instance } from "../lib/axios/axios";

const useUser = () => {
  const [loading, setLoading] = useState(false);

  const registerUser = async (user, cb) => {
    try {
      setLoading(true);
      const response = await axios_instance.post("api/auth/register", user);

      if (response.status !== 200) {
        const data = await response.json();
        throw new Error(data.error || "Some error occurred, please try again");
      }

      if (cb && typeof cb === "function") {
        cb(response, null);
      }
    } catch (err) {
      cb(null, err);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (user, cb) => {
    try {
      setLoading(true);

      const response = await axios_instance.post("api/auth/login", user);

      if (response.status !== 200) {
        const data = await response.data;
        throw new Error(data);
      }
      if (cb && typeof cb === "function") {
        cb(response, null);
      }
    } catch (err) {
      cb(null, err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    registerUser,
    loginUser,
  };
};

export default useUser;
