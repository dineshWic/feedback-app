import React,{useState,useContext,useEffect} from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {

    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    useEffect( ()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
        }
    },[feedbackEdit] )

    function handleChange(e){
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);

        }
        else if(text !== '' && text.trim().length<= 10){
            setBtnDisabled(true);
            setMessage('Text must be more than 10 characters');
        }
        else{
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback = {text,rating}; 
            
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }
            setText('');
        }
    }

  return (
    <Card >
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us? </h2>
            <RatingSelect select = { (rating) => { setRating(rating) }  }/>
            <div className='input-group' >
                <input type='text' onChange={handleChange} value={text} placeholder='Write Review' />
                <Button type='submit' isDisabled = {btnDisabled}  >Send</Button> 
            </div>

            { message && <div className='message'>{message}</div>}

        </form>
    
    </Card>
  )
}

export default FeedbackForm;