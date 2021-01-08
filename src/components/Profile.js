import { getProducts } from '../services/product.service';
import Product from './Product'
import Review from './Review'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getCurrentUser } from '../services/auth.service'

const Profile = () => {

    const[products, setProducts] = useState([])
  
    useEffect(()=>{
        axios
            .get('http://localhost:8080/api/products')
            .then((response) => {
                setProducts(response.data)
            })
    }, [])

    // const[reviews, setReviews] = useState([])
  
    // grab reviews from backend once code is written
    // useEffect(()=>{
    //     axios
    //         .get('http://localhost:8080/api/reviews')
    //         .then((response) => {
    //             setReviews(response.data)
    //         })
    // }, [])
    
    const currentUser = getCurrentUser()

    return (
        <div className="container">
            <header className="profile-head"> 
                <h3> 
                    <strong>welcome to {currentUser.username}'s profile!</strong>
                </h3>
            </header>

            {/* if we want to have users upload a profile photo */}
            {/* <img src=""/> */}

            <div className="profile-container">
                <div className="profile-title">
                    <strong>About</strong>
                </div>
                <div className="profile-text">
                    {currentUser.about}
                </div>
            </div>

            <div className="profile-container">
                <div className="profile-contact">
                    <strong>Contact</strong>
                </div>
                <div className="profile-text">
                    {currentUser.email}
                </div>
            </div>

            <div className="profile-container">
                <div className="profile-title">
                    <strong>Shop</strong>
                </div>
            </div>
            <div className="row">
            {products.map(each => {
                if( each.userSelling === currentUser.username) {
                    // console.log("console logging each product:", each)
                    return 
                }
            })}
            </div>

            
            {/* <div>
                <strong>Reviews:</strong>
                {reviews.map(each => {
                    return <Review user={each.username} feedback={each.feedback} />
                })}
                
            </div> */}

        </div>
    )
}
export default Profile