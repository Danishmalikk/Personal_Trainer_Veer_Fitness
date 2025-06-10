import React, { useState } from 'react'
// import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    weight: '',
    height: '',
    sleepCycle: '',
    wakeUpTime: '',
    medicalHistory: '',
    goal: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // await axios.post('/api/send-email', formData)
      alert('Your information has been sent successfully!')
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="container p-3 py-16 md:py-20 mx-auto" id="contact">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-6">
          Ready to start your fitness journey? Contact us today for personalized 
          training programs and expert guidance. Whether you're looking to transform 
          your physique or improve your overall health, we're here to help you 
          achieve your goals.
        </p>
        <p className="text-gray-600">
          Join the Veer Fitness community and experience the difference of 
          professional training with proven results. Schedule your consultation 
          now and take the first step towards a stronger, healthier you.
        </p>
        <p className="text-gray-600 mb-6">
          Fill out the form below to begin your fitness transformation journey. We’ll get back to you with a personalized program!
        </p>
      </div>
      <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" onChange={handleChange} value={formData.name} className="rounded border border-black px-4 py-3 text-black" placeholder="Name" required />
          <input name="age" onChange={handleChange} value={formData.age} type="number" className="rounded border border-black px-4 py-3 text-black" placeholder="Age" required />
          <select name="sex" onChange={handleChange} value={formData.sex} className="rounded border border-black px-4 py-3 text-black" required>
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input name="weight" onChange={handleChange} value={formData.weight} className="rounded border border-black px-4 py-3 text-black" placeholder="Weight (kg)" required />
          <input name="height" onChange={handleChange} value={formData.height} className="rounded border border-black px-4 py-3 text-black" placeholder="Height (cm)" required />
          <input name="sleepCycle" onChange={handleChange} value={formData.sleepCycle} className="rounded border border-black px-4 py-3 text-black" placeholder="Sleep Cycle (e.g., 11PM - 7AM)" required />
          <input name="wakeUpTime" onChange={handleChange} value={formData.wakeUpTime} className="rounded border border-black px-4 py-3 text-black" placeholder="Wake Up Time" required />
        </div>
        <textarea name="medicalHistory" onChange={handleChange} value={formData.medicalHistory} className="mt-6 w-full rounded border border-black px-4 py-3 text-black" placeholder="Medical History" rows="4" />
        <textarea name="goal" onChange={handleChange} value={formData.goal} className="mt-6 w-full rounded border border-black px-4 py-3 text-black" placeholder="Your Transformation Goal" rows="4" required />
        <button type="submit" className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-bold uppercase text-white hover:bg-gray-800">
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
