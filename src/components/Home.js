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
    <h2>boutique online shopping made simple.</h2>

    <form>
      <div className="input-field">
        <input id="search" type="search" required />
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
      </div>
    </form>

    <h3>recent products</h3>

    {products.map(each => {
      return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} id={each._id}/>
    })}
    </>
  );
};


export default Home;
