import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import EditModal from "./EditModal";

function Reviews({ reviews, setReviews }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentReview, setCurrentReview] = useState();

  const reviewCards = reviews.map((review) => (
    <ReviewCard
      key={review.id}
      review={review}
      setOpenEditModal={setOpenEditModal}
      setCurrentReview={setCurrentReview}
      setReviews={setReviews}
      reviews={reviews}
    />
  ));
  return (
    <div className="card-container">
      <div className="modal2">
        {openEditModal && (
          <EditModal
            
            currentReview={currentReview}
            closeEditModal={setOpenEditModal}
            setReviews={setReviews}
            reviews={reviews}
          />
        )}
      </div>
      {reviewCards}
    </div>
  );
}

export default Reviews;
