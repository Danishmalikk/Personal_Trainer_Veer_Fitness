import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/vr-logo.png'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sticky top-0 bg-white z-50 shadow-md'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center'>
          <Link to={'/'}className='h-15 w-[200px]'>
            {/* <span className='logo-text p-5 items-end'>Veer Fitnes</span> */}
            <img src={logo} className='logo-text '/>
          </Link>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray-800 focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
          <nav className={`flex-col md:flex-row md:flex gap-10 font-sans ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <Link to={'/quiz'}>Quiz</Link>
            <Link to={'/programmes'}>Programmes</Link>
            <Link to={'/method'}>Method</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/ourpractice'}>Our Practice</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/testimonials'}>Testimonal</Link>
            <Link to={'/contact'}>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;