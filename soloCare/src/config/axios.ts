import axios from "axios";
const local = 'http://localhost:3000/api';
const prod = 'https://solocare.vercel.app/api'
export const instance  = axios.create({
    baseURL: local
})