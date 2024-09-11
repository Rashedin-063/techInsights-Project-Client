import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle"


const AddPublisher = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Admin - Add Publisher</title>
      </Helmet>
      <PageTitle title='Add Publisher' />
    </div>
  );
}
export default AddPublisher