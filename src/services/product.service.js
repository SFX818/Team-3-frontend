import axios from 'axios';
import { getCurrentUser } from './auth.service';

const API_URL = 'http://localhost:8080/api/products/'
const API_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URL_AUTH : process.env.REACT_APP_PRO_URL_AUTH;
export const getProducts = () => {
    let products = []
    axios
        .get(API_URL+'/api/products')
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
    return axios.post(API_URL+'/api/products', data, config)
}

export const deleteProduct = (id) =>{
    return axios.delete(API_URL+'/api/products/' + id, {
        id
    })
}
export const editProduct = (id, name, price, description) =>{
    return axios.put(API_URL+'/api/products/' + id, {
        id,
        name,
        description,
        price
    })
}