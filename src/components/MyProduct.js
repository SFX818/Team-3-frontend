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
        <div className="row">
            {products.map(each => {
                if( each.userSelling === currentUser.username) {
                    // console.log("console logging each product:", each)
                    return <div className="card sticky-action">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={each.image} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{each.name}
                                {/* <i className="material-icons right">more_vert</i> */}
                                </span>
                            </div>
                            <div className="card-action">
                                <EditButtons name={each.name} price={each.price} description={each.description} id={each._id} />
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{each.name}
                                <i className="material-icons right">close</i>
                                </span>
                                <span>{each.description}</span>
                            </div>
                        </div>

                        {/* <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/> 

                    <EditButtons name={each.name} price={each.price} description={each.description} id={each._id} />  */}
                }
            })}
        </div>
    )
}

export default MyProduct