import { useForm } from "react-hook-form";
import StarRating from "./StarRating";
import ReviewImage from "../../assets/images/review.jpg";

const ReviewForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const ratingValue = watch("ratings", 0);

  return (
    <div className="shadow-md border border-gray-200 rounded-lg p-4 mt-6 grid grid-cols-1 md:grid-cols-2">
      <div className="mx-2 md:mx-0 md:card-body order-2 md:order-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label htmlFor="ratings" className="font-medium">
              Rate Here
            </label>
            <StarRating
              onChange={(value) => setValue("ratings", value)}
              rating={ratingValue}
              error={errors.ratings}
            />
            <input
              id="ratings"
              type="hidden"
              {...register("ratings", { required: true })}
            />
            {errors.ratings && (
              <span className="text-red-500 mt-1 font-semibold">
                Rating is required
              </span>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="comment" className="font-medium">
              Your Review
            </label>
            <textarea
              id="comment"
              type="text"
              {...register("comment", { required: true })}
              placeholder="Share your experience with this product..."
              rows="5"
              className={`textarea ${
                errors.comment ? "textarea-error" : "textarea-primary"
              } w-full`}
            ></textarea>
            {errors.comment && (
              <span className="text-red-500 mt-1 font-semibold">
                Comment is required
              </span>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner loading-xs"></span>
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit Review"
            )}
          </button>
        </form>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <img
          src={ReviewImage}
          alt="Review Image"
          className="min-w-72 sm:min-w-96 w-1/2"
        />
      </div>
    </div>
  );
};

export default ReviewForm;
