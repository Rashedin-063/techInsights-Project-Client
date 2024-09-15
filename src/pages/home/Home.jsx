import { Helmet } from 'react-helmet-async';
import Logo from '../home/Logo'
import Banner from './Banner';
import PublisherSection from './PublisherSection';
import SubscriptionTeaser from './SubscriptionTeaser';
import AboutUs from './AboutUs';


const Home = () => {
  return (
    <div className='space-y-8'>
      <Helmet>
        <title>Tech Insights || Home</title>
      </Helmet>
      <Logo />
      <Banner />
      <PublisherSection />
      <SubscriptionTeaser />
    <AboutUs/>
    </div>
  );
}
export default Home