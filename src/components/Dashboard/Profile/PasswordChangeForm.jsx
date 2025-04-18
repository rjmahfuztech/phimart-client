import React, { useState } from "react";

const PasswordChangeForm = ({ register, errors, watch, isEditing }) => {
  const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsPasswordSectionOpen(!isPasswordSectionOpen)}
        className="btn btn-link font-bold"
      >
        Change Password
      </button>
      {isPasswordSectionOpen && (
        <div>
          <div className="mb-2">
            <label htmlFor="password" className="font-medium text-gray-900">
              Current Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              disabled={!isEditing}
              {...register("password", { required: "Password is required" })}
              className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
                isEditing ? "outline-gray-300" : "outline-gray-100"
              } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
            />
            {errors.password && (
              <p className="mt-1 text-red-500 font-bold">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-2 sm:flex gap-4">
            <div className="w-full mb-2 sm:mb-0">
              <label
                htmlFor="new_password"
                className="font-medium text-gray-900"
              >
                New Password
              </label>
              <input
                id="new_password"
                type={showPassword ? "text" : "password"}
                disabled={!isEditing}
                {...register("new_password", {
                  required: "Password is required",
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    message:
                      "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
                  },
                })}
                className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
                  isEditing ? "outline-gray-300" : "outline-gray-100"
                } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
              />
              {errors.new_password && (
                <p className="mt-1 text-red-500 font-bold">
                  {errors.new_password.message}
                </p>
              )}
            </div>
            <div className="w-full mb-2 sm:mb-0">
              <label
                htmlFor="retype_password"
                className="font-medium text-gray-900"
              >
                Retype Password
              </label>
              <input
                id="retype_password"
                type={showPassword ? "text" : "password"}
                disabled={!isEditing}
                {...register("retype_password", {
                  required: "Password is required",
                  validate: (value) =>
                    value === watch("new_password") || "Password do not match",
                })}
                className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
                  isEditing ? "outline-gray-300" : "outline-gray-100"
                } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
              />
              {errors.retype_password && (
                <p className="mt-1 text-red-500 font-bold">
                  {errors.retype_password.message}
                </p>
              )}
              {isEditing && (
                <div className="flex justify-end mt-2 gap-2 text-sm">
                  <label htmlFor="show_password">Show Password</label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="toggle toggle-sm"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordChangeForm;
