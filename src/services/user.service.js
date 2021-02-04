import userEvent from '@testing-library/user-event';
import axios from 'axios';
import authHeader from '../utilites/authHeader.utilities';

const API_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URL_USER : process.env.REACT_APP_PRO_URL_USER;
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