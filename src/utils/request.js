// get instance
import axios from "axios";

// backend ip : 35.178.20.71
const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
})
// add request interceptor
request.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})
// add response interceptor
request.interceptors.response.use((response) => {
    // proceed when code in 200
    return response
}, (error) => {
    return Promise.reject(error)
})
export {request}
