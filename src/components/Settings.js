import React from 'react'
import { getCurrentUser } from '../services/auth.service'

import '../css/components/Settings.css'
const Profile = () => {
    const currentUser = getCurrentUser()
    return (
        <div className ="container">
            <header className="jumbotron"> 
                <h3> 
                    <strong> {currentUser.username}'s Settings </strong>
                </h3>
            </header>
            
            {/* {currentUser.roles &&
                currentUser.roles.map((role, index)=> <li key={index}> {role} </li>)
            } */}
            <hr></hr>
            <h2 className="text-primary">
                Change Username
            </h2>
            <p>
                <strong> Current Username: </strong> {currentUser.username} 
            </p>
            <form className="form" role="form">
                <div className="form-group mx-sm-3 mb-2 myForm">
                    <label for="inputUsername" className="sr-only">Username</label>
                    <input type="text" className="form-control" id="inputUsername" placeholder="Username"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            <hr></hr>
            <h2 className="text-primary">
                Change Email
            </h2>
            <p>
                <strong> Current Email: </strong> {currentUser.email} 
            </p>
            <form className="form" role="form">
                <div className="form-group mx-sm-3 mb-2">
                    <label for="inputEmail" className="sr-only">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            <hr></hr>
            <h2 className="text-primary">
                Change Password
            </h2>
            <p>
                <strong>It's a good idea to use a strong password that you're not using elsewhere</strong>
            </p>
            <form className="form" role="form">
                <div className="form-group mx-sm-3 mb-2">
                    <label for="currentPassword" className="sr-only">Current Password</label>
                    <input type="password" className="form-control" id="currentPassword" placeholder="Current Password"></input>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label for="newPassword" className="sr-only">New Password</label>
                    <input type="password" className="form-control" id="newPassword" placeholder="New Password"></input>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label for="reenterPassword" className="sr-only">Re-enter Password</label>
                    <input type="password" className="form-control" id="reenterPassword" placeholder="Re-enter Password"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>

            <hr></hr>
            <h2 className="text-primary">
                Update Your Profile Description
            </h2>
            <p>
                <strong> Current About Me: </strong> {currentUser.about} 
            </p>
            <form className="form" role="form">
                <div className="form-group mx-sm-3 mb-2 myForm">
                    <label for="inputAbout" className="sr-only">About</label>
                    <input type="text" className="form-control" id="inputAbout" placeholder="About"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            
            <hr></hr>
            <h2 className="text-danger">
                Delete account
            </h2>
            <p>Once you delete your account, there is no going back. Please be certain.</p>
            <button type="button" className="btn btn-danger">Delete Account</button>
        </div>
    )
}
export default Profile