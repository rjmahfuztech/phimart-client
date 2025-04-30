import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import authApiClient from "../../services/auth-api-client";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import handleApiError from "../HandleApiError";
import ReviewList from "./ReviewList";
import apiClient from "../../services/api-client";
import { useForm } from "react-hook-form";
import reviewImg from "../../assets/images/rating.jpeg";

const ReviewSection = () => {
  const { productId } = useParams();
  const [canReview, setCanReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { reset } = useForm();
  const [loading, setLoading] = useState(false);

  // Fetch Product Reviews
  const productReviews = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get(`/products/${productId}/reviews/`);
      setReviews(response.data);
    } catch (error) {
      console.log("Review fetching error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await authApiClient.post(
        `/products/${productId}/reviews/`,
        data
      );
      productReviews();
      if (response.status == 201) {
        Swal.fire({
          icon: "success",
          title: "Review Added",
          text: `'${data.comment.slice(0, 40)}...' successfully added.`,
        });
      }
    } catch (error) {
      handleApiError(error);
    }

    // Reset form
    reset();
  };

  // Checking user can review for the product or not
  useEffect(() => {
    const checkUserPermission = async () => {
      try {
        const response = await authApiClient.get(
          `/orders/has_ordered/${productId}/`
        );
        setCanReview(response.data.has_ordered);
      } catch (error) {
        console.log(error);
      }
    };
    checkUserPermission();
    productReviews();
  }, [productId]);

  return (
    <div>
      <div className="border-b-2 border-gray-300 pb-3 mt-6 flex gap-2 justify-between items-center">
        <h1 className="text-lg md:text-3xl font-bold">Customer Reviews</h1>
        <h1 className="text-sm md:text-xl font-semibold">
          {reviews.length === 0 ? "" : reviews.length}{" "}
          {reviews.length === 0
            ? "No Review"
            : `${reviews.length == 1 ? "Review" : "Reviews"}`}
        </h1>
      </div>
      {canReview && <ReviewForm onSubmit={onSubmit} />}
      {reviews.length === 0 ? (
        <div className="my-6 text-center">
          <div className="flex justify-center">
            <img src={reviewImg} className="w-40" alt="Rating Image" />
          </div>
          <h2 className="font-bold text-2xl my-3">No Reviews Yet</h2>
          <p className="text-gray-500 font-semibold text-md text-lg">
            Be the first to review this product!
          </p>
        </div>
      ) : loading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-xl text-secondary"></span>
        </div>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </div>
  );
};

export default ReviewSection;
