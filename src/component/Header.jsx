import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/vr-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    // { path: '/quiz', label: 'Quiz' },
    { path: '/programmes', label: 'Programmes' },
    // { path: '/method', label: 'Method' },
    { path: '/about', label: 'About' },
    { path: '/ourpractice', label: 'Our Practice' },
    { path: '/blog', label: 'Blog' },
    { path: '/testimonials', label: 'Testimonial' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className='sticky top-0 bg-white z-50 shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          <Link to={'/'} className='h-15 w-[200px] relative md:z-50'>
            <img src={logo} alt="Veer Fitness" className='logo-text' />
          </Link>
          <button 
            onClick={toggleMenu} 
            className='md:hidden relative z-50 p-2 focus:outline-none'
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            <div className='w-6 flex flex-col gap-1.5'>
              <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
          <nav className='hidden md:flex gap-10 font-sans'>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-primary transition-colors ${
                  location.pathname === item.path ? 'text-primary font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div 
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={toggleMenu}
          />
          <div
            className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex flex-col h-full pt-24 pb-6 px-6'>
              <nav className='flex-1'>
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-4 text-lg border-b border-gray-100 ${
                      location.pathname === item.path 
                        ? 'text-primary font-medium' 
                        : 'text-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className='pt-6'>
                <p className='text-sm text-center text-gray-500 mt-4'>
                  © 2024 Veer Fitness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;