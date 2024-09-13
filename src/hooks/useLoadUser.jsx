import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useLoadUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  
  const {
    data: userData = {},
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['user', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);

      return data;
    },
    onError: (error) => {
      console.log('Error fetching user:', error);
    },
  });
  return [userData, refetch, isLoading, isError, error]
}
  
export default useLoadUser;