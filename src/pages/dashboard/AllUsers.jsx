import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle"


const AllUsers = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Admin - All Users</title>
      </Helmet>
      <PageTitle title='All Users' />
    </div>
  );
}
export default AllUsers