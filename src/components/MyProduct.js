import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Product from './Product'
import { Link } from "react-router-dom";
import { deleteProduct, editProduct } from '../services/product.service';
import { getCurrentUser } from '../services/auth.service';


const MyProduct = (props) => {

    const currentUser = getCurrentUser()
    const[products, setProducts] = useState([])
  
  useEffect(()=>{
    axios
        .get('http://localhost:8080/api/products')
        .then((response) => {
            setProducts(response.data)
        })
  }, [])

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
        e.preventDefault()
        editProduct(props.id, props.name, props.description, props.price)
        .then(
            ()=>{
                window.location.reload()
            }
        )
    }
    
    return (

        <>
        {/* trying to map if meets certain condition - not working */}
        {/* {products.map(each => {
            if({each.userSelling} === currentUser.username) {
                return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
            }
        })} */}

        {products.map(each => {
            return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
          })}
        </>

        // <div className ="container">
        //     <img src={props.image}/>
        //     <div>Name of Product: {props.name}</div>
        //     <div className="description">Description: {props.description}</div>
        //     <div>Price: {props.price}</div>
        //     <Link to={"/purchase"}>Buy Now</Link>
        //     <div>User Selling: {props.seller}</div>
        //     <form class="delete-form">
        //         <button type="button" onClick={handleDelete} className='btn btn-danger'>Delete</button>
        //         <button type="button" onClick={handleEdit} className="btn btn-link"><Link to={{pathname: '/edit', state: {name: props.name, description: props.description, price: props.price, id: props.id}}}>Edit</Link></button>
        //     </form>
        // </div>
    )
}


export default MyProduct