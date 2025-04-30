import { FiEdit } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const ReviewCard = ({ review }) => {
  return (
    <div className="shadow-md hover:shadow-lg transition-shadow border border-gray-200 rounded-lg p-4 md:p-6 my-4">
      <div className="flex gap-2 items-center justify-end">
        <FiEdit
          className="text-green-500 hover:text-green-700 transition-colors cursor-pointer"
          size={22}
        />
        <MdDelete
          className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          size={28}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-xl font-bold -mt-6 mb-3">{review.user.name}</h2>
        <div className="flex gap-2 items-center mt-1">
          {[...Array(5)].map((_, i) => {
            const value = i + 1;
            return (
              <IoStar
                key={value}
                size={26}
                className={`${
                  review.ratings >= value ? "text-yellow-500" : "text-gray-500"
                }`}
              />
            );
          })}
        </div>
        <p className="mt-2 font-semibold">{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
