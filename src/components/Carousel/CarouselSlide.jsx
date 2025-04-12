import React from "react";

const CarouselSlide = ({ title, subtitle, image }) => {
  return (
    <section className="w-full md:h-[750px] md:flex px-4 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-start md:ml-10">
          <h2 className="text-3xl text-gray-800 font-semibold md:text-6xl">
            {title}
          </h2>
          <p className="text-gray-500 my-3 text-lg">{subtitle}</p>
          <button className="btn btn-secondary md:text-lg md:p-6 rounded-full">
            Shop Collection
          </button>
        </div>
        <div className="mb-5 md:mb-0">
          <img className="drop-shadow-lg" src={image} alt="banner image" />
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;
