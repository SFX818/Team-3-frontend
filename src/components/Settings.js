import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import FormGroup from './common/FormGroup'
import { getCurrentUser, deleteAccount, changeUsername, changeEmail, changePassword, logout } from '../services/auth.service'

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

    const handleChangeEmail = (e) => {
        e.preventDefault()
        changeEmail(data.newEmail)
    }

    const handleChangePassword = (e) => {
        // e.preventDefault()
        changePassword(data.currentPassword, data.newPassword, data.newPasswordAgain)
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
            <Form onSubmit={(e) => {handleChangeEmail(e)}} ref={form}>
                <FormGroup text=''>
                    <Input
                    type="text"
                    className="form-control"
                    name="newEmail"
                    value={data.newEmail}
                    onChange={handleChange}
                    validations={[required]}
                    placeholder="New Email"
                    />
                </FormGroup>
                <CheckButton className="btn btn-secondary" ref={checkBtn}>Submit</CheckButton>
            </Form>
            <hr></hr>
            <h2 className="text-primary">
                Change Password
            </h2>
            <p>
                <strong>It's a good idea to use a strong password that you're not using elsewhere</strong>
            </p>
            <Form onSubmit={(e) => {handleChangePassword(e)}} ref={form}>
                <FormGroup text=''>
                    <Input
                    type="password"
                    className="form-control"
                    name="currentPassword"
                    value={data.currentPassword}
                    onChange={handleChange}
                    validations={[required]}
                    placeholder="Current Password"
                    />
                </FormGroup>
                <FormGroup text=''>
                    <Input
                    type="password"
                    className="form-control"
                    name="newPassword"
                    value={data.newPassword}
                    onChange={handleChange}
                    validations={[required]}
                    placeholder="New Password"
                    />
                </FormGroup>
                <FormGroup text=''>
                    <Input
                    type="password"
                    className="form-control"
                    name="newPasswordAgain"
                    value={data.newPasswordAgain}
                    onChange={handleChange}
                    validations={[required]}
                    placeholder="Re-enter New Password"
                    />
                </FormGroup>
                <CheckButton className="btn btn-secondary" ref={checkBtn}>Submit</CheckButton>
            </Form>
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