import React from 'react'
import { Link } from "react-router-dom";
import { editProduct, deleteProduct } from '../services/product.service';


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

        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken 1">
                    <div className="card-content white-text">
                        <span className="card-title"></span>

                        <p>Card Content</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                    </div>
                </div>
            </div>
        </div>

        // <div className ="container">
        //     <img src={props.image}/>
        //     <div>Name of Product: {props.name}</div>
        //     <div className="description">Description: {props.description}</div>
        //     <div>Price: {props.price}</div>
        //     <div>User Selling: {props.seller}</div>
        //     {/* <form class="delete-form">
        //         <button type="button" onClick={handleDelete} className='btn btn-danger'>Delete</button>
        //         <button type="button" className="btn btn-link"><Link to={{pathname: '/edit', state: {name: props.name, description: props.description, price: props.price, id: props.id}}}>Edit</Link></button>
        //     </form> */}
        // </div>
    )
}


export default Product