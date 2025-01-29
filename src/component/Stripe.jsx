import { ArrowForward } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Stripe = () => {
  return (
    <div className='bg-[#b18c7a] w-90 h-56 p-20 text-center text-white text-5xl'>
        <Link to={'/quiz'}> See which programme is right for you <ArrowForward sx={{fontSize : "2rem"}}/> </Link>
    </div>
  )
}

export default Stripe