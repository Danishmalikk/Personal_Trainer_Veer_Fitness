import React from 'react'
import profileImage from '../static/photo_6206100629324154358_y.jpg'
const HomePage = () => {
  return (
    <div className='flex justify-evenly gap-2'>
        <div className='mt-40 '> 
            <h1 className='text-[#617E71] text-6xl'> Take Your Fitness </h1>
            <h1 className='text-6xl mt-4'> To The Next Level</h1>
            <h3 className='text-lg mt-10 ml-2'> PREMIUM ONLINE PERSONAL TRAINING IN CHANDIGARH</h3>
            <h3 className='text-lg ml-2'> WITH VEER FITNESS </h3>
            <button className='ml-2 mt-8 font-semibold px-4 p-2 rounded-full text-[#5c8975] border-2 border-black'> START HERE </button>
        </div>
        <div className='mt-10'>
            <img width={550} height={550} src={profileImage} alt=''/>
        </div>
    </div>
  )
}

export default HomePage