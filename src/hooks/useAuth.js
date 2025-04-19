import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Swal from "sweetalert2";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  // Handle API Error
  const handleApiError = (
    error,
    defaultMessage = "Something Went Wrong, Try again!"
  ) => {
    let ifError = "";
    if (error.response && error.response.data) {
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      ifError = errorMessage;
    } else ifError = defaultMessage;
    if (ifError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${ifError} try again!`,
      });
    }
  };

  // Fetch User Profile
  const fetchUserProfile = async () => {
    try {
      const response = await apiClient.get("/auth/users/me/", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("User Profile error: ", error.response.data?.detail);
    }
  };

  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens]);

  // Update User Profile
  const updateUserProfile = async (data) => {
    try {
      await apiClient.put("/auth/users/me/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      // Swal.fire({
      //   title: "Good job!",
      //   text: "You Profile successfully updated.",
      //   icon: "success",
      // });
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
        text: "You password successfully changed.",
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
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      // After login set user
      await fetchUserProfile();
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
    setUser(null);
    setAuthTokens(null);
  };

  return {
    errorMsg,
    user,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    changeUserPassword,
  };
};

export default useAuth;
