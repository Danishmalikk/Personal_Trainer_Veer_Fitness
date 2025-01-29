import React from 'react'
import Logo from '../static/logo_1.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex flex-row justify-around items-center mt-0'>
        <Link to={'/'}> 
             <img src={Logo} width={170} height={150} alt='' />
        </Link>
        <nav className='flex gap-10 -mt-7 font-sans'> 
            <Link to={'/quiz'}>Quiz</Link>
            <Link to={'/programmes'}>Programmes</Link>
            <Link to={'/method'}>Method</Link>
            <Link to={'/about'}>About </Link>
            <Link to={'/ourpractice'}>Our Practice</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/testimonials'}>Testimonal</Link>
            <Link to={'/contact'}>Contact</Link>
        </nav>
    </div>
  )
}

export default Header