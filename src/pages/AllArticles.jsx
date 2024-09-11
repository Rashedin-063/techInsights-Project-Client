import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle';

const AllArticles = () => {
  return (
    <div>
      <Helmet >
        <title>Tech Insights || All Articles</title>
      </Helmet>
      <PageTitle title='All Articles' />
    </div>
  );
};
export default AllArticles;
