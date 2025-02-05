import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../../assets/images/team1.png';
import image2 from '../../assets/images/team2.png';
import image3 from '../../assets/images/team3.png';

gsap.registerPlugin(ScrollTrigger);

const trainings = [
  {
    title: "Body Building",
    description: "You’ll look at graphs and charts in Task One, how to approach the task.",
    image: image1,
    alt: "Body Building",
    link: "services.html",
  },
  {
    title: "Muscle Gain",
    description: "You’ll look at graphs and charts in Task One, how to approach the task.",
    image: image2,
    alt: "Muscle Gain",
    link: "services.html",
  },
  {
    title: "Weight Loss",
    description: "You’ll look at graphs and charts in Task One, how to approach the task.",
    image: image3,
    alt: "Weight Loss",
    link: "services.html",
  },
  // Add more training items as needed
];

const Traning = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
      }}
    );
  }, []);

  return (
    <div>
      <section className="py-16 bg-gray-100 offer-container bg-black">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 ref={headingRef} className="text-3xl font-bold text-gray-900 ">What I Offer</h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
            {trainings.map((training, index) => (
              <div key={index} className="text-center sub-info  transition-transform duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <img src={training.image} alt={training.alt} className="object-cover h-full w-full" />
                </div>
                <h5 className="text-xl font-semibold text-gray-800">
                  <a href={training.link} className="hover:text-yellow-500 transition duration-300">{training.title}</a>
                </h5>
                <p className="text-gray-600 mt-2 text-white">
                  {training.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Traning;