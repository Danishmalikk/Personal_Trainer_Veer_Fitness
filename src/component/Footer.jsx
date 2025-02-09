import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo_1.png'
import { Input } from '@mui/material'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black w-full'>
      <div className='container mx-auto bg-black px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row md:justify-between py-10 md:py-20 gap-8 md:gap-4 bg-black text-white'>
          {/* Logo Section */}
          <div className='flex justify-center md:justify-start'>
            <Link to={'/'}>
              <img src={Logo} className='w-[120px] md:w-[170px]' alt='Veer Fitness Logo' />
            </Link>
          </div>

          {/* Quick Links */}
          <nav className='flex flex-col gap-3 font-sans text-center md:text-left'>
            <Link className='hover:text-gray-300 transition-colors'>Programmes</Link>
            <Link className='hover:text-gray-300 transition-colors'>Blog</Link>
            <Link className='hover:text-gray-300 transition-colors'>Merchandise</Link>
            <Link className='hover:text-gray-300 transition-colors'>Contact</Link>
            <Link className='hover:text-gray-300 transition-colors'>Privacy Policy</Link>
          </nav>

          {/* Social Links */}
          <nav className='flex flex-col gap-4 font-sans text-center md:text-left'>
            <ul className='font-semibold text-lg'>Follow Us</ul>
            <Link 
              className='flex gap-2 items-center justify-center md:justify-start hover:text-gray-300 transition-colors'
              to={'https://www.instagram.com/veer_fitness_official_/'} 
              target='_blank'
            >
              Instagram <FaInstagram size={22} />
            </Link>
            <Link 
              className='flex gap-2 items-center justify-center md:justify-start hover:text-gray-300 transition-colors'
              to={'https://www.facebook.com/Veer.Rajpoot.lucky'} 
              target='_blank'
            >
              Facebook <FaFacebook size={22} />
            </Link>
            <Link 
              className='flex gap-2 items-center justify-center md:justify-start hover:text-gray-300 transition-colors'
              to={'https://www.youtube.com/@Lucky_fitness'} 
              target='_blank'
            >
              Youtube <FaYoutube size={26} />
            </Link>
            <Link className='flex justify-center md:justify-start hover:text-gray-300 transition-colors'>Twitter</Link>
          </nav>

          {/* Newsletter Section */}
          <div className='flex flex-col gap-4 text-center md:text-left max-w-sm mx-auto md:mx-0'>
            <h1 className='text-xl font-semibold'>Stay up to date!</h1>
            <button className='p-2 bg-white rounded-lg w-24 text-black hover:bg-gray-200 transition-colors mx-auto md:mx-0'>
              Sign Up
            </button>
            <h2 className='text-sm text-gray-400'>
              * I would like to receive communications about Veer Fitness products, services and events
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer