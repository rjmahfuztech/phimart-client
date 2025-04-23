import { Link } from "react-router";
import defaultImg from "../../assets/default-img.jpeg";

const ProductItem = ({ product }) => {
  return (
    <div className="card bg-base-100 w-full xl:w-96 mx-auto shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={product.images.length > 0 ? product.images[0].image : defaultImg}
          alt="Shoes"
          className="rounded-xl"
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
