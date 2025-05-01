import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Swal from "sweetalert2";
import { Toast } from "../components/SuccessAlert";
import handleApiError from "../components/handleApiError";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const [authTokens, setAuthTokens] = useState(() => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  });

  // Fetch User Profile
  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get("/auth/users/me/", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("User Profile error: ", error.response.data?.detail);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authTokens) fetchUserProfile();
    else {
      setUser(null);
      setLoading(false);
    }
  }, [authTokens]);

  // Update User Profile
  const updateUserProfile = async (data) => {
    try {
      await apiClient.put("/auth/users/me/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      await Toast.fire({
        icon: "success",
        title: "Profile data updated",
        background: "#10B981",
        color: "#fff",
      });
    } catch (error) {
      return handleApiError(error);
    }
  };

  // Change Password
  const changeUserPassword = async (data) => {
    try {
      await apiClient.post("/auth/users/set_password/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      Swal.fire({
        title: "Good job!",
        text: "Your password successfully changed.",
        icon: "success",
      });
    } catch (error) {
      return handleApiError(error);
    }
  };

  // Login User
  const loginUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/jwt/create/", userData);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      setAuthTokens(response.data);
      return { success: true };
    } catch (error) {
      setErrorMsg(error.response.data?.detail);
    }
  };

  // Register User
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);
      return {
        success: true,
        message:
          "Registration successful. A confirmation mail has been sent! Please check your E-mail.",
      };
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data)
          .flat()
          .join("\n");
        setErrorMsg(errorMessage);
      } else setErrorMsg("Registration Failed! Try again.");
    }
  };

  // LogoutUser User
  const logoutUser = () => {
    localStorage.removeItem("authTokens");
    localStorage.removeItem("cartId");
    setUser(null);
    setAuthTokens(null);
  };

  // Resend Email
  const resendUserEmail = async (email) => {
    try {
      await apiClient.post("/auth/users/resend_activation/", {
        email,
      });
      return {
        success: true,
        message: "Activation E-mail sent. Please check your mail again.",
      };
    } catch (error) {
      handleApiError(error);
    }
  };

  // Reset Password
  const resetPassword = async (email) => {
    try {
      await apiClient.post("/auth/users/reset_password/", {
        email,
      });
      return {
        success: true,
        message: "We have sent you a password recovery link to your email",
      };
    } catch (error) {
      handleApiError(error);
    }
  };

  // Forgot Password Confirm
  const resetPasswordConfirm = async (uid, token, new_password) => {
    try {
      await apiClient.post("/auth/users/reset_password_confirm/", {
        uid,
        token,
        new_password,
      });
      return {
        success: true,
        message: "Your password has been reset successfully!",
      };
    } catch (error) {
      handleApiError(error);
      console.log(error);
    }
  };

  return {
    errorMsg,
    user,
    loading,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    changeUserPassword,
    resendUserEmail,
    resetPassword,
    resetPasswordConfirm,
  };
};

export default useAuth;
