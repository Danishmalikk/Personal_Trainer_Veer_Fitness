import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../../assets/images/newfolder/icons8-personal-trainer-100.png';
import image2 from '../../assets/images/newfolder/icons8-people-100.png';
import image3 from '../../assets/images/newfolder/icons8-meal-100.png';
import image4 from '../../assets/images/newfolder/icons8-yoga-100.png';
import image5 from '../../assets/images/newfolder/icons8-video-conference-100.png';
import image6 from '../../assets/images/newfolder/icons8-test-results-100.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Personal Training",
    description: "One-on-one training sessions tailored to your fitness goals.",
    iconBlack: image1,
    iconWhite: image1,
  },
  {
    title: "Group Classes",
    description: "Fun and engaging group classes for all fitness levels.",
    iconBlack: image2,
    iconWhite: image2,
  },
  {
    title: "Nutrition Plans",
    description: "Personalized nutrition plans to complement your training.",
    iconBlack: image3,
    iconWhite: image3,
  },
  {
    title: "Yoga Sessions",
    description: "Relaxing and rejuvenating yoga sessions for all levels.",
    iconBlack: image4,
    iconWhite: image4,
  },
  {
    title: "Online Coaching",
    description: "Virtual coaching sessions to guide you through your fitness journey.",
    iconBlack: image5,
    iconWhite: image5,
  },
  {
    title: "Fitness Assessments",
    description: "Comprehensive fitness assessments to track your progress.",
    iconBlack: image6,
    iconWhite: image6,
  },
];

function Services() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    serviceRefs.current.forEach((serviceRef, index) => {
      gsap.fromTo(serviceRef, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
          trigger: serviceRef,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true
        }}
      );
    });
  }, []);

  return (
    <div>
      <div className="container py-16 md:py-20 mx-auto" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-white sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => serviceRefs.current[index] = el} 
              className="group rounded px-8 py-12 shadow bg-white hover:bg-primary"
            >
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img src={service.iconWhite} alt={`${service.title} icon`} />
                </div>
                <div className="block group-hover:hidden">
                  <img src={service.iconBlack} alt={`${service.title} icon`} />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  {service.title}
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;