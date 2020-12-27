import{getItem} from './localStorage.utilities'
​
export default function authHeader(){
    //grabbing the user from the local storage, that is provided by the browser
    const user =getItem('user')
} //check if user and if user has access token
if(user && user.accessToken) {
    return{'x-access-token': user.accessToken}
} else {
    return {};
}
