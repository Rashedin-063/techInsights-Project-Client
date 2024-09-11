import { Helmet } from 'react-helmet-async';
import Logo from '../home/Logo'


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Insights || Home</title>
      </Helmet>
      <Logo />
    </div>
  );
}
export default Home