import { Link } from "react-router";
import defaultImg from "../../assets/default-img.jpeg";

const ProductItem = ({ product }) => {
  return (
    <div className="card bg-base-100 w-full h-[400px] lg:h-[500px] mx-auto shadow-sm">
      <figure className="h-80 p-5 mt-5">
        <img
          src={product.images.length > 0 ? product.images[0].image : defaultImg}
          alt="Shoes"
          className="rounded-xl object-cover w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <h3 className="text-xl text-red-500 font-bold">{product.price}</h3>
        <p>{product.description}</p>
        <div className="card-actions">
          <Link to={`/shop/${product.id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
