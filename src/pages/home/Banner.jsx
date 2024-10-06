import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../home/Banner.css';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { axiosApi } from '../../api/axiosApi';
import ArticleCard from '../../components/ArticleCard';
import ScrollingNews from './ScrollingNews';
import BannerCard from '../../components/BannerCard';


const Banner = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  // load articles data
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

  // console.log(articles)
  
  
  
// manage loading and error
  if (isLoading) return <LoadingSpinner />
  if(isError) return <ErrorMessage error={error}/>


  return (
    <div className='flex flex-col-reverse lg:flex-row gap-8 px-4  mx-auto md:px-8'>
      {/* left side */}
      <div className="lg:w-1/2 mt-2">
        <ScrollingNews/>
      </div>

      {/* right side */}
      <div
        className='lg:w-1/2 md:ml-2 lg:ml-0'
        data-aos='zoom-in-cube'
        data-aos-duration='1000'
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={2000}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
        
          {articles.slice(0, 6).map((article) => (
            <SwiperSlide key={article._id}>
              <BannerCard article={article}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Banner;
