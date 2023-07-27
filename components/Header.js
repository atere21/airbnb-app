import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";


const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3
    bg-white shadow-md py-5 px-5 p-5 md:px-10 '>
        
      {/* left */}
      <div className='relative flex items-center h-10
      cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3' 
          layout="fill"
          objectFit='contain' 
          objectPosition='left'
        />
      </div>

      {/* search */}
      <div className="flex items-center border-2 rounded-full py-2 px-2">
        <input 
          type='text' 
          placeholder='Start your search'
          className="outline-none flex-grow ml-2 bg-transparent text-sm text-gray-600
          placeholder-gray-400
          md:shadow-sm"
        />
        <AiOutlineSearch className=" hidden md:inline-flex h-8 sm:mx-3 bg-red-400 text-white cursor-pointer
        rounded-full w-8 p-2 mx-auto md:mx-2 " />
      </div>

      {/* right */}
      <div className='flex items-center justify-end text-gray-500 space-x-4'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <FiGlobe className='h-6 cursor-pointer'/>
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
            <BiMenu className='h-6'/>
            <RiAccountCircleFill className='h-6'/>
        </div>
      </div>
    </header>
  )
}

export default Header;
