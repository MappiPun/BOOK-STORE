import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search' // Ensure path is correct

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

          <div className="col3 w-[35%]">

          </div>
          
        </div>
      </div>
    </header>
  )
}

export default Header