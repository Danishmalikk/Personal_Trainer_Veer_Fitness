import React from 'react'

export const OurPractice = () => {
  return (
    <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-gray-900">Our Gym Philosophy</h2>
      <p class="mt-4 text-lg text-gray-600">Experience fitness with a purpose, guided by expert trainers and a supportive community.</p>
  
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
       
        <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <div class="flex justify-center items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.25 6.75l-1.5 1.5 4.5 4.5-4.5 4.5 1.5 1.5 6-6-6-6z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800">Personalized Training</h3>
          <p class="mt-4 text-gray-600">Every fitness journey is different. We customize training programs based on your personal goals, helping you achieve success step by step.</p>
        </div>
  
       
        <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <div class="flex justify-center items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800">Expert Guidance</h3>
          <p class="mt-4 text-gray-600">Our certified trainers provide expert advice and guidance throughout your fitness journey, ensuring you train safely and effectively.</p>
        </div>
  
      
        <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <div class="flex justify-center items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a3 3 0 013-3h12a3 3 0 013 3v16a3 3 0 01-3 3H6a3 3 0 01-3-3V4z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-gray-800">Community Support</h3>
          <p class="mt-4 text-gray-600">Being part of our gym means joining a community that supports each other in every step of their fitness journey, celebrating achievements together.</p>
        </div>
      </div>
  
      <div class="mt-12 text-center">
        <a href="#contact" class="inline-block px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition duration-300 transform hover:scale-105">Join Us Now</a>
      </div>
    </div>
  </div>
  
  )
}
