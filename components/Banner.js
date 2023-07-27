import React from 'react';
import Image from 'next/image'; // Correctly import the next/image component
import airbnbImage from '../assets/airbnbcover.avif'; // Use a different variable name for the imported image

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[6oopx 2xl:h-[700px]] '>
      <Image src={airbnbImage} layout="fill" 

      objectFit='cover'/>
      <div className='absolute top-1/2 w-full text-center '>
        <p className='text-sm sm:text-lg text-white'>Not sure where to go? </p>
        
        <button className='text-purple-500 bg-white px-10 py-4
        rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90
        transition duration-150'>
         I'm flexible
         </button>
      </div>
    </div>
  );
};

export default Banner;
