import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import AdminArticleCard from '../../components/AdminArticleCard';
import useLoadArticles from '../../hooks/useLoadArticles';



const AdminArticles = () => {

  const [articles, refetch, isLoading, isError, error] = useLoadArticles();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage error={error} />;

  return (
    <div>
      <Helmet>
        <title>Tech Insights || All Articles</title>
      </Helmet>
      <PageTitle title={`All Articles : ${articles?.length}`} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8 md:mx-4'>
        {articles?.map(article => <AdminArticleCard key={article._id} article={article}/>)}
    </div>
    </div>
  );
};

export default AdminArticles;