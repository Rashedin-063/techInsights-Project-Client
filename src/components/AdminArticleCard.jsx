import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import placeholderImage from '../assets/placeholder.png';

const AdminArticleCard = ({ article }) => {
  // destructuring post
  const {
    _id,
    title,
    description,
    image_url,
    tags,
    publisher,
    isPremium,
    status,
    posted_by,
    posted_time,
    writers_email,
  } = article;

  // handle admin action
  
  const handleApproveBtn = (id) => {
    console.log(id)
    
  }
  const handleDeclineBtn = (id) => {
    console.log(id)
    
  }
  const handleDleteeBtn = (id) => {
    console.log(id)
    
  }
  const handleMakeAdminBtn = (id) => {
    console.log(id)
    
  }

  return (
    <div className='max-w-2xl px-8 py-4 rounded-lg shadow-xl border-2 border-deep-ocean border-dotted hover:transition-all hover:border-green-lantern hover:duration-300 rounded-ee-[15%] rounded-es-[15%] group'>
      <div className='mt-2 h-[270px]'>
        {/* image */}
        <img
          className='rounded-xl mx-auto -translate-y-28 h-48 md:h-40 mb-4 md:mt-2 group-hover:scale-105 transition duration-800 ease-in w-11/12'
          src={image_url ? image_url : placeholderImage}
          alt=''
        />

        {/* title, tags, description */}
        <p className='text-lg font-bold -mt-24'>
          {' '}
          <span className='italic font-semibold mr-1'>Title:</span> {title}
        </p>

        {/* time and category */}
        <div className='flex items-center justify-between stretch mt-4'>
          <p className='font-wendy text-sm'>
            <span className='font-raleway italic font-semibold mr-1'>
              Posted At:{' '}
            </span>
            {posted_time}
          </p>
          {/* publisher */}
          <p
            className={`px-3 py-1 text-sm font-bold text-center ${
              publisher === 'Data Dive' &&
              'text-blue-600 bg-gradient-to-bl from-blue-100 via blue-50 to-blue-300'
            } ${
              publisher === 'DevOps Digest' &&
              'text-green-600 bg-gradient-to-bl from-green-100 via green-50 to-green-300'
            } ${
              publisher === 'AI Revolution' &&
              'text-purple-600 bg-gradient-to-bl from-purple-100 via purple-50 to-purple-300'
            } ${
              publisher === 'Cyber Shield' &&
              'text-rose-600 bg-gradient-to-bl from-rose-100 via rose-50 to-rose-300'
            } ${
              publisher === 'Tech Tomorrow' &&
              'text-orange-600 bg-gradient-to-bl from-orange-100 via orange-50 to-orange-300'
            } rounded-full px-2 flex gap-2 md:flex-col md:gap-0 md:px-4`}
          >
            <span> PUblisher:</span> <span>{publisher}</span>
          </p>
        </div>

        {/* <p className='mt-2'>{description.slice(0, 175)}....</p> */}
        <div className='mt-4 flex justify-between'>
          <p className='mb-1'>
            <em>Author: </em>
            <span>{posted_by}</span>
          </p>
          <p className='mb-1'>
            <em>Status: </em>
            <span>{status}</span>
          </p>
        </div>
        <p>
          <em>Email: </em>
          <span>{writers_email}</span>
        </p>
      </div>

      <div className='mt-4 space-y-4'>
        <div className='flex justify-center gap-12 md:gap-8'>
          <button
            onClick={handleApproveBtn}
            className='font-semibold  cursor-pointer border-2 border-deep-ocean px-2 rounded-lg hover:border-opacity-100 hover:rounded-full glass outline outline-green-lantern mb-2'>
           Approve Post
          </button>
          <button
            disabled={status === 'approved'}
            className='font-semibold  cursor-pointer border-2 border-deep-ocean px-2 rounded-lg hover:border-opacity-100 hover:rounded-full glass outline outline-green-lantern mb-2 disabled:cursor-not-allowed disabled:bg-gray-600'>
         Decline  Post
          </button>
        </div>
        <div className='flex justify-between gap-28 md:gap-14 pb-4'>
          <button className='font-semibold  cursor-pointer border-2 border-deep-ocean px-2 rounded-lg hover:border-opacity-100 hover:rounded-full glass outline outline-green-lantern mb-2'>
           Delete Post
          </button>
          <button className='font-semibold  cursor-pointer border-2 border-deep-ocean px-2 rounded-lg hover:border-opacity-100 hover:rounded-full glass outline outline-green-lantern mb-2'>
           Make Premium
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminArticleCard;
