import React from "react";

const ProfileForm = ({ register, errors, isEditing }) => {
  return (
    <div className="mt-10">
      <div className="mb-2 sm:flex gap-4">
        <div className="w-full mb-2 sm:mb-0">
          <label htmlFor="first_name" className="font-medium text-gray-900">
            First Name
          </label>
          <input
            id="first_name"
            type="text"
            disabled={!isEditing}
            {...register("first_name", { required: "First name is required" })}
            className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
              isEditing ? "outline-gray-300" : "outline-gray-100"
            } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
          />
          {errors.first_name && (
            <p className="mt-1 text-red-500 text-sm font-bold">
              {errors.first_name.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="last_name" className="font-medium text-gray-900">
            Last Name
          </label>
          <input
            id="last_name"
            type="text"
            disabled={!isEditing}
            {...register("last_name")}
            className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
              isEditing ? "outline-gray-300" : "outline-gray-100"
            } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
          />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="font-medium text-gray-900">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          disabled
          {...register("email")}
          autoComplete="email"
          className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
            isEditing ? "outline-gray-200" : "outline-gray-100"
          } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="address" className="font-medium text-gray-900">
          Address
        </label>
        <input
          id="address"
          type="text"
          disabled={!isEditing}
          {...register("address")}
          className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
            isEditing ? "outline-gray-300" : "outline-gray-100"
          } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="phone_number" className="font-medium text-gray-900">
          Phone Number
        </label>
        <input
          id="phone_number"
          type="number"
          disabled={!isEditing}
          {...register("phone_number")}
          className={`w-full mt-1 rounded-md bg-base-200 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
            isEditing ? "outline-gray-300" : "outline-gray-100"
          } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
