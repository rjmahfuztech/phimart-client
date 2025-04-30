import React from "react";
import { IoStar } from "react-icons/io5";

const StarRating = ({ onChange, rating, error }) => {
  return (
    <div className="flex gap-2 items-center mt-1">
      {[...Array(5)].map((_, i) => {
        const value = i + 1;
        return (
          <IoStar
            key={value}
            onClick={() => onChange(value)}
            size={28}
            className={`${
              value <= rating
                ? "text-yellow-400"
                : `${error ? "text-red-200" : "text-gray-500"}`
            } transition-colors duration-200 hover:text-yellow-500`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
