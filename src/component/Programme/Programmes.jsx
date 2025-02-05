import React from 'react';
import { FaDumbbell } from "react-icons/fa6";

const programs = [
  {
    title: "Basic Fitness",
    description: "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
    alt: "First One",
    isIcon: true,
    icon: <FaDumbbell className="w-[70px] h-[30px]  text-xxl text-white transform rotate-45" />,
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
    <div>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Choose <em className="text-blue-600">Program</em></h2>
          <img src="assets/images/line-dec.png" alt="waves" className="mx-auto mt-4" />
          <p className="text-gray-600 mt-4">Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="flex items-center space-x-4 p-6 borderbg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              {program.isIcon ? (
                <div className="w-20 h-20 bg-primary flex justify-center items-center p-5">{program.icon}</div>
              ) : (
                <img src={program.icon} alt={program.alt} className="w-16 h-16" />
              )}
              <div>
                <h4 className="text-xl font-semibold">{program.title}</h4>
                <p className="text-gray-600">{program.description}</p>
                <a href="#" className="text-blue-600 font-medium">Discover More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programmes;