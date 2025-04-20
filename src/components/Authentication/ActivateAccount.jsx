import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import apiClient from "../../services/api-client";
import SuccessAlert from "../SuccessAlert";
import ErrorAlert from "../ErrorAlert";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .post("/auth/users/activation/", { uid, token })
      .then((res) => {
        setSuccessMsg("Your account has been successfully activated");
        setTimeout(() => navigate("/login"), 3000);
        console.log(res.data);
      })
      .catch((err) => {
        setErrorMsg("Something went wrong. Please check your activation link.");
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen px-4">
      <div className="max-w-2xl mx-auto p-5 pb-10 bg-base-100 border border-gray-100 shadow-xl card my-10">
        <h2 className="text-center text-2xl mb-4 font-semibold">
          Account Activation
        </h2>
        {successMsg && <SuccessAlert success={successMsg} />}
        {errorMsg && <ErrorAlert error={errorMsg} />}
      </div>
    </div>
  );
};

export default ActivateAccount;
