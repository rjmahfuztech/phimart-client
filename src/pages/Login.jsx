import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import ErrorAlert from "../components/ErrorAlert";
import { useState } from "react";

const Login = () => {
  const { errorMsg, loginUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await loginUser(data);
      if (response.success) navigate("/dashboard");
    } catch (error) {
      console.log("Login error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center -mt-20 px-4">
      <div className="card bg-base-100 w-[400px] mx-auto py-10 shadow-lg border border-gray-200">
        <h1 className="text-center text-2xl font-semibold">Sign In</h1>
        <div className="card-body">
          {errorMsg && <ErrorAlert error={errorMsg} />}
          <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Enter Your Email"
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
                  // pattern: {
                  //   value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                  //   message:
                  //     "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
                  // },
                })}
                id="password"
                type="password"
                placeholder="Enter Your Password"
                className={`input input-md w-full ${
                  errors.password ? "input-error" : ""
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-red-500 font-semibold">
                  {errors.password.message}
                </p>
              )}
              <Link to="/reset_password" className="btn btn-link -ml-4">
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full"
            >
              {isLoading ? "Login In" : "Login"}
            </button>
          </form>
        </div>
        <p className="font-semibold text-center mt-3">
          Don't have an account?{" "}
          <Link
            className="underline text-primary transition-colors"
            to="/register"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
