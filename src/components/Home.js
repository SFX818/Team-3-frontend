//CSS import
import Product from './Product'
import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import axios from 'axios'
const Home = () => {

  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  
  // useEffect to get all products and setProducts as the response
  useEffect(()=>{
    axios
        .get('http://localhost:8080/api/products')
        .then((response) => {
            setProducts(response.data)
        })
  }, [])

  // useEffect to get all products and setProducts as the response - based on search
  useEffect(()=>{
    axios
        .get('http://localhost:8080/api/products')
        .then((response) => {
            setProducts(response.data)
        }).then(()=>{
          setSearchResults(products.filter(product=>
            product.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())))
        })
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
    <header className="profile-head"> 
            <h2> 
                <strong>boutique online shopping made simple.</strong>
            </h2>
            </header>

    <img src="https://blog.campussonar.com/hubfs/CampusSonar_April2018/Images/footer-bg-waves.png" className="img-divider" height="30" />

    {/* search bar - materialize */}
    {/* <nav>
      <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" required />
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
        </div>
      </form>
      </div>
    </nav> */}

    {/* search bar  */}
    <div className="input-field">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
    
    <h3><strong>product search</strong></h3>

    <div className="row">
      {searchResults.map(each => {
        // <li>{each.name}</li>
        return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
      })}
    </div>


    {/* <h3><strong>shop recently posted products</strong></h3>
    <div className="row">
      {products.map(each => {
        return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
      })}
    </div> */}

    </>
  );
};

export default Home;
