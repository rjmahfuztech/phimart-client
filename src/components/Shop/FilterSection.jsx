import React from "react";

const FilterSection = ({
  priceRange,
  handlePriceChange,
  categories,
  handleCategoryChange,
  searchQuery,
  handleSearchQuery,
  handleSortOrder,
}) => {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-semibold mt-24">
        Shop Our Products
      </h1>
      <div className="my-4 grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="shadow rounded-lg p-5 border border-slate-100">
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
                min="0"
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              />
              <input
                className="w-full range range-primary"
                type="range"
                min="0"
                max={priceRange[1]}
                step="5"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              className="py-2 pl-2 pr-4 w-18 sm:w-22 input input-secondary rounded-lg"
              type="number"
              min={priceRange[0]}
              max="1000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            />
            <input
              className="w-full range range-primary"
              type="range"
              min={priceRange[0]}
              max="1000"
              value={priceRange[1]}
              step="5"
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            />
          </div>
          <div className="flex justify-between gap-2 mt-2">
            <h4 className="text-md">${priceRange[0]}</h4>
            <h4 className="text-md">${priceRange[1]}</h4>
          </div>
        </div>
        <div className="shadow rounded-lg p-5 border border-slate-100">
          <div className="mb-1">
            <label htmlFor="category" className="text-md font-semibold">
              Category:
            </label>
          </div>
          <select
            className="w-full rounded-lg select select-secondary p-2"
            id="category"
            defaultValue="Select a category"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="shadow rounded-lg p-5 border border-slate-100">
          <div className="mb-1">
            <label htmlFor="search" className="text-md font-semibold">
              Search:
            </label>
          </div>
          <input
            id="search"
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
            className="input input-secondary p-2 rounded-lg w-full"
          />
        </div>
        <div className="shadow rounded-lg p-5 border border-slate-100">
          <div className="mb-1">
            <label htmlFor="sort-by" className="text-md font-semibold">
              Sort By Price:
            </label>
          </div>
          <select
            className="w-full rounded-lg select select-secondary p-2"
            id="sort-by"
            defaultValue="Default"
            onChange={(e) => handleSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price">Price: Low To High</option>
            <option value="-price">Price: High To Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
