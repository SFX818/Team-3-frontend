import axios from 'axios';
import { setItem, getItem, removeItem } from '../utilities/localStorage.utilities';

//note: added the / at the end of this url so it doesnt need to be included before signup in axios
const API_URL = 'http://localhost:8080/api/auth/';

//function to register user
export const register = (username, email, password) => {
    return axios
    .post(API_URL + 'signup', {
        username,
        email,
        password
    })
}

//function to login the user
export const login = (username, password) => {
    return axios
    .post(API_URL + 'signin', {
        username,
        password
    })
    .then((response) => {
        //if user has accessToken, set it to local storage 
        if(response.data.accessToken){
            //call our setItem funciton and pass in 'user' and response.data
            setItem('user', response.data);
        }
    })
}

//function to logout user
export const logout = () => {
    //call removeItem function and pass in user
    removeItem('user')
}

//get the current user 
export const getCurrentUser = () => {
    //call getItem function and pass in user
    return getItem('user');
}