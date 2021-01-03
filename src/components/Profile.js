import { getProducts } from '../services/product.service';
import Product from './Product'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { getCurrentUser } from '../services/auth.service'
const Profile = () => {
    
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
            </div>

        </div>
    )
}
export default Profile