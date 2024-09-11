import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';

const AllArticlesAdmin = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Admin - All Articles</title>
      </Helmet>
      <PageTitle title='All Articles' />
    </div>
  );
};

export default AllArticlesAdmin;
