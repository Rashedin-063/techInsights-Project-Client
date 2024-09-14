import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import placeholderImage from '../assets/placeholder.png';

const ArticleCard = ({ article }) => {
  // destructuring article
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


  return (
    <div
      className={`max-w-2xl px-8 py-4 rounded-lg shadow-xl border-2 border-deep-ocean border-dotted hover:transition-all hover:border-green-lantern hover:duration-300 rounded-ss-3xl rounded-ee-3xl group ${
        article.isPremium === 'yes'
          ? 'bg-gradient-to-br from-green-200 to-blue-400'
          : ''
      }`}
    >
      {/* time and publisher*/}
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

      <div className='mt-2'>
        {/* image */}
        <img
          className='rounded-xl mx-auto h-[200px] lg:h-60 mb-4 mt-4 group-hover:scale-105 transition duration-800 object-cover ease-in'
          src={image_url ? image_url : placeholderImage}
          alt=''
        />
        {/* title */}
        <p className='text-lg font-bold '>{title}</p>
        <p className='text-sm flex italic mt-2 pb-2 justify-between'>
          <span className='flex gap-4'>
            {tags.map((tag) => (
              <span># {tag}</span>
            ))}
          </span>
          {article.isPremium === 'yes' && (
            <span className='not-italic font-wendy text-[16px] text-amber-600'>
              Premium
            </span>
          )}
        </p>

        <p className='mt-2'>{description.slice(0, 150)}....</p>
      </div>

      {/* read more */}
      <div className='flex items-center justify-end mt-4'>
        <Link
          to={`/details/${_id}`}
          className='text-deep-ocean font-semibold hover:underline hover:transition hover:duration-300 hover:font-bold font-sevillana text-xl'
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
export default ArticleCard;
