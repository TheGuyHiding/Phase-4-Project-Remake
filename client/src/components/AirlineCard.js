import React from 'react';
import "../App.css";
import { useState } from "react";

function AirlineCard({airline, setOpenModal, setCurrentAirline}) {
    
    function handleClick() {
        setCurrentAirline(airline)
        setOpenModal(true)
    }

  return (
    <div>
        <div className="card">
                <h4>{airline.name}</h4>
                <img src={airline.image_url} alt={airline.name} style={{ width: 200, height: 200}}/>
                <p>{airline.reviews}</p>
                <button className='openModal'onClick={handleClick}>Leave a review</button>
                
            </div>
    </div>
  )
}

export default AirlineCard