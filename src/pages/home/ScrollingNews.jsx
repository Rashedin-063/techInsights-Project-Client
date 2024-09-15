import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { axiosApi } from '../../api/axiosApi';

export default function ScrollingNews() {
  
  const {
    data: articles = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const res = await axiosApi.get('/articles');
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching articles:', error);
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage error={error} />;


  
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      className='scroll-container'>
      <div className='scroll-content'>
        <Swiper
          direction='vertical'
          slidesPerView='auto'
          className='mySwiper'
        >
          {articles.slice(5).map((article) => (
            <SwiperSlide
              key={article._id}
              className='mb-8'>
              <h4 className=' font-semibold mt-4 text-black'>
               {article.title}
              </h4>
              <p className='text-sm mt-2 tracking-wider text-justify text-black'>
               {article?.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
