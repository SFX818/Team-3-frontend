import axios from 'axios';
import { getCurrentUser } from './auth.service';

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

export const sellProduct = (name, price, description, username, image) => {
    let data = new FormData()

    
    data.append('file', image)
    data.append('name', name)
    data.append('price', price)
    data.append('description', description)
    data.append('username', username)

    
    let config = {
        headers: {'Content-type': 'multipart/form-data'}
    }
    console.log(data)
    return axios.post(API_URL, data, config)
}

export const deleteProduct = (id) =>{
    console.log(id)
    return axios.delete(API_URL + id, {
        id
    })
}
export const editProduct = (id, name, price, description) =>{
    console.log(id)
    return axios.put(API_URL + id, {
        id,
        name,
        description,
        price
    })
}