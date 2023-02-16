import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Stars = ({ ratings, color, size }) => {
  //console.log(ratings)
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    console.log(rate)
    setRating(rate)
  }
  return (
    <div className="star">
      <Rating
        readonly="true"
        onClick={handleRating}
        initialValue={ratings}
        fillColor={color}
        size={size}
      />
    </div>
  )
}

export default Stars
