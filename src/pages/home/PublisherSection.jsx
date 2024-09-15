import { useQuery } from '@tanstack/react-query';
import PageTitle from '../../components/PageTitle';
import LoadingSpinner from '../../components/LoadingSpinner';
import { axiosApi } from '../../api/axiosApi';

const PublisherSection = () => {

  const { data: publisherData = [], isError, error, isLoading } = useQuery({
    queryKey: ['publishers'],

    queryFn: async () => {
      const { data } = await axiosApi.get('/publishers');

      return data;
    },
    onError: (error) => {
      console.log('Error fetching user:', error);
    },
  });

  if (isLoading) return <LoadingSpinner />
  if (isError) return <LoadingSpinner error='error' />
  


  return (
    <div>
      <PageTitle title='All Publishers' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-8'>
        {publisherData.map((publisher) => (
          <div
            key={publisher.title}
            className='flex flex-col items-center justify-center border-2 border-green-lantern py-12 rounded-3xl'
          >
            <div
              className='w-3/4 h-[280px] lg:h-60 bg-gray-300 bg-center bg-cover rounded-3xl shadow-md rounded-t-3xl'
              style={{
                backgroundImage: `url(${publisher.logo})`,
              }}
            ></div>

            <div className='w-56 -mt-10 overflow-hidden bg-white rounded-full shadow-lg md:w-64 dark:bg-gray-900'>
              <h3 className='font-bold text-gray-800 dark:text-gray-200   py-3 text-center '>
                Publisher :
              </h3>

              <div className='flex items-center justify-center px-3 py-4  dark:bg-gray-700'>
                <span className='font-bold tracking-wide text-center uppercase dark:text-white'>
                  {publisher.title}
                </span>
  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PublisherSection;
