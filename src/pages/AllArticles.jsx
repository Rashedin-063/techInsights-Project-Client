import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle';
import useLoadArticles from '../hooks/useLoadArticles';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ArticleCard from '../components/ArticleCard';
import { useEffect, useState } from 'react';
import { axiosApi } from '../api/axiosApi';
import Button from '../components/Button';

const AllArticles = () => {
  const [articleCount, setArticleCount] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const [articles, refetch, isLoading, isError, error] = useLoadArticles();

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

  const numberOfPages =
    Math.ceil(articleCount?.approvedArticles / itemsPerPage) || 0;
  // console.log(numberOfPages);

  const pages = [...Array(numberOfPages).keys()];

  // console.log(pages)

  const handleCurrentPage = (value) => {
    setCurrentPage(value);
  };

  const handlePrevBtn = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextBtn = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  /**
   * DONe 1: get the total count;
   * DONE 2: itemsPerPage
   * DONE 3: total page
   */

  const publicArticle = articles.filter(
    (article) => article.status === 'approved'
  );

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage error={error} />;

  return (
    <div>
      <Helmet>
        <title>Tech Insights || Admin - All Articles</title>
      </Helmet>
      <PageTitle title='All Articles' />

      <div className='grid grid-cols-1 mx:grid-cols-2 lg:grid-cols-3 gap-4 mx-8 md:mx-4'>
        {publicArticle.map((article) => (
          <ArticleCard key={article._id} article={article} refetch={refetch} />
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

        {/* dynamic page */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => {
              handleCurrentPage(page);
            }}
            className={`px-4 py-1 bg-green-lantern text-white rounded-lg hover:bg-deep-ocean ${
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

        {/* select */}
        <select
          onChange={(e) => {
            setItemsPerPage(parseInt(e.target.value));
            setCurrentPage(0);
          }}
          className='pl-3 pr-1 ml-2 border-2 rounded-md border-green-lantern text-deep-ocean'
          name='itemsPerPage'
        >
          <option value='3'>3</option>
          <option value='6'>6</option>
          <option value='9'>9</option>
        </select>
      </div>
    </div>
  );
};

export default AllArticles;
