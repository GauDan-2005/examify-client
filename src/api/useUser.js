// instance
import { axios_instance } from "../lib/axios";

// toast
import { errorToast } from "../lib/toast";

const useUser = () => {
  const getUserDetails = async (callback) => {
    try {
      const response = await axios_instance.get(`/user`);
      // handle failure
      if (![200, 201].includes(response?.status || response?.data?.status)) {
        errorToast(
          response?.data?.message || "Failed to get user. Please try again."
        );
      }

      // check for callback
      if (callback && typeof callback === "function") {
        callback(response?.data, null);
      }
    } catch (error) {
      callback(null, error);
    } finally {
      console.log(
        "Get user request completed. This message is displayed regardless of success or failure."
      );
    }
  };

  const updateUserDetails = async (payload, callback) => {
    try {
      const response = await axios_instance.put(`/user`, payload);
      // handle failure
      if (![200, 201].includes(response?.status || response?.data?.status)) {
        errorToast(
          response?.data?.message || "Failed to update user. Please try again."
        );
      }

      // check for callback
      if (callback && typeof callback === "function") {
        callback(response?.data, null);
      }
    } catch (error) {
      callback(null, error);
    } finally {
      console.log(
        "Update user request completed. This message is displayed regardless of success or failure."
      );
    }
  };

  return {
    getUserDetails,
    updateUserDetails,
  };
};

export default useUser;
