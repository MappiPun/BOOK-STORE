import React from 'react';
import { Link } from 'react-router-dom';

// 1. Clerk Imports
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

// Material UI Imports
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// React Icons
import { FaRegHeart } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

// Local Components & Assets
import Search from './search';
import Navigation from '../Navigation/index';
import LogoImg from '../../assets/images/logo1.png';

// Custom Styled Badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      {/* --- TOP STRIP --- */}
      <div className="top-strip bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            <div className="flex-1">
              <p className="text-[14px] font-semibold text-gray-700">
                Get up to 99% off new season!
                <span className="text-red-500 font-bold ml-1"> It's Officially SCAM!</span>
              </p>
            </div>

            <nav aria-label="Top Navigation">
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/help-center" className="text-[13px] font-semibold text-gray-600 hover:text-black transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/order-tracking" className="text-[13px] font-semibold text-gray-600 hover:text-[#00c853] transition-colors">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <div className='header py-3 border-b border-gray-200'>
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src={LogoImg} alt="Shop Logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="col2 w-[45%]">
            <Search />
          </div>

          {/* User Actions */}
          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className='list-none flex items-center justify-end gap-3 w-full'>
              
              {/* --- CLERK AUTH LOGIC --- */}
              <li className="flex items-center">
                
                {/* Visible ONLY when user is NOT logged in */}
                <SignedOut>
                  <Link to="/login" className='text-[15px] font-medium text-gray-700 hover:text-[#00c853] transition-colors'>Login</Link>
                  <span className="mx-2 text-gray-300">|</span>
                  <Link to="/register" className='text-[15px] font-medium text-gray-700 hover:text-[#00c853] transition-colors'>Register</Link>
                </SignedOut>

                {/* Visible ONLY when user IS logged in (Profile Pic & Logout) */}
                <SignedIn>
                  <div className="ml-2 mr-2 flex items-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>

              </li>

              <li>
                <Tooltip title="Notifications">
                  <IconButton aria-label="notification">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoNotificationsOutline className="text-gray-700" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="heart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart className="text-gray-700" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* LINKED CART ICON */}
              <li>
                <Tooltip title="My Cart">
                  <Link to="/cart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon className="text-gray-700" />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </Tooltip>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* --- BOTTOM NAVIGATION --- */}
      <Navigation />

    </header>
  );
};

export default Header;