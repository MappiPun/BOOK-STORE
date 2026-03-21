import React from 'react';
import { Link } from 'react-router-dom';

// 1. Clerk Imports for Auth logic
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

// 2. Material UI Imports 
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// 3. React Icons
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

// 4. Local Components & Assets
import Search from './search';
import Navigation from '../Navigation/index';
import LogoImg from '../../assets/images/logo1.png';

// 5. Import Context Hooks
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext'; // <-- ADDED CART HOOK

// Custom Styled Badge for the icons
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  // Pull live data from Contexts
  const { wishlist } = useWishlist();
  const { cartCount } = useCart(); // <-- PULL CART COUNT

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* --- TOP STRIP: Promotions & Meta Nav --- */}
      <div className="top-strip bg-white border-b border-gray-100 py-2">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-gray-700">
                Get up to 99% off new season!
                <span className="text-red-500 font-bold ml-1"> It's Officially SCAM!</span>
              </p>
            </div>

            <nav aria-label="Top Navigation">
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/help-center" className="text-[12px] font-bold text-gray-500 hover:text-black transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/order-tracking" className="text-[12px] font-bold text-gray-500 hover:text-[#00c853] transition-colors">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER: Logo, Search, Actions --- */}
      <div className='header py-4 border-b border-gray-100'>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between gap-8">

          {/* 1. Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={LogoImg} alt="Beetroot Logo" className="h-12 md:h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* 2. Search Bar Component */}
          <div className="flex-grow max-w-2xl hidden md:block">
            <Search />
          </div>

          {/* 3. User Actions */}
          <div className="flex items-center justify-end gap-2 md:gap-4">
            <ul className='list-none flex items-center gap-1 md:gap-2'>
              
              {/* AUTHENTICATION SECTION */}
              <li className="flex items-center mr-2">
                <SignedOut>
                  <div className="flex items-center gap-2 text-[14px] font-bold text-gray-700">
                    <Link to="/login" className='hover:text-[#00c853] transition-colors'>Login</Link>
                    <span className="text-gray-300">|</span>
                    <Link to="/register" className='hover:text-[#00c853] transition-colors'>Register</Link>
                  </div>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center gap-4">
                    {/* Direct link to Dashboard for logged-in users */}
                    <Link 
                      to="/my-account" 
                      className="hidden lg:flex items-center gap-2 text-[14px] font-bold text-gray-700 hover:text-[#00c853] transition-colors"
                    >
                      <FaUserCircle size={18} />
                      My Account
                    </Link>
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </li>

              {/* ICON BUTTONS */}
              <li className="hidden sm:block">
                <Tooltip title="Notifications">
                  <IconButton>
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoNotificationsOutline className="text-gray-600" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton component={Link} to="/wishlist">
                    {/* --- DYNAMIC WISHLIST BADGE COUNT --- */}
                    <StyledBadge badgeContent={wishlist?.length || 0} color="secondary">
                      <FaRegHeart size={20} className="text-gray-600" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="My Cart">
                  <IconButton component={Link} to="/cart">
                    {/* --- DYNAMIC CART BADGE COUNT --- */}
                    <StyledBadge badgeContent={cartCount || 0} color="secondary">
                      <ShoppingCartIcon className="text-gray-600" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION: Categories --- */}
      <Navigation />
    </header>
  );
};

export default Header;