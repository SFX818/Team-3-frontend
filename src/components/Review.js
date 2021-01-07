import React from 'react'

const Review = (props) => {
    
    return (
        <div className ="container">
            <div>User: {props.user}</div>
            <div>Review: {props.feedback} </div>
        </div>
    )
}

export default Review