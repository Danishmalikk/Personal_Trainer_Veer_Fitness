import React from 'react';
import { FaDumbbell } from "react-icons/fa6";

const programs = [
  {
    title: "Basic Fitness",
    description: "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
    alt: "First One",
    isIcon: true,
    icon: <FaDumbbell className="w-[50px] h-[25px] md:w-[70px] md:h-[30px] text-xxl text-white transform rotate-45" />,
  },
  {
    title: "New Gym Training",
    description: "If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.",
    icon: <FaDumbbell  className="w-[70px] h-[30px]  text-xxl text-white transform rotate-45"  />,
    alt: "Second One",
    isIcon: true,
  },
  {
    title: "Basic Muscle Course",
    description: "Credit goes to Pexels for images and video background used in this HTML template.",
    alt: "Third One",
    isIcon: true,
    icon: <FaDumbbell  className="w-[70px] h-[30px]  text-xxl text-white transform rotate-45"  />,
  },
  {
    title: "Advanced Muscle Course",
    description: "Browse through Digital Marketing or Corporate templates.",
    alt: "Fourth One",
    isIcon: true,
    icon: <FaDumbbell  className="w-[70px] h-[30px]  text-xxl text-white transform rotate-45"  />,
    
  },
  {
    title: "Yoga Training",
    description: "This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.",
    alt: "Fifth One",
    isIcon: true,
    icon: <FaDumbbell  className="w-[70px] h-[30px]  text-xxl text-white transform rotate-45"  />,
   
  },
  {
    title: "Body Building Course",
    description: "Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi.",
    alt: "Sixth One",
    isIcon: true,
    icon: <FaDumbbell  className="w-[70px] h-[30px]  text-xxl text-white transform rotate-45"  />,
  },
];

const Programmes = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Choose Program
          </h2>
          <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-base px-4">
          Transform your body and mind with our specialized fitness programs. 
            Whether you're just starting out or looking to push your limits, 
            our expert trainers will guide you every step of the way.
          </p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 md:p-6 
                bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 
                transform hover:scale-[1.02]"
            >
              {/* Icon/Image Container */}
              {program.isIcon ? (
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary flex justify-center 
                  items-center p-4 rounded-lg shrink-0">
                  {program.icon}
                </div>
              ) : (
                <img 
                  src={program.icon} 
                  alt={program.alt} 
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg" 
                />
              )}

              {/* Content Container */}
              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  {program.description}
                </p>
                <a 
                  href="#" 
                  className="inline-block text-blue-600 font-medium text-sm md:text-base 
                    hover:text-blue-700 transition-colors"
                >
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programmes;