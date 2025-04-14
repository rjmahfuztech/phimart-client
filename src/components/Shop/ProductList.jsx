import React from "react";
import ProductItem from "../Products/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 md:my-20">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
