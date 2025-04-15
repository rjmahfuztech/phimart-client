import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { isLoading, products, totalPages } = useFetchProducts(
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder
  );
  const categories = useFetchCategories();

  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <FilterSection
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        categories={categories}
        handleCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        handleSearchQuery={setSearchQuery}
        handleSortOrder={setSortOrder}
      />
      <ProductList products={products} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
