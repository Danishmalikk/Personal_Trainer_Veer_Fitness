import { ArrowForward } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Stripe = () => {
  return (
    <div className='bg-[#b18c7a] w-90 md:h-56 pb-5  md:p-20 p-2 md:text-center text-white text-5xl'>
        <Link to={'/quiz'} className='text-4xl md:text-6xl '> See which programme is right for you <ArrowForward sx={{fontSize : "2rem"}}/> </Link>
    </div>
  )
}

export default Stripe