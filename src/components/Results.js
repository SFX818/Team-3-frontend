//CSS import
import Product from './Product'
import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import axios from 'axios'

const Results = (props) => {

  const searchResults = props.location.state.results
  console.log(searchResults)

//   const [products, setProducts] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")
//   const [searchResults, setSearchResults] = useState([])
  
  // useEffect to get all products and setProducts as the response
//   useEffect(()=>{
//     axios
//         .get('http://localhost:8080/api/products')
//         .then((response) => {
//             setProducts(response.data)
//         })
//   }, [])

//   // useEffect to get all products and setProducts as the response - based on search
//   useEffect(()=>{
//     axios
//         .get('http://localhost:8080/api/products')
//         .then((response) => {
//             setProducts(response.data)
//         }).then(()=>{
//           setSearchResults(products.filter(product=>
//             product.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())))
//         })
//   }, [searchTerm])

//   const handleChange = event => {
//     setSearchTerm(event.target.value)
//   }

  return (
    <>

    {/* search bar  */}
    {/* <div className="input-field">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div> */}
    
    <h3><strong>product search</strong></h3>

    {/* {searchResults[0].name} */}

    <div className="row">
      {searchResults.map(each => {
        // <li>{each.name}</li>
        return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
      })}
    </div>

    </>
  );
};

export default Results;
