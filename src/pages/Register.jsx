import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, errorMsg, resendUserEmail } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  const [resendEmail, setResendEmail] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    delete data.confirm_password;
    try {
      const response = await registerUser(data);
      if (response.success) {
        setSuccessMsg(response.message);
      }
    } catch (error) {
      console.log("Registration failed", error);
    }
    // resend email set
    if (data.email) {
      setResendEmail(data.email);
    }
  };

  // Resend Email
  const handleResendMail = async () => {
    const response = await resendUserEmail(resendEmail);
    if (response.success) {
      Swal.fire({
        title: "Email Sent",
        text: `${response.message}`,
        icon: "success",
      });
    }
  };

  return (
    <div className="h-screen flex items-center px-4">
      <div className="card bg-base-100 w-[400px] mx-auto py-10 shadow-lg border border-gray-200">
        <h1 className="text-center text-2xl font-semibold">Sign Up</h1>
        <div className="card-body">
          {/* error alert  */}
          {errorMsg && <ErrorAlert error={errorMsg} />}
          {/* success alert  */}
          {successMsg && <SuccessAlert success={successMsg} />}
          {/* form  */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 w-full">
              <label
                className="text-md font-semibold text-gray-500"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                {...register("first_name", {
                  required: "This field is required",
                })}
                id="first_name"
                type="text"
                placeholder="Your first name"
                className={`input input-md w-full ${
                  errors.first_name ? "input-error" : ""
                }`}
              />
              {errors.first_name && (
                <p className="mt-1 text-red-500 font-semibold">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div className="mb-3 w-full">
              <label
                className="text-md font-semibold text-gray-500"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                {...register("last_name", {
                  required: "This field is required",
                })}
                id="last_name"
                type="text"
                placeholder="Your last name"
                className={`input input-md w-full ${
                  errors.last_name ? "input-error" : ""
                }`}
              />
              {errors.last_name && (
                <p className="mt-1 text-red-500 font-semibold">
                  {errors.last_name.message}
                </p>
              )}
            </div>
            <div className="mb-3 w-full">
              <label
                className="text-md font-semibold text-gray-500"
                htmlFor="address"
              >
                Address (optional)
              </label>
              <input
                {...register("address")}
                id="address"
                type="text"
                placeholder="Your address"
                className="input input-md w-full"
              />
            </div>
            <div className="mb-3 w-full">
              <label
                className="text-md font-semibold text-gray-500"
                htmlFor="phone_number"
              >
                Phone (optional)
              </label>
              <input
                {...register("phone_number")}
                id="phone_number"
                type="number"
                placeholder="Your phone number"
                className="input input-md w-full"
              />
            </div>
            <div className="mb-3 w-full">
              <label
                className="text-md font-semibold text-gray-500"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: "Enter a valid email" })}
                id="email"
                type="email"
                placeholder="Your email"
                className={`input input-md w-full ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* password */}
            <div className="mb-3">
              <label
                className="text-md font-semibold text-gray-500"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    message:
                      "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
                  },
                })}
                id="password"
                type="password"
                placeholder="Your password"
                className={`input input-md w-full ${
                  errors.password ? "input-error" : ""
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-red-500 font-semibold">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label
                className="text-md font-semibold text-gray-500"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <input
                {...register("confirm_password", {
                  required: "Password confirmation is required",
                  validate: (value) =>
                    value === watch("password") || "Password do not match",
                })}
                id="confirm_password"
                type="password"
                placeholder="Confirm your password"
                className={`input input-md w-full ${
                  errors.confirm_password ? "input-error" : ""
                }`}
              />
              {errors.confirm_password && (
                <p className="mt-1 text-red-500 font-semibold">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
            <input type="submit" className="btn btn-primary w-full" />
          </form>
          <div>
            {resendEmail && (
              <button onClick={handleResendMail} className="btn btn-link">
                Resend Email
              </button>
            )}
          </div>
        </div>
        <p className="font-semibold text-center -mt-4">
          Already have an account?{" "}
          <Link
            className="underline text-primary transition-colors"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
