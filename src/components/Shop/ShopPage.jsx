import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  //   useEffect(() => {
  //     setIsLoading(true);
  //       apiClient
  //         .get(`/products/?page=${currentPage}`)
  //         .then((res) => {
  //           setProducts(res.data.results);
  //           setTotalPages(Math.ceil(res.data.count / res.data.results.length));
  //         })
  //         .catch((err) => console.log(err))
  //         .finally(() => setIsLoading(false));
  //   }, [currentPage]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get(`/products/?page=${currentPage}`);
      const data = await response.data;

      setProducts(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      {/* Loading  */}
      {isLoading && (
        <div className="flex justify-center items-center h-screen py-10">
          <span className="loading loading-spinner loading-xl text-secondary"></span>
        </div>
      )}
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
