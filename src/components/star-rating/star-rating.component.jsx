import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { StarRatingContainer } from "./star-rating.styles";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [ratingTotal, setRatingTotal] = useState(null);
  const [rateColor, setRateColor] = useState(null);

  return (
    <StarRatingContainer>
      Rate Product:
      {[...Array(5)].map((star, idx) => {
        const currentRate = idx + 1;
        return (
          <label key={idx}>
            <input
              type='radio'
              name='rate'
              value={currentRate}
              onClick={() => setRating(currentRate)}
            />
            <span className='cursor-pointer'>
              <FaStar
                size={28}
                color={
                  currentRate <= (rateColor || rating) ? "#F9BE64" : "grey"
                }
              />
            </span>
          </label>
        );
      })}
    </StarRatingContainer>
  );
};

export default StarRating;
