import React from 'react'
import { getCurrentUser } from '../services/auth.service'
const Profile = () => {
    const currentUser = getCurrentUser()
    return (
        <div className ="container">
            <header classname="jumbotron"> 
                <h3> 
                    <strong> {currentUser.username}'s Profile </strong>
                </h3>
            </header>

            <div>
                <strong>About:</strong> {currentUser.about}
            </div>

        </div>
    )
}
export default Profile