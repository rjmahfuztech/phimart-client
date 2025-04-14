import React from "react";

const FilterSection = () => {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-semibold mt-6">
        Shop Our Products
      </h1>
      <div className="my-4 grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="shadow rounded-lg p-5">
          <div>
            <div className="mb-1">
              <label htmlFor="price" className="text-md font-semibold">
                Price Range:
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                className="py-2 pl-2 pr-4 w-18 sm:w-22 input input-secondary mb-1 rounded-lg"
                type="number"
                id="price"
              />
              <input className="w-full range range-primary" type="range" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              className="py-2 pl-2 pr-4 w-18 sm:w-22 input input-secondary rounded-lg"
              type="number"
            />
            <input className="w-full range range-primary" type="range" />
          </div>
        </div>
        <div className="shadow rounded-lg p-5">
          <div className="mb-1">
            <label htmlFor="category" className="text-md font-semibold">
              Category:
            </label>
          </div>
          <select
            className="w-full rounded-lg select select-secondary p-2"
            id="category"
            defaultValue="Select a category"
          >
            <option disabled={true}>Select a category</option>
            <option value="1">Book</option>
            <option value="2">Fashion</option>
          </select>
        </div>
        <div className="shadow rounded-lg p-5">
          <div className="mb-1">
            <label htmlFor="search" className="text-md font-semibold">
              Search:
            </label>
          </div>
          <input
            id="search"
            type="text"
            placeholder="Search books..."
            className="input input-secondary p-2 rounded-lg w-full"
          />
        </div>
        <div className="shadow rounded-lg p-5">
          <div className="mb-1">
            <label htmlFor="sort-by" className="text-md font-semibold">
              Sort By Price:
            </label>
          </div>
          <select
            className="w-full rounded-lg select select-secondary p-2"
            id="sort-by"
            defaultValue="Default"
          >
            <option disabled={true}>Default</option>
            <option value="1">Book</option>
            <option value="2">Fashion</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
