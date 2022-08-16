import React from "react";

function ReviewCard({review, setOpenEditModal, setCurrentReview, setReviews, reviews}) {
    function handleEditClick() {
        setOpenEditModal(true)
        setCurrentReview(review)
    }

    function handleDeleteClick() {
      fetch ("/reviews/" + review.id, {
        method:"DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const updatedReviews = reviews.filter(stateReview => stateReview.id != review.id)
      setReviews(updatedReviews)
    }
  return (
    <div className="review-card">
      <h2>
        {review.title} - {review.airline.name}
      </h2>
      <p>
        {review.description} score: {review.score}
      </p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default ReviewCard;