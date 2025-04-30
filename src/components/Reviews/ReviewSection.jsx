import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import authApiClient from "../../services/auth-api-client";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import handleApiError from "../HandleApiError";

const ReviewSection = () => {
  const { productId } = useParams();
  const [canReview, setCanReview] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await authApiClient.post(
        `/products/${productId}/reviews/`,
        data
      );
      if (response.status == 201) {
        Swal.fire({
          icon: "success",
          title: "Review Added",
          text: `'${data.comment}' successfully added.`,
        });
      }
    } catch (error) {
      handleApiError(error);
    }
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
  }, [productId]);

  return <div>{canReview && <ReviewForm onSubmit={onSubmit} />}</div>;
};

export default ReviewSection;
