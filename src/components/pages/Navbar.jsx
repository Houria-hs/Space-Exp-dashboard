
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";



import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
    <nav className="bg-[#0a0f1c] shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <span className='text-blue-500'> Space </span> explorer dashboard
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex  space-x-8 ml-auto">
            <Link className="hover:text-indigo-400" to="/">Home</Link> 
            <Link className="hover:text-indigo-400" to="/News">Space News</Link> 
            <Link className="hover:text-indigo-400" to="/SpaceWeather">Mars Weather</Link>
            <Link className="hover:text-indigo-400" to="/WeightCalculator">Space Calculator</Link>
          </div>



        <div>
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-6 mt-6 md:hidden  absolute top-10 left-0 w-full shadow-lg z-40  bg-[#0a0f1c] p-6 rounded-lg">
            <Link className="hover:text-indigo-400" to="/">Home</Link> 
            <Link className="hover:text-indigo-400" to="/News">Space News</Link> 
            <Link className="hover:text-indigo-400" to="/SpaceWeather">Space Weather</Link>
            <Link className="hover:text-indigo-400" to="/WeightCalculator">Space Calculator</Link>
        </div>
      )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar