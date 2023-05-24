import { createContext, useState } from "react";
import FeedbackData from "../Data/FeedbackData";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState(FeedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    function addFeedback(newFeedback){
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback]);
    }

    function updateFeedback(id,updatedItem){
        setFeedback( feedback.map( (item) => { return (item.id === id)? {...item,...updatedItem} : item } ) )
    }
    function deleteFeedback(id){
        if(window.confirm('Are you want to delete')){

            setFeedback( (feedback.filter( (item)=>{ return item.id !== id} )) )
        }

    }

    function editFeedback(item){
        setFeedbackEdit({
            item :item,
            edit : true
        })
    }

    return (<FeedbackContext.Provider  value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
        {children}
    </FeedbackContext.Provider>)
}

export default FeedbackContext;