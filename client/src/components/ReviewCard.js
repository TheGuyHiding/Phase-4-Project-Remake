import React from "react";

function ReviewCard({review, closeEditModal}) {
    console.log(closeEditModal)
    function handleClick() {
        closeEditModal(true)
    }
  return (
    <div className="review-card">
      <h2>
        {review.title} - {review.airline.name}
      </h2>
      <p>
        {review.description} score: {review.score}
      </p>
      <button onClick={handleClick}>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ReviewCard;