import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo_1.png'
import { Input } from '@mui/material'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black'>
 
        <div className='container m-auto bg-black'>
       <div className='flex justify-between py-20 px-15 mt-auto bg-black text-white'>
        <Link to={'/'}> 
             <img src={Logo} width={170} height={150} alt='' />
        </Link>
        <nav className='flex flex-col gap-2 font-sans'> 
            <Link>Programmes</Link>
            <Link>Blog</Link>
            <Link>Merchandise </Link>
            <Link>Contact</Link>
            <Link>Privacy Policy</Link>
        </nav>
        <nav className='flex flex-col gap-4 font-sans'> 
            <ul>Follow Us</ul>
            <Link className='flex gap-2 items-center'  to={'https://www.instagram.com/veer_fitness_official_/'} target='_blank'>Instagram <FaInstagram size={22} /></Link>
            <Link className='flex gap-2 items-center' to={'https://www.facebook.com/Veer.Rajpoot.lucky'} target='_blank' >Facebook <FaFacebook size={22} /></Link>
            <Link className='flex gap-2' to={'https://www.youtube.com/@Lucky_fitness'} target='_blank'>Youtube <FaYoutube size={26} /></Link>
            <Link>Twitter</Link>
        </nav>
        <div className='flex flex-col gap-4'> 
            <h1> Stay up to date !</h1> 
            <button className='p-2 bg-white rounded-lg w-24 text-black'> Sign Up </button>
            <h2> * I would like to receive communications about Veer Fitness products,services and events</h2>
        </div>
    </div>
    </div>

    </div>
   
   
  )
}

export default Footer