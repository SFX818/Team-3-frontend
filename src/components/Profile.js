import { getProducts } from '../services/product.service';
import Product from './Product'
import Review from './Review'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { getCurrentUser, changeAboutMe } from '../services/auth.service'

const Profile = () => {

    const[reviews, setReviews] = useState([])
  
    // grab reviews from backend once code is written
    useEffect(()=>{
        axios
            .get('http://localhost:8080/api/reviews')
            .then((response) => {
                setReviews(response.data)
            })
    }, [])
    
    const currentUser = getCurrentUser()

    return (
        <div className ="container">
            <header className="jumbotron"> 
                <h3> 
                    <strong> {currentUser.username}'s Profile </strong>
                </h3>
            </header>

            <div>
                <strong>About:</strong> {currentUser.about}
            </div>
            <div>
                <strong>Shop:</strong>
            </div>
            <div>
                <strong>Reviews:</strong>
                {reviews.map(each => {
                    return <Review user={each.username} feedback={each.feedback} />
                })}
                
            </div>

        </div>
    )
}
export default Profile