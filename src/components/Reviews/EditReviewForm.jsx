import StarRating from "./StarRating";

const EditReviewForm = ({
  editReview,
  setEditReview,
  setEditingId,
  handleUpdateReview,
}) => {
  return (
    <div className="mt-4 bg-base-200 p-4 rounded-lg">
      <div className="mb-2">
        <label htmlFor="ratings" className="font-medium">
          Rate Here
        </label>
        <StarRating
          onChange={(value) => setEditReview({ ...editReview, ratings: value })}
          rating={editReview.ratings}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="comment" className="font-medium">
          Your Review
        </label>
        <textarea
          id="comment"
          type="text"
          required
          value={editReview.comment}
          onChange={(e) =>
            setEditReview({ ...editReview, comment: e.target.value })
          }
          placeholder="Share your experience with this product..."
          rows="5"
          className="textarea w-full textarea-primary"
        ></textarea>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-primary" onClick={handleUpdateReview}>
          Save Changes
        </button>
        <button
          onClick={() => setEditingId(null)}
          className="btn btn-outline btn-error"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditReviewForm;
