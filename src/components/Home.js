import Product from './Product'
import React, {useEffect, useState} from 'react'
// import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  let history = useHistory()

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

  const submitSearch = event => {
    axios
        .get('http://localhost:8080/api/products')
        .then((response) => {
            setProducts(response.data)
        }).then(()=>{
          setSearchResults(products.filter(product=>
            product.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())))
        })
        redirectFunction()
  }

  const redirectFunction = (state) => {
          history.push({
          pathname: '/results',
          // search: '?update=true',  // query string
          state: {  // location state
          results: searchResults, 
          searchTerm: searchTerm
          },
        }); 
  }

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
    <header className="profile-head"> 
      <h2> 
          <strong>boutique online shopping made simple. start searching!</strong>
      </h2>
    </header>

    {/* search bar  */}
    <form onSubmit={submitSearch}>
    <div className="input-field">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={submitSearch}>search</button>
    </form>

    {/* <div className="row">
      {searchResults.map(each => {
        // <li>{each.name}</li>
        return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
      })}
    </div> */}

            <header className="profile-head"> 
                <h3> 
                    <strong>or shop recently posted products</strong>
                </h3>
            </header>

    <div className="row">
      {products.map(each => {
        return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
      })}
    </div>

    </>
  );
};

export default Home;
