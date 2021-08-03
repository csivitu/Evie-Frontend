import axios from "axios";


export const API = axios.create({
    baseURL: "http://192.168.1.2:3001", //PROCESS.ENV_REACT_APP_BASE_URL
    responseType: "json",
})

export const BASEURL = "http://192.168.1.2:3001"

export default API