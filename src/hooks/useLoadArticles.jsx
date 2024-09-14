import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadArticles = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: articles = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const res = await axiosSecure.get('/articles');
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching articles:', error); // Updated the error message
    },
  });

  return [articles, refetch, isLoading, isError, error];
};

export default useLoadArticles;
