import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { showToast } from "../utility/useToast";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error);
            if (!error.response) {
                showToast('error', 'Network error. Please try again later.');
                return Promise.reject(error);
            }
            if (error.response.status === 401 || error.response.status === 403) {
                // console.log('logout the user')
                userSignOut()
                    .then(() => {
                        navigate('/login')
                        showToast('success', 'Log-out successful');
                    })
                    .catch(() => {
                        showToast('error', 'Log-out unsuccessful');
                    });
            }

            return Promise.reject(error);
        })
    }, [userSignOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;