import React from 'react'
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className ="container">
            <div>Picture</div>
            <div>Name of Product: {props.name}</div>
            <div className="description">Description: {props.description}</div>
            <div>Price: {props.price}</div>
            <Link to={"/purchase"}>Buy Now</Link>
            <div>User Selling: {props.seller}</div>
            <form class="delete-form">
                <button type="submit" className='btn btn-danger'>Delete</button>
                <button type="button" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}


export default Product