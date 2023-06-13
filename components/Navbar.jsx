import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import Logo from '../public/assets/logo.png';
import { Menu, Transition } from '@headlessui/react';
import {CgCrown} from 'react-icons/cg';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSession, signIn, signOut } from 'next-auth/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { data: session } = useSession();

  // console.log(session);

  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-neutral-100 shadow-gray-400 shadow-sm mb-[2px] z-10'>
      {/* Left Side */}
      <div className='flex grow items-center justify-start'>
        <Link className='flex' href='/'>
          
            <Image
              src={Logo}
              alt='/'
              width='30'
              height='30'
              className='cursor-pointer z-10 hover:scale-110 ease-in duration-300'
            />
          
        </Link>
        <p className='p-4 font-bold cursor-pointer hover:text-purple-800 '>Following</p>
        <p className='p-4 font-bold cursor-pointer hover:text-purple-800 '>Browse</p>
        <div className='p-4'>
          <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
              scroll
            >
              <Menu.Items scroll className='origin-top-right absolute left-0 mt-1 w-56 h-screen  rounded-md shadow-lg bg-neutral-100 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm font-semibold cursor-pointer px-4 py-1'>GENERAL</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>About</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Advertisers</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Blog</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Developers</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Download Apps</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Gift Card</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>IGDB</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Jobs</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Loot Cave - Merch store</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Music on Twitch</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Partners</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Press</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Turbo</p>
                </Menu.Item>
                <hr className='text-gray-900 my-2 mx-4' />
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer font-semibold px-4 py-1'>HELP & LEGAL</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Accessibility Statement</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Ad Choices</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Community Guidlines</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Cookie Policy</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='text-zinc-900 hover:bg-gray-400 rounded-md text-sm cursor-pointer px-4 py-1'>Help</p>
                </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-400 px-2 rounded-md text-zinc-900'
                            : 'text-zinc-900',
                          'block px-4 py-1 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-400 px-2 rounded-md text-zinc-900'
                            : 'text-zinc-900',
                          'block px-4 py-1 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-400 px-2 rounded-md text-zinc-900'
                            : 'text-zinc-900',
                          'block px-4 py-1 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* Middle */}
      <div className='hidden md:flex grow-[2] items-center justify-center'>
        <div className='bg-neutral-100 text-zinc-800 border-2 border-zinc-800 hover:border-4 hover:border-purple-700 flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-l-md rounded-r-sm'>
          <div>
            <input
              type='text'
              className='bg-transparent border-none text-black focus:outline-none'
              placeholder='Search'
            />
          </div>
          <div >
            <BsSearch />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='hidden md:flex grow items-center justify-end'>
        {session ? (
          <div className='flex items-center'>
            <Link href='/account'>
              <div>
                <p className='pr-4 cursor-pointer'>
                  Welcome, {session.user.name}
                </p>
              </div>
            </Link>
            <Menu as='div' className='relative text-left'>
              <div className='flex'>
                <Menu.Button>
                  <Image
                    src={session.user.image}
                    width='45'
                    height='45'
                    className='rounded-full'
                    alt='/'
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <Link href='/account'>Account</Link>
                        </p>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className='flex items-center'>
            <div className="relative inline-flex w-fit">
                <div
                  className="absolute bottom-auto left-auto right-6 top-4 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-600 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                  99
                </div>
               <CgCrown size={50} className='pr-6 cursor-pointer rounded-full' />
              </div>
            <Link href='/account'>
             <button className='px-4 py-[6px] rounded-lg text-neutral-900 font-bold bg-gray-300 hover:bg-gray-400 mr-2'>
                Log in
              </button>
             </Link>
            <Link href='/account'>
              <button className='px-4 py-[6px] rounded-lg text-neutral-50 font-bold bg-purple-600 mr-2'>
                Sign up
              </button>
            </Link>
            <BsPerson className='cursor-pointer' size={25} />
            
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-neutral-100 flex justify-center items-center ease-in duration-300'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-neutral-100 flex justify-center items-center ease-in duration-300'
        }
      >
        <ul className='text-center'>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#live'>Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#categories'>Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/account'>account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
