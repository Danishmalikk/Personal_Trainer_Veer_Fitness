import React from 'react'
import about from '../../static/photo_6206100629324154358_y.jpg'

const Method = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Content */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
      <p className="text-gray-700">
        You’ll look at graphs and charts in Task One, how to approach the task and the language needed 
        for a successful answer. You’ll examine Task Two questions and learn how to plan, write and 
        check academic essays.
      </p>
      <p className="text-gray-700">
        Task One, how to approach the task and the language needed for a successful answer. You’ll 
        examine Task Two questions and learn how to plan, write and check academic essays.
      </p>
      <a href="courses.html" className="inline-block px-6 py-2 border border-gray-900 text-gray-900 font-semibold rounded-lg transition duration-300 hover:bg-gray-900 hover:text-white">
        My Courses
      </a>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2">
      <img src={about} alt="About Me" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
    </div>

  </div>
</section>

    </div>
  )
}

export default Method