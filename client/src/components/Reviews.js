import React from "react";

function Reviews({reviews}) {
    console.log(reviews)

    return(
        <div>
        {reviews.map((review)=>
            <>
            <h2>{review.title} - {review.airline.name} </h2>
            <p>{review.description} score: {review.score}</p>
            </>
        )}
        {/* {airline.map((a)=>
            <>
            <h2>{a.name} - </h2>
            </>
        )} */}

        </div>
    
    )
}

export default Reviews;