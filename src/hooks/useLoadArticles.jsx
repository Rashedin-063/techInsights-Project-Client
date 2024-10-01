import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadArticles = (page, size ) => {
  console.log(page, size)
  
  const axiosSecure = useAxiosSecure();

  const {
    data: articles = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['articles', page, size],
    queryFn: async () => {
      const res = await axiosSecure.get(`/articles?page=${page}&size=${size}`);
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching articles:', error);
    },
  });

  return [articles, refetch, isLoading, isError, error];
};

export default useLoadArticles;
