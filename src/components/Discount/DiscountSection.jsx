import bookImg from "../../assets/images/banner-image3.png";
import discountBgImg from "../../assets/images/banner-image-bg-1.jpg";
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
  return (
    <section
      className="w-full md:h-[750px] md:flex px-4 py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${discountBgImg})` }}
    >
      <div className="max-w-5/6 mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="sm:w-5/6 mb-5 md:mb-0">
          <img
            className="drop-shadow-lg md:min-w-[20rem]"
            src={bookImg}
            alt="book image"
          />
        </div>
        <div className=" text-center md:text-start md:ml-10">
          <h2 className="text-3xl text-gray-800 font-semibold md:text-4xl xl:text-6xl">
            30% Discount On All Items. Hurry Up !!!
          </h2>
          <DiscountTimer />
          <button className="btn btn-secondary md:text-lg md:p-6 rounded-full">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
