import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import EditModal from "./EditModal";

function Reviews({ reviews }) {
  const [openEditModal, setOpenEditModal] = useState(false);

  const reviewCards = reviews.map((review) => (
    <ReviewCard
      key={review.id}
      review={review}
      setOpenEditModal={setOpenEditModal}
    />
  ));
    console.log(setOpenEditModal)
  return (
    <div className="card-container">
      <div className="modal2">
        {openEditModal && (
          <EditModal
            
            // currentAirline={currentAirline}
            closeEditModal={setOpenEditModal}
            // setReviews={setReviews}
            reviews={reviews}
          />
        )}
      </div>
      {reviewCards}
    </div>
  );
}

export default Reviews;
