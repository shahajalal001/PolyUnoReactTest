import axios from "axios";
import Cookies from 'js-cookie'

const useAxios = () => {
    return axios.create({
        baseURL: process.env.api_url,
        timeout: 15000,
        headers: {Authorization: `Authorization ${Cookies.get('token')}`},
        validateStatus: function (status) {
            return status >= 200 && status < 600; // default
        },
    });
}

export default useAxios