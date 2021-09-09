import axios from "axios";


export const API = axios.create({
    baseURL: "https://evie-api.csivit.com", //PROCESS.ENV_REACT_APP_BASE_URL
    responseType: "json",
})

export const BASEURL = "https://evie-api.csivit.com"

export default API