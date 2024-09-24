import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useEffect, useState } from 'react';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  // Handle navigation inside useEffect
  useEffect(() => {
    if (shouldNavigate) {
      navigate('/login');
    }
  }, [shouldNavigate, navigate]);

  // req
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');

      // console.log('request stopped before interceptor', token)

      config.headers.authorization = `Bearer ${token}`;

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

      //console.log(status)

      if (status === 401 || status === 403) {
        await logOutUser();
     shouldNavigate(true)
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
