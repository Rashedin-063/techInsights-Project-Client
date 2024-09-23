import { Helmet } from 'react-helmet-async';
import Logo from '../home/Logo'
import Banner from './Banner';
import PublisherSection from './PublisherSection';
import SubscriptionTeaser from './SubscriptionTeaser';
import AboutUs from './AboutUs';
import Poll from './Poll';
import useLoadUser from '../../hooks/useLoadUser';
import Swal from 'sweetalert2';
import Button from './../../components/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Home = () => {
  const [userData] = useLoadUser();

  const [alertCount, setAlertCount] = useState(0);
  const maxAlerts = 5;

  // show alert if user is not premium
  useEffect(() => {
    let premiumAlertInterval;

   
    if (userData?.subscription !== 'premium') {
      premiumAlertInterval = setInterval(() => {
        if (alertCount < maxAlerts) {
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Please upgrade to premium for unlimited access',
            showConfirmButton: false,
            timer: 2000,
          });

          setAlertCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(premiumAlertInterval);
        }
      }, 10000);
    }

    return () => {
      if (premiumAlertInterval) {
        clearInterval(premiumAlertInterval);
      }
    };
  }, [userData, alertCount]);

  return (
    <div className='space-y-8'>
      <Helmet>
        <title>Tech Insights || Home</title>
      </Helmet>
      <Logo />
      <Banner />
      <Poll />
      <SubscriptionTeaser />
      <AboutUs />
      <PublisherSection />
    </div>
  );
}
export default Home