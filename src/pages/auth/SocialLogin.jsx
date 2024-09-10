import { FaGithub, FaGoogle } from 'react-icons/fa';

// import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { googleLogin, githubLogin } = useAuth();
  

  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      toast.success('Your google login is successful');
      navigate(location?.state || '/');
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then(() => {
      toast.success('Your github login is successful');
       navigate(location?.state || '/');
    });
  };

  return (
    <div>
      <div className='mt-2 flex flex-col md:flex-row justify-between'>
        <a
          onClick={handleGoogleLogin}
          className='cursor-pointer text-2xl flex gap-3 items-center bg-golden-saffron 
          hover:bg-royal-amethyst text-light-ash px-8 py-2 rounded-md mb-2 md:mb-0 justify-center'
        >
          <FaGoogle size={21} />
          <p className='text-base'>Google Login</p>
        </a>
        <a
          onClick={handleGithubLogin}
          className='cursor-pointer text-2xl flex gap-3 items-center bg-golden-saffron 
          hover:bg-royal-amethyst text-light-ash px-8 py-2 rounded-md justify-center'
        >
          <FaGithub size={23} />
          <p className='text-base'>Github Login</p>
        </a>
      </div>
    </div>
  );
};

export default SocialLogin;
