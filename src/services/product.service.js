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

export const sellProduct = (name, price, description, username, image) => {
    console.log(image)
    return axios.post(API_URL, {
        name,
        price,
        description,
        username,
        image
    })
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