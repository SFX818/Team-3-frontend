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
        // card action reveal
        <div className="card sticky-action">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator product-image" src={props.image} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.name}
                {/* <i className="material-icons right">more_vert</i> */}
                </span>
            </div>
            <div className="card-action">
                <span className="buy-now">Buy Now</span>
                <div>Sold By: {props.seller}</div>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.name}
                <i className="material-icons right">close</i>
                </span>
                <span>{props.description}</span>
            </div>
        </div>

        // simple card
        // <div className="row">
        //     <div className="col s12 m6">
        //         <div className="card medium blue-grey darken 1">
        //             <div className="card-content white-text">
        //                 <span className="card-title">{props.name}</span>
        //                 <p>{props.seller}</p>
        //                 <img src={props.image}/>
        //                 <p>{props.description}</p>
        //                 <p>${props.price}</p>

        //             </div>
        //             <div className="card-action">
        //                 <a href="#">Buy Now</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className ="container">
        //     <img src={props.image}/>
        //     <div>Name of Product: {props.name}</div>
        //     <div className="description">Description: {props.description}</div>
        //     <div>Price: {props.price}</div>
        //     <div>User Selling: {props.seller}</div>
        //     <form class="delete-form">
        //         <button type="button" onClick={handleDelete} className='btn btn-danger'>Delete</button>
        //         <button type="button" className="btn btn-link"><Link to={{pathname: '/edit', state: {name: props.name, description: props.description, price: props.price, id: props.id}}}>Edit</Link></button>
        //     </form> 
        // </div>
    )
}

export default Product