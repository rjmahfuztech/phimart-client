import { useForm } from "react-hook-form";
import StarRating from "./StarRating";

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
    <div className="my-6 mx-2 md:mx-0 md:w-1/2 md:card-body">
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
  );
};

export default ReviewForm;
