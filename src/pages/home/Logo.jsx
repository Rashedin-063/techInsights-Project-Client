import { Typewriter } from 'react-simple-typewriter';
import MottoMarquee from '../home/MottoMarquee';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <div className='flex items-center justify-between ml-6 xl:ml-12 mt-6 lg:mt-8'>
        <Link
          to='/'
          className='text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer font-sevillana text-green-lantern drop-shadow-md'
        >
          <Typewriter
            words={['Tech Insights']}
            typeSpeed={90}
            cursor={true}
            cursorBlinking
          />
        </Link>

        <div className='w-1/2 md:w-[70%] xl:w-3/4 '>
          <MottoMarquee />
        </div>
      </div>
    </div>
  );
};
export default Logo;
