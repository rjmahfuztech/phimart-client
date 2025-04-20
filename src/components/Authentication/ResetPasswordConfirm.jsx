import React from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const ResetPasswordConfirm = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const { resetPasswordConfirm } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await resetPasswordConfirm(
        uid,
        token,
        data.new_password
      );
      if (response.success) {
        Swal.fire({
          title: "Password Reseated",
          text: `${response.message}`,
          icon: "success",
          allowOutsideClick: false,
          confirmButtonText: "Login now",
          customClass: {
            confirmButton: "btn btn-primary",
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) navigate("/login");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex items-center -mt-8 px-4">
      <div className="card bg-base-100 w-[400px] mx-auto py-10 shadow-lg border border-gray-200">
        <h1 className="text-center text-2xl font-semibold">
          Reset Your Password
        </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                {...register("new_password", {
                  required: "Password is required",
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    message:
                      "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
                  },
                })}
                type="password"
                placeholder="Your new password"
                className={`input input-md w-full ${
                  errors.new_password ? "input-error" : ""
                }`}
              />
              {errors.new_password && (
                <p className="mt-1 text-red-500 font-semibold">
                  {errors.new_password.message}
                </p>
              )}
            </div>
            <div className="mb-3">
              <input
                {...register("confirm_password", {
                  required: "Password confirmation is required",
                  validate: (value) =>
                    value === watch("new_password") || "Password do not match",
                })}
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
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
