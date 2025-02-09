import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import profileImage from '../static/photo_6206100629324154358_y.jpg';

const HomePage = () => {
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRefs.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.8, x: -100 }, { opacity: 1, scale: 1, x: 0, duration: 1, delay: 1 });
  }, []);

  return (
    <div className='flex justify-evenly gap-2 md:flex-row flex-col-reverse sm:items-center  p-2 md:p-6'>
      <div className='md:mt-40 sm:mt-2 mb-4'>

        <h1 ref={el => textRefs.current[0] = el} className='text-2xl md:text-6xl text-white'> Take Your Fitness </h1>
        <h1 ref={el => textRefs.current[1] = el} className='text-2xl md:text-6xl  md:mt-4 text-white'> To The Next Level</h1>

        <h3 ref={el => textRefs.current[2] = el} className='text-lg md:mt-10 mt-4 md:ml-2 text-white'> PREMIUM ONLINE PERSONAL TRAINING IN CHANDIGARH</h3>
        <h3 ref={el => textRefs.current[3] = el} className='text-lg md:ml-2 text-white'> WITH VEER FITNESS </h3>
        <button ref={el => textRefs.current[4] = el} className='md:ml-2 mt-8 font-semibold px-4 p-2 rounded-full text-white border-2 border-primary hover:bg-secondary hover:text-white'> START HERE </button>
      </div>
      <div className='md:mt-0 mt-4'>
        <img ref={imageRef} width={550} height={550} src={profileImage} alt=''/>
      </div>
    </div>
  );
}

export default HomePage;