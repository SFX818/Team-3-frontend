import React from 'react'
import { getCurrentUser } from '../services/auth.service'
const Profile = () => {
    const currentUser = getCurrentUser()
    return (
        <div className ="container">
            <header classname="jumbotron"> 
                <h3> 
                    <strong> {currentUser.username}'s Settings </strong>
                </h3>
            </header>
            <p>
                <strong> email: </strong> {currentUser.email} 
            </p>
            {currentUser.roles &&
                currentUser.roles.map((role, index)=> <li key={index}> {role} </li>)
            }
        </div>
    )
}
export default Profile