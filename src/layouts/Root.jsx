import { Outlet, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import Navbar from './../pages/shared/Navbar';
import Footer from './../pages/shared/Footer';

const Root = () => {
  const { theme } = useTheme();

  const location = useLocation();
  

  const noHeaderFooter =
    location.pathname.includes('login') || location.pathname.includes('register');

  return (
    <div className={`${theme}`}>
      <div
        className={`max-w-7xl mx-auto lg:px-4 font-raleway ${theme?.colors?.background} ${theme?.colors?.textPrimary} min-h-[83vh] pb-8`}
      >
        {noHeaderFooter || <Navbar />}
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};
export default Root;
