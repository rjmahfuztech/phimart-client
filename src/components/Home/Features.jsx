import React from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { FaShoppingCart, FaTags } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Features = () => {
  const features = [
    {
      icon: <FaShoppingCart />,
      title: "Free Delivery",
      description:
        "Get your orders delivered at no extra cost, fast and hassle-free.",
    },
    {
      icon: <MdVerified />,
      title: "Quality Guarantee",
      description: "We ensure top-notch quality for every product you purchase",
    },
    {
      icon: <FaTags />,
      title: "Daily Offers",
      description: "Exclusive discount and special deals available every day.",
    },
    {
      icon: <BsShieldLockFill />,
      title: "100% Secure Payment",
      description: "Exclusive discount and special deals available every day.",
    },
  ];

  return (
    <div className="max-w-5/6 mx-auto grid grid-cols md:grid-cols-2 my-12 md:my-20 gap-6 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div key={index} className="text-center px-4">
          <div className="flex justify-center items-center text-red-400 text-3xl">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-semibold py-2">{feature.title}</h3>
          <p className="text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
