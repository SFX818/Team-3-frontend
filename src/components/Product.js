import React from 'react'
import { Link } from "react-router-dom";
import { deleteProduct } from '../services/product.service';


const Product = (props) => {
    const handleDelete = (e) =>{
        e.preventDefault()
        deleteProduct(props.id)
        .then(
            ()=>{
                window.location.reload()
            }
        )
    }

    const handleEdit = (e) =>{
    //     e.preventDefault()
    //     editProduct(props.id, props.name, props.description, props.price)
    //     .then(
    //         ()=>{
    //             window.location.reload()
    //         }
    //     )
    }
    
    return (
        <div className ="container">
            <div>Picture</div>
            <div>Name of Product: {props.name}</div>
            <div className="description">Description: {props.description}</div>
            <div>Price: {props.price}</div>
            <Link to={"/purchase"}>Buy Now</Link>
            <div>User Selling: {props.seller}</div>
            <form class="delete-form">
                <button type="button" onClick={handleDelete} className='btn btn-danger'>Delete</button>
                <button type="button" className="btn btn-link"><Link to={{pathname: '/edit', state: {name: props.name, description: props.description, price: props.price, id: props.id}}}>Edit</Link></button>
            </form>
        </div>
    )
}


export default Product