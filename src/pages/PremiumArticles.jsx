import { Helmet } from "react-helmet-async";
import PageTitle from "../components/PageTitle";
import useLoadArticles from "../hooks/useLoadArticles";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import ArticleCard from "../components/ArticleCard";


const PremiumArticles = () => {
  
  const [articles, refetch, isLoading, isError, error] = useLoadArticles();

  // console.log(articles)
  

  const premiumArticles = articles.filter(
    (article) => article.isPremium === 'yes'
  );

  // console.log(premiumArticles)
  

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorMessage error={error} />;

  return (
    <div>
      <Helmet>
        <title>Tech Insights || Premium Articles</title>
      </Helmet>
      <PageTitle title='Premium Articles' />

      <div className='grid grid-cols-1 mx:grid-cols-2 lg:grid-cols-3 gap-4 mx-8 md:mx-4'>
        {premiumArticles.map((article) => (
          <ArticleCard key={article._id} article={article} refetch={refetch} />
        ))}
      </div>
    </div>
  );
}
export default PremiumArticles