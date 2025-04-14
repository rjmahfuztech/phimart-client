import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CategoryItems = ({ category, index }) => {
  const gradients = [
    "from-pink-100 to-blue-100",
    "from-blue-100 to-purple-100",
    "from-purple-100 to-pink-100",
    "from-pink-100 to-blue-100",
  ];
  return (
    <div
      className={`p-6 rounded-xl bg-gradient-to-br ${
        gradients[index % gradients.length]
      } shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex justify-between">
        <h3 className="h-12 w-12 rounded-full font-semibold bg-white flex justify-center items-center">
          {category.name.charAt(0)}
        </h3>
        <h4 className="h-10 w-10 rounded-full font-semibold bg-white flex justify-center items-center">
          {category.product_count}
        </h4>
      </div>
      <h2 className="text-2xl font-semibold mt-4">{category.name}</h2>
      <p className="text-gray-500 my-2">{category.description}</p>
      <button className="cursor-pointer text-pink-500 hover:text-pink-600 transition-colors font-semibold text-lg flex items-center justify-center">
        Explore <FaChevronRight />
      </button>
    </div>
  );
};

export default CategoryItems;
