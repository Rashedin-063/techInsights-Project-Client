import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { axiosApi } from '../api/axiosApi';
import Swal from 'sweetalert2';

const MyArticles = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: articles = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['articles', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-articles/${user?.email}`);
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching articles:', error);
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  const handleDeleteArticle = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosSecure.delete(`/articles/${id}`);

          if (data.deletedCount) {
            toast.warn('Post deleted');
            refetch();
          }
        }
      });
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Tech Insights || My Articles</title>
      </Helmet>
      <PageTitle title={`My Articles : ${articles?.length}`} />

      <div className='overflow-x-auto '>
        <table className='table table-sm lg:table-md  w-full border-2 border-green-lantern lg:w-3/4 mx-auto'>
          {/* head */}
          <thead>
            <tr className=' border-b-2 border-green-lantern text-lg text-slate-800 text-center'>
              <th className='border-2 border-green-lantern'>#</th>
              <th className='border-2 border-green-lantern'>Article Title</th>
              <th className='border-2 border-green-lantern'>Status</th>
              <th className='border-2 border-green-lantern'>isPremium</th>
              <th className='border-2 border-green-lantern'>Details</th>
              <th className='border-2 border-green-lantern'>Update</th>
              <th className='border-2 border-green-lantern'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article, index) => (
              <tr className='border-b border-green-lantern' key={article._id}>
                <td className='border border-green-lantern text-sm font-semibold'>
                  {index + 1}
                </td>

                <td className='border border-green-lantern text-sm font-semibold '>
                  {article?.title}
                </td>
                {/* status */}
                <td className='border border-green-lantern text-sm font-semibold'>
                  {article.status === 'pending' ? (
                    <i className='text-yellow-600'>
                      {article?.status.slice(0, 1).toUpperCase() +
                        article?.status.slice(1)}
                    </i>
                  ) : article.status === 'approved' ? (
                    <span className='text-green-600'>
                      {article?.status.slice(0, 1).toUpperCase() +
                        article?.status.slice(1)}
                    </span>
                  ) : (
                    <span className='text-orange-800'>
                      {article?.status.slice(0, 1).toUpperCase() +
                        article?.status.slice(1)}
                    </span>
                  )}
                </td>
                <td
                  className={`border border-green-lantern text-sm font-semibold text-center ${
                    article?.isPremium === 'yes'
                      ? 'font-wendy text-green-lantern'
                      : ''
                  }`}
                >
                  {article?.isPremium === 'yes' ? 'Yes' : 'No'}
                </td>
                <td
                  className={`border border-green-lantern text-sm font-semibold`}
                >
                  <Link to={`/details/${article._id}`}>
                    <button className='border-2 px-2 py-1 rounded-md border-green-lantern hover:rounded-full hover:bg-green-600'>
                      Details
                    </button>
                  </Link>
                </td>
                <td className='border border-green-lantern text-sm font-semibold'>
                  <Link to={`/update/${article._id}`}>
                    <button className='border-2 px-2 py-1 rounded-md border-deep-ocean hover:bg-blue-600 hover:rounded-full'>
                      Update
                    </button>
                  </Link>
                </td>
                <td className='border- border-green-lantern text-xs font-semibold text-center hover:text-white'>
                  <button
                    onClick={() => handleDeleteArticle(article._id)}
                    className=' border-2 rounded-full p-2 border-red-600 hover:bg-red-800'
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyArticles;
