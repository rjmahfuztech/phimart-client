import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/products/")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="section bg-gray-50 py-16 px-3">
      <div className="max-w-5/6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-start mb-2 sm:mb-0">
            Trending Products
          </h2>
          <button className="btn btn-secondary text-lg px-6 py-5 rounded-full">
            View All
          </button>
        </div>
        {/* Loading  */}
        {!error && isLoading && (
          <div className="text-center py-10">
            <span className="loading loading-spinner loading-xl text-secondary"></span>
          </div>
        )}
        {/* If error happen */}
        {error && <ErrorAlert error={error} />}

        {!isLoading && !error && products.length > 0 && (
          <Swiper
            spaceBetween={10}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* if no product available */}
        {!isLoading && !error && products.length === 0 && (
          <h3 className="text-center text-2xl text-shadow-pink-500">
            No products available!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Product;
