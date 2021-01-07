import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Product from './Product'
import EditButtons from './EditButtons'
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
            console.log("myProduct.js axios response:", response)
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
        {products.map(each => {
            if( each.userSelling === currentUser.username) {
                // console.log("console logging each product:", each)
                return <div> <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/> 

                <EditButtons name={each.name} price={each.price} description={each.description} id={each._id} /> </div>
            }
        })}

        </>
    )
}


export default MyProduct