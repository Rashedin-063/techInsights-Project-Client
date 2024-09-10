import { Outlet } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const Root = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme}`}>
      <div
        className={`max-w-7xl mx-auto lg:px-4 font-suse ${theme?.colors?.background} ${theme?.colors?.textPrimary} min-h-[83vh] pb-8`}
      >
    
        <Outlet />
      </div>
    
    </div>
  );
};
export default Root;
