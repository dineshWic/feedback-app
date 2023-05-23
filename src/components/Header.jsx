
import React from 'react'
import PropTypes from 'prop-types';

function Header(props) {


    return (
        <header style={ {backgroundColor : props.bgColour, color:props.textColour } } > 
            <div className='container' ><h1>{props.text}</h1></div>
        </header>
    )

}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColour :"rgba(0,0,0,0.4)",
    textColour: '#ff6a95'
};

Header.propTypes = {
    text : PropTypes.string,
}


export default Header