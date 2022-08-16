import React, { useState } from 'react';
import "../App.css";

function EditModal({ closeEditModal, currentAirline, setReviews, reviews, currentReview }) {
    const [formData, setFormData] = useState({
        title: currentReview.title,
        description: currentReview.description,
        score: currentReview.score
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
        }

        fetch("/reviews/" + currentReview.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(updatedReview => updateReviews(updatedReview))
        closeEditModal(false)
    }
    
    function updateReviews(updatedReview) {
        const modifiedReviews = reviews.map(review => {
            if (review.id === updatedReview.id) {
                return updatedReview
            }
            else {
                return review
            }
        })
        setReviews(modifiedReviews)
    }

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <span claseName="close" onClick={() => closeEditModal(false)}> X </span>
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
                    <button type="text" onClick={() => closeEditModal(false)}>Cancel</button>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditModal