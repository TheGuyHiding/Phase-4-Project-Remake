import React, { useState } from 'react';
import "../App.css";

function EditModal({ closeModal, currentAirline, setReviews, reviews }) {
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        score:""
    })
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newReview = {
            title: formData.title,
            description: formData.description,
            score: parseInt(formData.score),
            user_id: 1,
            airline_id: currentAirline.id 
        }

        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => setReviews([...reviews, data]))
        closeModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <span claseName="close" onClick={() => closeModal(false)}> X </span>
            <div className='header'>
                <h1>Create a Review Below</h1>
            </div>
            <div className='content'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <div className='title'>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder='Title of review'/> 
                        </div>
                        <div className='review'>
                            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder='Write your review here' />
                        </div>
                        <div className='score'>
                            score:
                            <input type="number" name="score" value={formData.score} onChange={handleChange}/>
                        </div>
                    </label>
                    <button type="text" onClick={() => closeModal(false)}>Cancel</button>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditModal