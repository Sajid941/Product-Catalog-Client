import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://product-catalog-server.vercel.app'
})


const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;