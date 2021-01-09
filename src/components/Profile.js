import { getProducts } from '../services/product.service';
import Product from './Product'
import EditButtons from './EditButtons'
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
                    <h4>About</h4>
                </div>
                <div className="profile-text">
                    {currentUser.about}
                </div>
            </div>

            <div className="profile-container">
                <div className="profile-contact">
                    <h4>Contact</h4>
                </div>
                <div className="profile-text">
                    {currentUser.email}
                </div>
            </div>

            <div className="profile-container">
                <div className="profile-title">
                    <h4>Shop</h4>
                </div>
            </div>
            <div className="row">
            {products.map(each => {
                if( each.userSelling === currentUser.username) {
                    // console.log("console logging each product:", each)
                    return <div className="card">
                            <div className="card-image">
                                <img src={each.image} />
                            </div>
                            <div className="card-content">
                                <span className="card-title grey-text text-darken-4">{each.name}
                                {/* <i className="material-icons right">more_vert</i> */}
                                </span>
                            </div>

                            <div className="card-action">
                                {each.description}
                            </div>

                            {/* <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{each.name}
                                <i className="material-icons right">close</i>
                                </span>
                                <span>{each.description}</span>
                            </div> */}
                        </div>

                        {/* <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/> 

                    <EditButtons name={each.name} price={each.price} description={each.description} id={each._id} />  */}
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