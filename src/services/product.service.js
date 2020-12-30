import axios from 'axios';


const API_URL = 'http://localhost:8080/api/products'

export const getProducts = () => {
    axios
        .get(API_URL)
        .then((response) => {
            //return here
            console.log(response.data)
        })
}

export const sellProduct = (name, price, description, username) => {
    return axios.post(API_URL, {
        name,
        price,
        description,
        username
    })
        
}