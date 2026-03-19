import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { FaRegHeart } from "react-icons/fa";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IoNotificationsOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';

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
    <header className="w-full">
      <div className="bg-white border-y border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

            <div className="flex-1">
              <p className="text-[14px] font-medium text-gray-700">
                Get up to 99% off new season!
                <span className="text-red-500 font-bold ml-1"> It's Officially SCAM!</span>
              </p>
            </div>

            <nav aria-label="Top Navigation">
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/help-center" className="text-[13px] font-medium text-gray-600 hover:text-black transition">Help Center</Link>
                </li>
                <li>
                  <Link to="/order-tracking" className="text-[13px] font-medium text-gray-600 hover:text-shop-light-green transition">Order Tracking</Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>

      <div className='header py-3'>
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">

          <div className="col1 w-[25%]">
            <Link to="/">
              <img src="../src/assets/images/logo1.png" alt="Shop Logo" className="h-20 w-auto object-contain" />
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center pl-7 ">
            
            <ul className='list-none flex items-center justify-end gap-3 w-full'>
              <li>
                <Link to="/login" className='link transition text-[15px] font-[500]'>Login </Link>
                <span className="mx-2">|</span>
                <Link to="/register" className='link transition text-[15px] font-[500]'> Register</Link>
              </li>

              <li>
                <Tooltip title="Notifications">
                <IconButton aria-label="notification">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoNotificationsOutline />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                <IconButton aria-label="heart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="My-Cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>

            </ul>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header