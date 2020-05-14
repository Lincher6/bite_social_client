import axios from "axios";


 export const instance = axios.create({
    baseURL: 'https://europe-west2-socialbug-6991e.cloudfunctions.net/api',
})