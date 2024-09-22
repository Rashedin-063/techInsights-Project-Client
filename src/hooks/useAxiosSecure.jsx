import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  // req
  axiosSecure.interceptors.request.use(
    (config) =>  {
      const token = localStorage.getItem('access-token');  
     
   if (token) {
     config.headers.authorization = `Bearer ${token}`;
   } else {
     console.warn('No token found in localStorage');
   }
      return config;
    },
     (error) => {
      return Promise.reject(error);
    }
  );

  // res
  axiosSecure.interceptors.response.use(
     (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;

      console.log(status)
      

      // if (status === 401 || status === 403) {
      //   await logOutUser();
      //   navigate('/login');
      // }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
