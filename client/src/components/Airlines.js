import React from "react";
import AirlineCard from "./AirlineCard";
import { useState } from "react";
import Modal from "./Modal";

function Airlines({ airlines, setReviews, reviews }) {
  const [openModal, setOpenModal] = useState(false);
  const [currentAirline, setCurrentAirline] = useState();

  const airlineCards = airlines.map((airline) => (
    <AirlineCard
      key={airline.id}
      airline={airline}
      setOpenModal={setOpenModal}
      setCurrentAirline={setCurrentAirline}
    />
  ));
  return (
    <div className="card-container">
      <div className="modal2">
        {openModal && (
          <Modal currentAirline={currentAirline} closeModal={setOpenModal} setReviews={setReviews} reviews={reviews}/>
        )}
      </div>
      {airlineCards}
    </div>
  );
}
/*<Routes>
<Route path="/airlines/:id" element={<Airlines />} />
</Routes>*/
export default Airlines;
