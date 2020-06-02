import axios from "./indexx"

export function checkLogin(){
    return axios.get('/person/login')
}