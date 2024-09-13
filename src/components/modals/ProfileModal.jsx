import PropTypes from 'prop-types';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
  Description,
} from '@headlessui/react';
import { Fragment } from 'react';
import { FaClosedCaptioning, FaCross, FaCrosshairs } from 'react-icons/fa';
import { MdClose, MdCloseFullscreen } from 'react-icons/md';
import { BsDoorClosed } from 'react-icons/bs';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

import useAuth from './../../hooks/useAuth';

import { imageUpload } from '../../api/utils';
import { ImSpinner9 } from 'react-icons/im';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';
import { createOrUpdateUser } from '../../api/userApi';


/**
 *  
  <li>
<button onClick={() => setIsOpen(true)}>Profile</button>
<ProfileModal isOpen={isOpen} closeModal={closeModal} />
</li>

 */

const ProfileModal = ({ isOpen, closeModal, userData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const { createUser, updateUserProfile, loading, setLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const handleRegister = async ({ name, email }) => {
    try {
      setLoading(true);

      const image_url = await imageUpload(imageFile);

     return console.log(name, email, image_url)
      

      // 3. Save username and photo in Firebase
      await updateUserProfile(name, email, image_url);

      toast.success('Your profile is updated');

      navigate('/');
    } catch (err) {
      console.log('Error:', err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle file input changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  console.log(userData)
  

  const {displayName, email, photoURL } = userData

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-1000'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-600'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='max-w-lg space-y-4 border bg-green-100 p-12 relative font-raleway rounded-md drop-shadow-md'>
            {/* close btn */}
            <button
              onClick={closeModal}
              className='absolute -top-3 -right-3 bg-green-lantern rounded-full p-2 cursor-pointer'
            >
              <MdClose color='white' size={20} />
            </button>
            <DialogTitle className='text-2xl pb-4 text-center font-wendy'>
              Update your profile
            </DialogTitle>

            {/* update form */}
            <form
              onSubmit={handleSubmit(handleRegister)}
              className=' space-y-2'
            >
              {/* name */}
              <div className='form-control'>
                <input
                  type='text'
                  {...register('name')} // Ensure this matches the Zod schema
                  placeholder='Name'
                  defaultValue={displayName}
                  className='input input-bordered'
                />
                {errors.name && (
                  <p className='text-red-500 mt-2'>{errors.name.message}</p>
                )}
              </div>

              {/* email */}
              <div className='form-control'>
                <input
                  type='email'
                  {...register('email')}
                  readOnly
                  placeholder='Email'
                  defaultValue={email}
                  className='input input-bordered'
                />
                {errors.email && (
                  <p className='text-red-500 mt-2'>{errors.email.message}</p>
                )}
              </div>
              {/* photo */}
              <div className='flex justify-between items-center py-1 bg-white rounded-md'>
                <label
                  htmlFor='photo'
                  className='block mb-2 pt-2 pl-[14px] min-w-40 font-semibold'
                >
                  Select Image:
                </label>
                <input
                  type='file'
                  id='photo'
                  accept='image/*'
                  onChange={handleImageChange}
                />
                <div className='mt-4'>
                  <img src={userData?.photoURL} alt='Preview' />
                </div>
              </div>

              <div className='form-control mt-6'>
                <button
                  disabled={loading}
                  type='submit'
                  className='btn bg-green-lantern text-pure-white hover:bg-deep-ocean mt-2'
                >
                  {loading ? (
                    <ImSpinner9 className='animate-spin m-auto text-deep-ocean' />
                  ) : (
                    'Update'
                  )}
                </button>
              </div>
            </form>
            <div>
              <btn className='ml-2 cursor-pointer font-sevillana '>Reset password</btn>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
export default ProfileModal;
