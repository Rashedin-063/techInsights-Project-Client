import { Helmet } from "react-helmet-async";
import PageTitle from "../components/PageTitle";


const MyArticles = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || My Articles</title>
      </Helmet>
      <PageTitle title="My Articles"/>
    </div>
  );
}
export default MyArticles