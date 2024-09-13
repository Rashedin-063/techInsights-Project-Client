import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle"

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Admin - Statistics</title>
      </Helmet>
      <PageTitle title='Statistics' />
      <h1>Welcome to dashboard: Statistics Page</h1>
    </div>
  );
}

export default Statistics
