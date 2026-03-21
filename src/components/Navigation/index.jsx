import React, { useState } from 'react';
import { Button } from '@mui/material';
import { RiMenu2Fill } from 'react-icons/ri';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from "react-icons/fa";
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
    const [isOpenPanel, setIsOpenPanel] = useState(false);

    return (
        <>
            <nav className='py-2 border-b border-gray-200'>
                <div className='container mx-auto px-4 flex items-center justify-between'>

                    <div className='col_1 w-[20%]'>
                        <Button className='!text-black gap-2 font-semibold capitalize' onClick={() => setIsOpenPanel(true)}>
                            <RiMenu2Fill className='text-[18px]' />
                            Shop By Categories
                            <LiaAngleDownSolid className='text-[14px] ml-auto font-bold' />
                        </Button>
                    </div>

                    <div className='col_2 flex-1'>
                        <ul className='flex items-center gap-5 justify-between'>
                            <li>
                                <Link to="/" className='text-[14px] font-[500]'>
                                    <Button className='!text-black hover:!text-shop-light-green transition-colors capitalize'>Home</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="category/Fiction" className='text-[14px] font-[500]'>
                                    <Button className='!text-black hover:!text-shop-light-green transition-colors capitalize'>Fiction</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="category/Non-Fiction" className='text-[14px] font-[500]'>
                                    <Button className='!text-black hover:!text-shop-light-green transition-colors capitalize'>Non-Fiction</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="category/Children%20Book" className='text-[14px] font-[500]'>
                                    <Button className='!text-black hover:!text-shop-light-green transition-colors capitalize'>Children's Books</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="category/Speciality" className='text-[14px] font-[500]'>
                                    <Button className='!text-black hover:!text-shop-light-green transition-colors capitalize'>Specialty</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="category/Lifestyle" className='text-[14px] font-[500]'>
                                    <Button className='!text-black hover:!text-shop-light-green transition-colors capitalize'>Lifestyle</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="category/Education" className='text-[14px] font-[500]'>
                                    <Button className='!text-black hover:!text-shop-light-green transition-colors capitalize'>Education</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col_3 w-[15%] flex justify-end items-center'>
                        <div className='flex items-center gap-3 text-right'>
                            <FaPaperPlane className='text-[18px] text-gray-500' />
                            <p className='font-medium text-[14px] leading-tight text-gray-600'>
                                Free Delivery in <br />
                                <span className='font-bold text-black'>Every Universe</span>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>

            <CategoryPanel isOpenPanel={isOpenPanel} setIsOpenPanel={setIsOpenPanel} />
        </>
    );
};

export default Navigation;