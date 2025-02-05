import React from 'react';

const testimonials = [
  {
    image: "https://via.placeholder.com/80",
    quote: "“Best gym experience ever! The community is welcoming, and the equipment is always in perfect condition. Highly recommend!”",
    name: "Michael Brown",
    memberSince: "Member since 2021"
  },
  {
    image: "https://via.placeholder.com/80",
    quote: "“The trainers are amazing and really know how to push you to your limits. I've seen great results!”",
    name: "Sarah Johnson",
    memberSince: "Member since 2019"
  },
  {
    image: "https://via.placeholder.com/80",
    quote: "“A fantastic place to work out. The atmosphere is motivating and the staff is very friendly.”",
    name: "David Lee",
    memberSince: "Member since 2020"
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary hover:text-white transition duration-300">
            <div className="flex justify-center mb-4">
              <img className="w-20 h-20 rounded-full object-cover" src={testimonial.image} alt="Customer Image" />
            </div>
            <blockquote className="text-center">
              <p className="text-xl text-gray-800 italic">{testimonial.quote}</p>
            </blockquote>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.memberSince}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;