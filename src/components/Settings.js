import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import FormGroup from './common/FormGroup'
import { getCurrentUser, deleteAccount, changeUsername, changeEmail, changePassword, changeAboutMe, logout } from '../services/auth.service'

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

  // Functions that validates username
const vusername = (value) => {
    if(value.length < 3 || value.length >= 20){
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 charaters.
            </div>
        )
    }
  }
  
  // Functions that validates passwords
  const vpassword = (value) => {
    if(value.length < 6 || value.length >= 40){
    return (<div className="alert alert-danger" role="alert">
            The password must be between 6 and 40 characters.
    </div> )
    }
  }
const Profile = (props) => {
    const currentUser = getCurrentUser()
    console.log(currentUser)
    const form = useRef();
    const checkBtn = useRef();
    

    const [data, setData] = useState({newUsername:"", newEmail:"",currentPassword: "", newPassword:"", newPasswordAgain:"", newAbout:""})
    // const [profile, setProfile] = useState("") 
    const [display, setDisplay] = useState({username:getCurrentUser().username, email:getCurrentUser().email})   
    
    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
        console.log("handle change name: " + e.target.name)
        console.log("handle change: "+e.target.value)
    };

    const handleDisplayChange = (e) => {
        setDisplay({...display, [e.target.name]:e.target.value})
    };

    // useEffect(() => {
    //     setProfile(getProfile(display.username))
    // }, [display])


    // console.log(profile)
    const handleChangeUsername = (e) => {
        e.preventDefault()
        changeUsername(data.newUsername)
        logout()
        props.history.push("/login");
        window.location.reload()
        // display.username = data.newUsername
        // getCurrentUser().username = data.newUsername
    }

    const handleChangeEmail = (e) => {
        e.preventDefault()
        changeEmail(data.newEmail)
        logout()
        props.history.push("/login");
        window.location.reload()
        // display.email = data.newEmail
        // getCurrentUser().email = data.newEmail
    }

    const handleChangePassword = (e) => {
        // e.preventDefault()
        changePassword(data.currentPassword, data.newPassword, data.newPasswordAgain)
        logout()
        props.history.push("/login");
        window.location.reload()
    }

    const handleChangeAboutMe = (e) => {
        changeAboutMe(data.newAbout)
        logout()
        props.history.push("/login");
        window.location.reload()
    }
    

    
    return (
        <>

        <header className="profile-head"> 
            <h3> 
                <strong>{currentUser.username}'s settings</strong>
            </h3>
        </header>

        <div className ="container">
            {/* <header className="jumbotron"> 
                <h3> 
                    <strong> {display.username}'s Settings </strong>
                </h3>
            </header> */}
            
            {/* {currentUser.roles &&
                currentUser.roles.map((role, index)=> <li key={index}> {role} </li>)
            } */}
            <hr></hr>
            <h2 className="text-primary">
                Change Username
            </h2>
            <p>
                <strong> Current Username: </strong> {display.username} 
            </p>
            <Form onSubmit={(e) => {
                handleChangeUsername(e)
                handleDisplayChange(e)}} ref={form}>
                <FormGroup text=''>
                    <Input
                    type="text"
                    className="form-control"
                    name="newUsername"
                    value={data.newUsername}
                    onChange={handleChange}
                    validations={[required, vusername]}
                    placeholder="Username"
                    />
                </FormGroup>
                <CheckButton className="btn btn-primary" ref={checkBtn}>Submit</CheckButton>
            </Form>
            <hr></hr>
            <h2 className="text-primary">
                Change Email
            </h2>
            <p>
                <strong> Current Email: </strong> {display.email} 
            </p>
            <Form id="email" onSubmit={(e) => {
                handleChangeEmail(e)
                handleDisplayChange(e)}} ref={form}>
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
                <CheckButton className="btn btn-primary" ref={checkBtn}>Submit</CheckButton>
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
                    validations={[required, vpassword]}
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
                    validations={[required, vpassword]}
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
                    validations={[required, vpassword]}
                    placeholder="Re-enter New Password"
                    />
                </FormGroup>
                <CheckButton className="btn btn-primary" ref={checkBtn}>Submit</CheckButton>
            </Form>
            <hr></hr>
            <h2 className="text-primary">
                Update Your Profile Description
            </h2>
            <p>
                <strong> Current About Me: </strong> {currentUser.about} 
            </p>
            <Form onSubmit={(e) => {handleChangeAboutMe(e)}} ref={form}>
                <FormGroup text=''>
                    <Input
                    type="text"
                    className="form-control"
                    name="newAbout"
                    value={data.newAbout}
                    onChange={handleChange}
                    validations={[required]}
                    placeholder="New About"
                    />
                </FormGroup>
                <CheckButton className="btn btn-primary" ref={checkBtn}>Submit</CheckButton>
            </Form>
            <hr></hr>
            <h2 className="text-danger">
                Delete account
            </h2>
            <p>Once you delete your account, there is no going back. Please be certain.</p>
            <Form onSubmit={(e) => {
                deleteAccount()
                logout()
                props.history.push("/login");
                window.location.reload()
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
        </>
    )
}
export default Profile