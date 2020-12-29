import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//helper
import {login} from '../services/auth.service'

import {resMessage} from '../utilities/function.utilities'
//components 
import FormGroup from './common/FormGroup'
import ButtonSpinner from './common/ButtonSpinner'

// Function given to react-validator
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


const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // Stores the username in our username state
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };



  // Stores the password in our password state
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
      e.preventDefault()
      //prevent message clear them out 
      setMessage('')
      setLoading(true)
      //valides all the filed s 
      form.current.validateAll()

      if(checkBtn.current.context._errors.length === 0){

      login(username, password).then(
        () =>{
          props.history.push('/profile')
          window.location.reload()
        },
        (error) => {
          //checking all the data recieved from our backend 
          
              //setting loading to false and return the error 
              setLoading(false)
              setMessage(resMessage(error))
        }
      )
      }else{
        setLoading(false)
      }

  };


  // console.log(username, password);
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleLogin} ref={form}>
          <FormGroup text="Username">
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required, vusername]}
            />
         </FormGroup>

          <FormGroup text="Password">
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required, vpassword]}
            />
          </FormGroup>


        <ButtonSpinner text="login" loading={loading} />



          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};
export default Login;