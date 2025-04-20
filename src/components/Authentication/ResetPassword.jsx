import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const { resetPassword } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await resetPassword(data.email);
      if (response.success) {
        Swal.fire({
          title: "Check your mail",
          text: `${response.message}`,
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen flex items-center -mt-20 px-4">
      <div className="card bg-base-100 w-[400px] mx-auto py-10 shadow-lg border border-gray-200">
        <h1 className="text-center text-2xl font-semibold">Forgot Password?</h1>
        <p className="text-lg p-2 text-center">
          Enter your email to reset password
        </p>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 w-full">
              <input
                {...register("email", { required: "Enter a valid email" })}
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
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full"
            >
              {isLoading ? "Sending" : "Next"}
            </button>
          </form>
        </div>
        <p className="font-semibold text-center mt-2">
          Remember your password?{" "}
          <Link
            className="underline text-primary transition-colors"
            to="/login"
          >
            Try logging in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
