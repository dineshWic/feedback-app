import React,{useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

    // calculate average rating
    let average = 
        feedback.reduce( (acc,cur) => {
            return acc + cur.rating;
        },0 )/feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, ''); // limit only one decimal place and if there no fractions then remove tralling zeros

  return (
    <div className='feedback-stats'>
    <h4> {feedback.length} Reviews</h4>
    <h4>Average Rating : {isNaN(average)? 0 : average }</h4>
    </div>
  )
}

export default FeedbackStats