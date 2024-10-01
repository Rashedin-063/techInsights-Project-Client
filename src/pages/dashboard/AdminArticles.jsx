import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import AdminArticleCard from '../../components/AdminArticleCard';
import useLoadArticles from '../../hooks/useLoadArticles';
import { useEffect, useState } from 'react';
import { axiosApi } from '../../api/axiosApi';

const AdminArticles = () => {

  const [articleCount, setArticleCount] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  // fetching article count
  useEffect(() => {
    fetchArticleCount();
  }, []);

  // fetching article count
  const fetchArticleCount = async () => {
    try {
      const { data } = await axiosApi.get('/articleCount');
      setArticleCount(data);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(articleCount);

  // fetching all articles

  const [articles, refetch, isLoading, isError, error] = useLoadArticles(currentPage, itemsPerPage);

  // calculating pages
  const pageNumbers = Math.ceil(articleCount?.allArticles / itemsPerPage) || 0;
  // console.log(pageNumbers)
  
  const pages = [...Array(pageNumbers).keys()]
  // console.log(pages)

  const handlePrevBtn = () => {
    if (currentPage > 0) {
  setCurrentPage(currentPage - 1)
}
  }
  const handleNextBtn = () => {
 if (currentPage < pages.length - 1) {
   setCurrentPage(currentPage + 1);
 }
  }
  
  

  // managing loading and error
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div>
      <Helmet>
        <title>Tech Insights || All Articles</title>
      </Helmet>
      <PageTitle title={`All Articles : ${articles?.length}`} />
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-28 mx-4 md:mx-10 lg:mx-28 xl:mx-8 mt-20'>
        {articles?.map((article) => (
          <AdminArticleCard
            key={article._id}
            article={article}
            refetch={refetch}
          />
        ))}
      </div>

      {/* pagination */}
      <div className='flex gap-2 justify-center mt-8'>
        {/* prev btn */}

        <button
          onClick={handlePrevBtn}
          disabled={currentPage === 0}
          className={`px-4 py-2 mx-1  bg-deep-ocean
            text-pure-white
            disabled:bg-gray-600 disabled:text-gray-400 capitalize rounded-md disabled:cursor-not-allowed hover:bg-green-lantern   `}
        >
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>

        {/* dynamic btn */}
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={`px-4 py-2 bg-green-lantern text-white rounded-lg hover:bg-deep-ocean ${
              currentPage === page
                ? ' scale-105 -translate-y-2 bg-gradient-to-br from-green-500 to-green-700'
                : ''
            }`}
          >
            {page + 1}
          </button>
        ))}

        {/* next btn */}
        <button
          onClick={handleNextBtn}
          disabled={currentPage === pages.length - 1}
          className='px-4 py-2 mx-1  bg-deep-ocean transition-colors text-pure-white duration-300 transform rounded-md  hover:bg-green-lantern  disabled:cursor-not-allowed 
          disabled:bg-gray-600
          disabled:text-gray-400'
        >
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>

        {/* select item per page */}
        <select
          onChange={(e) => {
            const selectValue = parseInt(e.target.value);
            setItemsPerPage(selectValue);
            setCurrentPage(0);
          }}
          className='pl-3 pr-1 ml-2 border-2 rounded-md border-green-lantern text-deep-ocean'
          name='itemsPerPage'
        >
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
        </select>
      </div>
    </div>
  );
};

export default AdminArticles;
