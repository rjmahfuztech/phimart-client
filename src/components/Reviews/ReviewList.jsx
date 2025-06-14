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
  handleDeleteReview,
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
          handleDeleteReview={handleDeleteReview}
        />
      ))}
    </div>
  );
};

export default ReviewList;
