import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { sellProduct } from '../services/product.service'
import {resMessage} from '../utilities/function.utilities'
import FormGroup from './common/FormGroup'
import BtnSpinner from './common/ButtonSpinner'
import { getCurrentUser } from '../services/auth.service'


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
const Sell = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({name:"", price: 0, description: "", currentUser: "", image: {}})

  data.currentUser = getCurrentUser().username
  
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]:e.target.value})
  };

  const handleFileChange = (e) => {
      setData({...data, image: e.target.files[0]})
  }
  const createProduct = (e) => {
    e.preventDefault();
    //Prevent message clear them out
    setMessage("")
    setLoading(true)
    // Validates all the fields
    form.current.validateAll();
    if(checkBtn.current.context._errors.length === 0){
        sellProduct(data.name, data.price, data.description, data.currentUser, data.image).then(
            () => {
              props.history.push("/myproducts");
              window.location.reload()
            },
            (error) => {
                // Checking all the data recieved from our backend
                // Setting loading to false and return the error
                setLoading(false)
                setMessage(resMessage(error))
            }
          );
    }else {
        setLoading(false)
    }
  };
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={createProduct} ref={form}>
          <FormGroup text='name'>
            <Input
              type="text"
              className="form-control"
              name="name"
              value={data.name}
              onChange={handleChange}
              validations={[required]}
            />
          </FormGroup>
          <FormGroup text='price'>
            <Input
              type="number"
              className="form-control"
              name="price"
              value={data.price}
              onChange={handleChange}
              validations={[required]}
            />
          </FormGroup>
          <FormGroup text='Desciption'>
            <Input
              type="text"
              className="form-control"
              name="description"
              value={data.description}
              onChange={handleChange}
              validations={[required]}
            />
          </FormGroup>

          <FormGroup text='image'>
            <Input
              type="file"
              className="form-control"
              name="image"
              onChange={handleFileChange}
            />
          </FormGroup>
          
        {/* <div>
           <form encType="multipart/form-data" action="/" method="POST">
            <input type="file" name="myFile" />
            <input type="submit" className="btn btn-primary" />
          </form>
           <img src="<%= image %>" alt="A picture" /> 
        </div>  */}

            <BtnSpinner loading={loading} text={"Post Product"}/>
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
export default Sell;