import { useState } from 'react';

// icons
import { GrUserAdmin, GrLogout, GrArticle } from 'react-icons/gr';
import { AiOutlineBars } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaAddressCard } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className=' bg-green-lantern bg-opacity-55 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold bg-slate-700'>
            <Link to='/'>
              <img
                className=' md:block drop-shadow-xl'
                src={logo}
                alt='logo'
                width='140'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 focus:text-gray-100'
        >
          <AiOutlineBars className='h-8 w-8' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-lantern bg-opacity-50 w-64 space-y-6 px-2 py-12 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto bg-slate-700 z-50'>
              <Link to='/'>
                <img
                  src={logo}
                  alt='logo'
                  width='150'
                  height='100'
                  className='drop-shadow-xl text-white'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <NavLink
                to='/dashboard'
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform rounded-full hover:bg-deep-ocean   hover:text-pure-white ${
                    isActive
                      ? 'bg-deep-ocean bg-opacity-85  text-pure-white'
                      : 'text-faded-pearl'
                  }`
                }
              >
                <BsGraphUp className='w-5 h-5 text-pure-white' />

                <span className='mx-4 font-medium'>Statistics</span>
              </NavLink>

              {/* All users */}
              <NavLink
                to='all-users'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 rounded-full  transition-colors duration-300 transform  hover:bg-green-lantern  hover:text-pure-white ${
                    isActive
                      ? 'bg-deep-ocean bg-opacity-85  text-pure-white'
                      : 'text-faded-pearl'
                  }`
                }
              >
                <CgProfile className='w-5 h-5 text-white' />

                <span className='mx-4 font-medium'>All Users</span>
              </NavLink>

              {/* All Articles */}
              <NavLink
                to='all-articles'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 rounded-full  transition-colors duration-300 transform  hover:bg-green-lantern  hover:text-pure-white ${
                    isActive
                      ? 'bg-deep-ocean bg-opacity-85  text-pure-white'
                      : 'text-faded-pearl'
                  }`
                }
              >
                <GrArticle className='w-5 h-5 text-white' />

                <span className='mx-4 font-medium'>All Articles</span>
              </NavLink>

              {/* add publisher */}
              <NavLink
                to='add-publisher'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5 rounded-full  transition-colors duration-300 transform  hover:bg-green-lantern  hover:text-pure-white ${
                    isActive
                      ? 'bg-deep-ocean bg-opacity-85  text-pure-white'
                      : 'text-faded-pearl'
                  }`
                }
              >
                <FaAddressCard className='w-5 h-5 text-white' />

                <span className='mx-4 font-medium'>Add Publisher</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5 rounded-full  transition-colors duration-300 transform  hover:bg-green-lantern founded-full   hover:text-pure-white ${
                isActive
                  ? 'bg-deep-ocean bg-opacity-85  text-pure-white'
                  : 'text-faded-pearl'
              }`
            }
          >
            <GrUserAdmin className='w-5 h-5 text-pure-white' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 rounded-full mt-5 text-faded-pearl hover:bg-green-lantern founded-full   hover:text-pure-white transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5 text-pure-white' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
