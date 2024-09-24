import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { Calendar } from 'react-date-range';
import { FaUserAlt, FaBookReader } from 'react-icons/fa';
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { IoDocumentsSharp } from 'react-icons/io5';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import useAuth from '../../hooks/useAuth';
import { FaHandsClapping } from 'react-icons/fa6';
import './dashboardStyle.css'
import CustomShapeBarChart from './CustomShapeBarChart';

const Statistics = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // Fetch Admin Stat Data here
  const {
    data: statData = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['statData'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/admin-stats');
      return data;
    },
  });

  // console.log(statData)

  // destructuring statData
  const {
    totalUsers,
    totalArticles,
    totalPublishers,
    totalViews,
    publishedArticle,
    articleByPublisher
  } = statData;

  console.log(statData)
  

  // handling loading and error
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div>
      <Helmet>
        <title>Tech Insights || Admin - Statistics</title>
      </Helmet>

      <h1 className='text-3xl font-wendy ml-4 my-6 flex gap-4 text-green-lantern'>
        <FaHandsClapping color='green' size={36} className='-mt-1 wave-animation' />
        {`Hi! Welcome Back ${user?.displayName}`}
      </h1>

      <div className='mt-4'>
        {/* small cards */}
        <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {/* total users*/}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-slate-100 text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
            >
              <FaUserAlt className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm font-normal text-blue-gray-600 tracking-wider  leading-relaxed'>
                Total User
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {totalUsers}
              </h4>
            </div>
          </div>
          {/* total article*/}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-slate-100 text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
            >
              <IoDocumentsSharp className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm font-normal text-blue-gray-600 tracking-wider  leading-relaxed'>
                Total Articles
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {totalArticles}
              </h4>
            </div>
          </div>

          {/* published article */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-slate-100 text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
            >
              <MdOutlinePublishedWithChanges className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm font-normal text-blue-gray-600 tracking-wider  leading-relaxed'>
                Published Articles
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {publishedArticle}
              </h4>
            </div>
          </div>
          {/* Total Rooms */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-slate-100 text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
            >
              <FaBookReader className='w-6 h-6 text-white' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm font-normal text-blue-gray-600 tracking-wider  leading-relaxed'>
                Total Views
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {totalViews}
              </h4>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='my-8  gap-6 flex flex-col-reverse xl:flex-row'>
          {/* article by publisher graph */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-slate-100 text-gray-700 shadow-md overflow-x-auto py-8 text-center w-[500px] md:w-[700px] h-[450px] mx-auto'>
            {/* BarChart */}
            <p className='font-semibold mb-2'>Articles By Publishers</p>
            <CustomShapeBarChart articleByPublisher={articleByPublisher} />
          </div>
          {/* Pie Chart */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-slate-100 text-gray-700 shadow-md overflow-hidden'>
            <Calendar color='#F43F5E' />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Statistics;
