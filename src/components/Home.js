//CSS import
import { getProducts } from '../services/product.service';
import Product from './Product'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Home = () => {
  const[products, setProducts] = useState([])
  
  useEffect(()=>{
    axios
        .get('http://localhost:8080/api/products')
        .then((response) => {
            setProducts(response.data)
        })
  }, [])

  return (
    <>
    {products.map(each => {
      return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} id={each._id}/>
    })}
    </>
  );
};


export default Home;
