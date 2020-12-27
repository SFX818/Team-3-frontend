import axios from 'axios';
import authHeader from '../utilites/authHeader.utilities';

const API_URL = 'https://localhost:8000/api/test/'

//retreive public content
export const getPublicContent = () =>{
    return axios.get(API_URL + 'all')
}

//access Users content
export const getUserBoard = () =>{
    return axios.get(API_URL + 'user', {header: authHeader()})
}

//access admins content
export const getAdminBoard = () =>{
    return axios.get(API_URL + 'admin', {header: authHeader()})
}