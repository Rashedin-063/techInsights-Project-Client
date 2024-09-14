import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import placeholderImage from '../assets/placeholder.png'

const AdminArticleCard = ({article }) => {  

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
    writers_email
  } = article;


  // handle wishlist
 
  return (
    <div className='max-w-2xl px-8 py-4 rounded-lg shadow-xl border-2 border-deep-ocean border-dotted hover:transition-all hover:border-green-lantern hover:duration-300 rounded-ss-3xl rounded-ee-3xl group'>
      {/* time and category */}
      <div className='flex items-center justify-between'>
        <p className='font-wendy text-sm'>{posted_time}</p>
        {/* publisher */}
        <p
          className={`px-3 py-1 text-sm font-bold ${
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
          } rounded-full px-2 font-m-plus`}
        >
          {publisher}
        </p>
      </div>
{/* image */}
      <div className='mt-2'>
        <img
          className='rounded-xl mx-auto h-[200px] lg:h-60 mb-4 mt-4 group-hover:scale-105 transition duration-800 object-cover ease-in'
          src={image_url ? image_url : placeholderImage}
          alt=''
        />
        <p className='text-lg font-bold '>{title}</p>
        <p className='text-sm flex gap-4 italic mt-1'>
          {tags.map(tag => <span>#{tag}</span>)}
        </p>

        <p className='mt-2'>{description.slice(0, 75)}....</p>
      </div>

      {/* read more & wishlist btn */}
      <div className='flex items-center justify-between mt-4'>
        <Link className='text-golden-saffron font-semibold hover:underline '>
          Read more
        </Link>

        <div className='flex items-center'>
          <button className='font-semibold  cursor-pointer border-2 border-golden-saffron px-2 border-opacity-45 rounded-lg hover:border-opacity-100 font-m-plus'>
            Make Premium
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminArticleCard;
