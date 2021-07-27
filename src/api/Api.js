import axios from "axios";


export const API = axios.create({
    baseURL: "http://localhost:3001",//PROCESS.ENV_REACT_APP_BASE_URL
    responseType: "json",
})

export const baseURL = "http://localhost:3001"

export default API