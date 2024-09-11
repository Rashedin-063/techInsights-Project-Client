import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import useTheme from '../../hooks/useTheme';
import useAuth from './../../hooks/useAuth';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { toast } from 'react-toastify';







const Navbar = () => {
  
  const { theme, toggleTheme } = useTheme();
  const { user, logOutUser } = useAuth();

  const navigate = useNavigate();

  const items = [
    { to: '/', label: 'Home' },
    { to: '/add-Article', label: 'Add Article' },
    { to: '/all-articles', label: 'All Articles' },
    { to: '/subscription', label: 'Subscription' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/my-articles', label: 'My Articles' },
    { to: '/premium-articles', label: 'Premium Articles' },
  ];



  const handleTheme = () => {
    toggleTheme();
  };

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.warning('User logout successful')
        navigate('/')
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div
      className={`xl:px-8 ${theme.colors.background} pt-2 lg:pt-4 -mb-3 sticky top-0 z-10`}
    >
      <div className='flex justify-between w-full px-2 lg:px-4 py-2'>
        <div className='flex-1 lg:-mt-2'>
          {/* dropdown */}
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost hover:bg-transparent xl:hidden relative hover:scale-110'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 md:h-8 md:w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`dropdown-content rounded-box z-10 mt-3 ml-4 flex flex-col gap-4 shadow-xl w-[220px] pl-9 pt-12 pb-4 border-2 border-green-lantern  ${theme?.colors?.background} ${theme?.colors?.textPrimary}`}
            >
              <Menu items={items} />
              {/* theme controller */}
            </ul>
          </div>
          <div className='hidden xl:flex'>
            <ul className=''>
              <Menu items={items} />
            </ul>
          </div>
        </div>

        {/* 

navbar end
*/}
        <div className=' flex gap-2 mr-4 xl:-mr-4 -mt-2 xl:mt-2 item-center'>
          {user ? (
            <div className='flex gap-2 items-center mt-1 lg:-mt-[3px]'>
              <div className='dropdown dropdown-end'>
                <div
                  tabIndex={0}
                  role='button'
                  className=' btn-circle avatar border-2 border-green-lantern border-opacity-75 rounded-full hover:border-opacity-95'
                >
                  <div className=' rounded-full'>
                    <Tooltip
                      title={user.displayName}
                      TransitionComponent={Zoom}
                      arrow
                    >
                      <img
                        referrerPolicy='no-referrer'
                        className='h-9 w-9 md:h-10 md:w-10 rounded-full mb-2 md:mb-0'
                        src={user.photoURL}
                        alt='User Pic'
                      />
                    </Tooltip>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content bg-faded-pearl border-2 border-midnight-gray z-20 mt-3 p-2 w-36 drop-shadow-xl pt-8 flex flex-col items-center space-y-2 rounded-xl'
                >
                  <li>
                   <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <btn className='btn btn-sm bg-green-lantern hover:bg-deep-ocean rounded-lg hover:rounded-full border-2 border-green-lantern hover:border-deep-ocean text-pure-white'
                      onClick={handleLogOut}
                    > Sign Out </btn>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className='flex gap-2 items-center'>
              <Link to='/login'>
                <Button type='primary' label='Sign In'></Button>
              </Link>
            </div>
          )}

          {/* theme controller */}
          <div className='xl:mr-4 outline outline-deep-ocean flex justify-center items-center rounded-full my-2 md:my-0 h-[44px] w-[44px]'>
            <label className='swap swap-rotate'>
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleTheme}
                type='checkbox'
                className='theme-controller'
              />

              {/* sun icon */}
              <svg
                className='swap-off
                h-10 w-10 fill-current flex justify-center items-center'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
              </svg>

              {/* moon icon */}
              <svg
                className='swap-on w-10 h-10 fill-current flex items-center justify-center'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* border */}
      <div className='border-[1px] border-gray-600 w-[91.5%] lg:w-[97%] mx-auto xl:my-2 border-opacity-45'></div>
    </div>
  );
};

export default Navbar;
