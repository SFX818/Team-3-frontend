import React from 'react'
import { Link } from "react-router-dom";
import {getProducts} from '../services/product.service'

const Product = () => {
    const products = getProducts()
    return (
        <div className ="container">
            <div>Picture</div>
            <div className="description">Description of Product: al;skdfhkajsdhflkasdjfgaklsdjf</div>
            <div>Price</div>
            <Link to={"/purchase"}>Buy Now</Link>
            <div>Selling User</div>
        </div>
    )
}
export default Product