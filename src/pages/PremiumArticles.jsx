import { Helmet } from "react-helmet-async";
import PageTitle from "../components/PageTitle";


const PremiumArticles = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Premium Articles</title>
      </Helmet>
      <PageTitle title="Premium Articles"/>
    </div>
  );
}
export default PremiumArticles