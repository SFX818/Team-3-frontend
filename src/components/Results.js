import Product from './Product'
import React from 'react'

const Results = (props) => {

  const searchResults = props.location.state.results
  console.log(searchResults)

  return (
    <>
    <header className="profile-head"> 
      <h2> 
          <strong>viewing search results: {props.location.state.searchTerm}</strong>
      </h2>
    </header>

    <div className="row">
      {searchResults.map(each => {
        return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
      })}
    </div>
    </>
  );
};

export default Results;
