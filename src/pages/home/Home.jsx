import { Helmet } from 'react-helmet-async';
import Logo from '../home/Logo'
import Banner from './Banner';


const Home = () => {
  return (
    <div className='space-y-8'>
      <Helmet>
        <title>Tech Insights || Home</title>
      </Helmet>
      <Logo />
      <Banner/>
    </div>
  );
}
export default Home