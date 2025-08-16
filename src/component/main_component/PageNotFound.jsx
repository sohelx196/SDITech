import React from 'react'
import { Link } from 'react-router-dom'

import NotFoundImg from '../../assets/logos/NotFound.png';

export default function PageNotFound() {
    
  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center text-center">
        
        {/* Small image at top */}
        <img 
          src={NotFoundImg} 
          alt="Page Not Found" 
          className="w-48 h-auto mb-4" 
        />

        <p className="font-saira text-xl sm:text-2xl text-blue-400">
          Oops! <span className='text-red-600'>Page not found.</span> 
        </p>

        <Link to="/">
          <button className="mt-6 cabin group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-2 lg:px-5 lg:py-3 rounded-md transition-colors duration-300">
            Go to Home
          </button>
        </Link>

      </div>   
    </>
  )
}
