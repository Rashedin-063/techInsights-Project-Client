import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle';


const UserProfile = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Profile</title>
      </Helmet>
      <PageTitle title={`User Profile`} />
    </div>
  );
}

UserProfile.propTypes = {

}


export default UserProfile