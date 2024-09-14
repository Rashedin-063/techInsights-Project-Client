import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle';
import useLoadArticles from '../hooks/useLoadArticles';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ArticleCard from '../components/ArticleCard';

const AllArticles = () => {

  
  const [articles, refetch, isLoading, isError, error] = useLoadArticles();

  const publicArticle = articles.filter(
    (article) => article.status !== 'pending'
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
    </div>
  );
};

export default AllArticles;
