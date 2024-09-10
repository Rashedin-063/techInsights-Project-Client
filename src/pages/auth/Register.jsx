import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';


const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  photo: z.string().url('Invalid photo URL'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
    .regex(
      /(?=.*[0-9])/,
      'Password must contain at least one numeric character'
    )
    .regex(
      /(?=.*[!@#$%^&*(),.?":{}|<>])/,
      'Password must contain at least one special character'
    ),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleRegister = ({ name, photo, email, password }) => {

    createUser(email, password)
      .then((result) => {
        toast.success('Your registration is successful');
       
        const creationTime = result.user?.metadata?.creationTime;
        const lastSignInTime = result.user?.metadata?.lastSignInTime;

        const user = { name, email, photo, creationTime, lastSignInTime };

        // post request
        axios.post(`${import.meta.env.VITE_API_URL}/users`, user)
          .then(res =>
 {
           if (res.data.insertedId) {
             Swal.fire({
               title: 'Success!',
               text: 'User Added Successfully',
               icon: 'success',
               confirmButtonText: 'Cool',
             });
           }
          })
      })
    .catch((error) => toast.error(error.message))
          
    
     
  }


  return (
    <div>
      <Helmet>
        <title>ByteBlog || Register</title>
      </Helmet>
      <div className='px-4'>
        <h2 className='text-3xl text-center font-semibold tracking-wide mt-1 mb-3'>
          Please Register
        </h2>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className='w-3/4 lg:w-1/2 mx-auto space-y-2'
        >
          <div className='form-control'>
            <input
              type='text'
              {...register('name')}
              placeholder='Name'
              className='input input-bordered'
            />
            {errors.name && (
              <p className='text-red-500 mt-2'>{errors.name.message}</p>
            )}
          </div>
          <div className='form-control'>
            <input
              type='text'
              {...register('photo')}
              placeholder='Photo URL'
              className='input input-bordered'
            />
            {errors.photo && (
              <p className='text-red-500 mt-2'>{errors.photo.message}</p>
            )}
          </div>
          <div className='form-control'>
            <input
              type='email'
              {...register('email')}
              placeholder='Email'
              className='input input-bordered'
            />
            {errors.email && (
              <p className='text-red-500 mt-2'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-control relative flex flex-col mt-3'>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder='Password'
              autoComplete='new-password'
              className='input input-bordered'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-4 right-8 cursor-pointer'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className='text-red-500 mt-2'>{errors.password.message}</p>
            )}
          </div>
          <div className='form-control mt-6'>
            <button
              className='btn bg-royal-amethyst text-light-cream
               hover:bg-golden-saffron mt-2'
            >
              Register
            </button>
          </div>
        </form>
        <p className='text-center text-lg pt-6 pb-4'>
          Already have an account?{' '}
          <Link className='text-blue-600 font-bold' to='/login'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
