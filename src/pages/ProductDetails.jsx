import { useEffect, useState } from "react";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import { Link, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import apiClient from "../services/api-client";
import ReviewSection from "../components/Reviews/ReviewSection";
import useCartContext from "../hooks/useCartContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const { createOrGetCart } = useCartContext();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`products/${productId}/`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

  // Render page in every visit
  useEffect(() => {
    createOrGetCart();
  }, []);

  if (loading) return <p className="text-lg mt-5 text-center">Loading...</p>;
  if (!product) return <p className="text-center mt-5">Product not found!</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-28 mb-10">
      <Link
        to="/shop"
        className="font-semibold flex items-center gap-2 hover:text-gray-600 hover:-ml-1 transition-all"
      >
        <FaArrowLeftLong />
        <span>Back to products</span>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <ProductImageGallery
          images={product.images}
          productName={product.name}
        />
        <div className="mt-1 relative">
          <span className="border rounded-lg px-2 py-1 font-semibold">
            Category
          </span>
          <h2 className="text-2xl font-bold mt-4 mb-6">{product.name}</h2>
          <h2 className="text-3xl font-semibold">{product.price}</h2>
          <p className="my-4 font-semibold">{product.description}</p>
          <span className="border rounded-lg px-2 py-1 font-semibold">
            Availability: in Stock ({product.stock} available)
          </span>
          {/* Add to cart buttons  */}
          <div className="md:absolute mt-10 bottom-0">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
      {/* Reviews  */}
      <ReviewSection />
    </div>
  );
};

export default ProductDetails;
