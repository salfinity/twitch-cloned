import React from 'react';
import Logo from '../public/assets/logo.png';
import { useCallback, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';

const Account = () => {
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      
      <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
        <h2 className='text-2xl font-bold'>Welcome, {session.user.name}</h2>
        <p className='py-4'>Signed in as {session.user.email}</p>
        <div className='pb-4 m-auto'>
          <Image
            src={session.user.image}
            className='rounded-full'
            alt='/'
            width='100'
            height='100'
          />
        </div>
        <button className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600' onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="relative h-screen w-full bg-gray-300 bg-cover p-48"> 
      <div className='bg-gray-100 flex flex-col max-w-[400px] w-full mx-auto p-4'>
        <AiOutlineClose className='items-center justify-end ml-auto cursor-pointer mb-8 hover:bg-gray-300' />
      <div className="flex justify-center">
          <a className='flex'>
            <Image
              src={Logo}
              alt='/'
              width='30'
              height='30'
              className='cursor-pointer z-10 hover:scale-110 ease-in duration-300'
            />
          </a>
          <p className='pl-3 font-semibold text-xl'>Join Twitch today</p>
      </div>
        
        <p className='py-4 text-center'>Choose the account you want to sign in with.</p>
        <button
          className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600 rounded-full my-2'
          onClick={() => signIn()}
        >
          <FaGithub className='mr-2' />
          Sign in with<span className='font-bold pl-1'>Github</span>
        </button>
        <button
          className='flex items-center justify-center p-3 bg-blue-600 border border-blue-600 rounded-full my-2'
          onClick={() => signIn()}
        >
          <FaGoogle className='mr-2' />
          Sign in with<span className='font-bold pl-1'>Google</span>
        </button>
        <p className="text-purple-600 hover:text-gray-700 hover:bg-gray-400 font-bold mt-12">
              {variant === 'login' ? 'Dont have an account?' : 'Already a twitch user?'}
              <span onClick={toggleVariant} className="text-purple-600 ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? 'Sign up' : 'Login'}
              </span>
              .
            </p>
      </div>
   </div>
  );
};

export default Account;
