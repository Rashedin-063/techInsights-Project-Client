import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useLoadUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
   const token = localStorage.getItem('access-token');

  const {
    data: userData = {},
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['user', user?.email],
    enabled: !!user && !!token,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);

      return data;
      console.log(data)
      
    },
    onError: (error) => {
      console.error('Error fetching user:', error);
    },
  });


  return [userData, refetch, isLoading, isError, error];
};

export default useLoadUser;
