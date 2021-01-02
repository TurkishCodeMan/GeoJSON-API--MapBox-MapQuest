import axios from "axios"
import Vue from "vue"
export default () => {
    const axiosInstance = axios.create({
        baseURL: "/api/v1"
    })
    Vue.use(axiosInstance)
    return axiosInstance;
}