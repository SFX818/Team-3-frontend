import axios from 'axios';


const API_URL = 'http://localhost:8080/api/products/'

export const getProducts = () => {
    let products = []
    axios
        .get(API_URL)
        .then((response) => {
            response.data.forEach((product)=>{
                products.push(product)
            })
        })
    return products
}

export const sellProduct = (name, price, description, username) => {
    return axios.post(API_URL, {
        name,
        price,
        description,
        username
    })
}

export const deleteProduct = (id) =>{
    return axios.delete(API_URL + id, {
        id
    })
}