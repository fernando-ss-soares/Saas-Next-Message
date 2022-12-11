import axios from "axios";
import request from "../api.config"

async function authNext({ user, password }) {
    
    const URL_NEXT_API = `${request.endpoint}${request.routes.login}`;
    `${user}, ${password} ${URL_NEXT_API}`
   
    const request_return = axios.get(URL_NEXT_API, { 
        params: {
            email: user, 
            password: password
        }
    })
    .then((response => {
        return response.data
    }))
    .catch((error => {
        return error
    }))

    return request_return
}

export default authNext