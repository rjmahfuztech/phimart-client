import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({
  reviews,
  user,
  editReview,
  setEditReview,
  editingId,
  setEditingId,
  handleUpdateReview,
}) => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          user={user}
          editReview={editReview}
          setEditReview={setEditReview}
          isEditing={editingId == review.id}
          setEditingId={setEditingId}
          handleUpdateReview={handleUpdateReview}
        />
      ))}
    </div>
  );
};

export default ReviewList;
