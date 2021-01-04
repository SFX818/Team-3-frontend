import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import FormGroup from './common/FormGroup'
import { getCurrentUser, deleteAccount, changeUsername, logout } from '../services/auth.service'

import '../css/components/Settings.css'

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };


const Profile = (props) => {
    const currentUser = getCurrentUser()
    const form = useRef();
    const checkBtn = useRef();

    const [data, setData] = useState({newUsername:"", newEmail:"",currentPassword: "", newPassword:"", newPasswordAgain:""})


    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
        console.log(e.target.value)
    };

    const handleChangeUsername = (e) => {
        e.preventDefault()
        changeUsername(data.newUsername)
    }
    
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
            <Form onSubmit={(e) => {handleChangeUsername(e)}} ref={form}>
                <FormGroup text=''>
                    <Input
                    type="text"
                    className="form-control"
                    name="newUsername"
                    value={data.newUsername}
                    onChange={handleChange}
                    validations={[required]}
                    placeholder="Username"
                    />
                </FormGroup>
                <CheckButton className="btn btn-secondary" ref={checkBtn}>Submit</CheckButton>
            </Form>
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
            <Form onSubmit={(e) => {
                deleteAccount()
                logout()
            }} ref={form}>
                <FormGroup text=''>
                    <Input
                    type="hidden"
                    className="form-control"
                    name="username"
                    value={currentUser.username}
                    />
                </FormGroup>
                <CheckButton className="btn btn-danger" ref={checkBtn}>Delete Account</CheckButton>
            </Form>
        </div>
    )
}
export default Profile