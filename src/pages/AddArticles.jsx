import { Helmet } from "react-helmet-async";
import PageTitle from "../components/PageTitle"


const AddArticles = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Add Articles</title>
      </Helmet>
      <PageTitle title='Add Articles' />
    </div>
  );
}
export default AddArticles