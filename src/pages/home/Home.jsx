import { Helmet } from 'react-helmet-async';
import Logo from '../home/Logo'
import Banner from './Banner';
import PublisherSection from './PublisherSection';
import Subscription from '../Subscription';
import PlanSection from './PlanSection';
import SubscriptionTeaser from './SubscriptionTeaser';


const Home = () => {
  return (
    <div className='space-y-8'>
      <Helmet>
        <title>Tech Insights || Home</title>
      </Helmet>
      <Logo />
      <Banner />
      <PublisherSection />
     <SubscriptionTeaser/>
    </div>
  );
}
export default Home