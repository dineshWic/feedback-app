import React,{ useContext} from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';



function FeedbackList(props) {
  const {feedback} = useContext(FeedbackContext);

    if( !feedback || feedback.length ===0  ){
        return <p>"No feedback yet"</p>;
    }

  return (
    <div className='feedback-list'>
        {feedback.map( (item) => {
            return <FeedbackItem key={item.id}  item= {item}  ></FeedbackItem>
        } )}
    </div>
  )
}

export default FeedbackList;