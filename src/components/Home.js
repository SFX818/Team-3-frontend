//CSS import
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
    <header className="profile-head"> 
            <h2> 
                <strong>boutique online shopping made simple.</strong>
            </h2>
            </header>

    <img src="https://blog.campussonar.com/hubfs/CampusSonar_April2018/Images/footer-bg-waves.png" className="img-divider" height="30" />

    {/* <form>
      <div className="input-field">
        <input id="search" type="search" required />
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
      </div>
    </form> */}

    <h3><strong>shop recently posted products</strong></h3>
    <div className="row">
      {products.map(each => {
        return <Product name={each.name} price={each.price} description={each.description} seller={each.userSelling} image={each.image} id={each._id}/>
      })}
    </div>

    </>
  );
};

export default Home;
