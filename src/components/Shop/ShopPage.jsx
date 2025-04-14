import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProducts from "../../hooks/useFetchProducts";
import FilterSection from "./FilterSection";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, products, totalPages } = useFetchProducts(currentPage);

  // if loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen py-10">
        <span className="loading loading-spinner loading-xl text-secondary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <FilterSection />
      <ProductList products={products} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
