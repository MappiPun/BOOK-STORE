import React from 'react'
import '../Header/style.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-full h-[50px] bg-shop-light-pink rounded-[5px] items-center relative px-4'>
        <input 
          placeholder='Search for products...' 
          className='container flex w-[100%] h-full focus:outline-none bg-transparent text-[15px]'
        />

        <Button className='!absolute top-[8px] right-[5px] z-50 !w-[35px] !min-w[35px] h-[35px] !rounded-full !text-black'>
            <IoSearch className='text-[#2a2a2a] text-[22px]'/></Button>

    </div>
  )
}

export default Search