import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadArticles = (status, page, size, filter, search ) => {
  // console.log(page, size)
  
  const axiosSecure = useAxiosSecure();

  const {
    data: articles = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['articles', status, page, size, filter, search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/articles?status=${status}&page=${page}&size=${size}&filter=${filter}&search=${search}`);
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching articles:', error);
    },
  });

  return [articles, refetch, isLoading, isError, error];
};

export default useLoadArticles;
