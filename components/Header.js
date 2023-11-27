import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { BsPeople } from "react-icons/bs"
import { RiAccountCircleFill } from "react-icons/ri";
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1) 
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  

  const resetInput = () => {
    setSearchInput("");
  }


  const SelectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection'
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 p-5 md:px-10 '>
      {/* left */}
      <div onClick={() => router.push("/")}
      className='relative flex items-center h-10 cursor-pointer my-auto'>
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value) }
          type='text'
          placeholder='Start your search'
          className="outline-none flex-grow ml-2 bg-transparent text-sm
           text-gray-600 placeholder-gray-400 md:shadow-sm"
        />
        
        <AiOutlineSearch className="hidden md:inline-flex h-8 sm:mx-3 bg-red-400 text-white cursor-pointer
         rounded-full w-8 p-2 mx-auto md:mx-2" />
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
      {searchInput &&
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker 
            ranges={[SelectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

            <BsPeople className='h-5'/>
            <input
             value={noOfGuests}
             onChange={(e) => setNoOfGuests(e.target.value) }
             min={1}
            type='number'
             className='w-12 pl-2 text-lg outline-none text-red-400'
             />
          </div>

          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={searchInput} className='flex-grow text-red-400'>Search</button>
          </div>
        </div>
      }
    </header>
  );
}

export default Header;
