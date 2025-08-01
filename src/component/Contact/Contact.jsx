import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [useSameAsPhone, setUseSameAsPhone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

   
    if (name === 'phone' && useSameAsPhone) {
      setFormData(prev => ({
        ...prev,
        whatsapp: value
      }));
    }
  };

  const handleSameAsPhoneChange = (e) => {
    setUseSameAsPhone(e.target.checked);
    if (e.target.checked) {
      setFormData(prev => ({
        ...prev,
        whatsapp: prev.phone
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Get API URL based on environment
    // const apiUrl = 'https://veerfitness.com/contact'; // Force production URL for testing
    const apiUrl = process.env.NODE_ENV === 'production' 
      ? (process.env.REACT_APP_PRODUCTION_API_URL || 'https://veerfitness.com') + '/contact'
      : (process.env.REACT_APP_API_URL || 'http://localhost:5001/api') + '/contact';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', whatsapp: '', message: '' });
        setUseSameAsPhone(false);
      } else {
        setSubmitMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
        <div> 
        <div class="container p-3 py-16 md:py-20 mx-auto" id="contact">
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
  </div>
  
  {submitMessage && (
    <div className={`mx-auto w-full pt-10 sm:w-3/4 mb-4 p-4 rounded-lg ${
      submitMessage.includes('successfully') 
        ? 'bg-green-100 text-green-700 border border-green-300' 
        : 'bg-red-100 text-red-700 border border-red-300'
    }`}>
      {submitMessage}
    </div>
  )}

 <form 
  className="mx-auto w-full pt-10 sm:w-3/4"
  onSubmit={handleSubmit}
>
  <div className="flex flex-col md:flex-row">
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="mr-3 w-full rounded border border-grey-70 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
      placeholder="Full Name"
      type="text"
      required
      disabled={isSubmitting}
    />
    <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="mt-6 w-full rounded border border-grey-70 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
      placeholder="Email Address"
      type="email"
      required
      disabled={isSubmitting}
    />
  </div>

  <div className="flex flex-col md:flex-row mt-6">
    <input
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="mr-3 w-full rounded border border-grey-70 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5 height-lg"
      placeholder="Phone Number"
      type="tel"
      required
      disabled={isSubmitting}
    />
    <div className="mt-6 w-full md:mt-0 md:ml-3 md:w-1/2 lg:ml-5">
      <input
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        className="w-full rounded border border-grey-70 px-4 py-3 font-body text-black"
        placeholder="WhatsApp Number"
        type="tel"
        disabled={isSubmitting || useSameAsPhone}
      />
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="sameAsPhone"
          checked={useSameAsPhone}
          onChange={handleSameAsPhoneChange}
          disabled={isSubmitting}
          className="mr-2"
        />
        <label htmlFor="sameAsPhone" className="text-sm text-gray-600">
          Same as Phone Number
        </label>
      </div>
    </div>
  </div>

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    className="mt-6 w-full rounded border border-grey-70 px-4 py-3 font-body text-black md:mt-8"
    placeholder="Your Message"
    cols="30"
    rows="10"
    required
    disabled={isSubmitting}
  ></textarea>
  <button
    type="submit"
    disabled={isSubmitting}
    className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? 'Sending...' : 'Send Message'}
    <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
  </button>
</form>

  <div class="flex flex-col pt-16 lg:flex-row">
    <div
      class="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-70 px-6 py-6 sm:py-8 lg:w-1/3"
    >
      <div class="flex items-center">
        <i class="bx bx-phone text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Phone
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        (+91) 88688379**
      </p>
    </div>
    <div
      class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-70 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div class="flex items-center">
        <i class="bx bx-envelope text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Email
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
      veerfitness95@gmail.com
      </p>
    </div>
    <div
      class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-70 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div class="flex items-center">
        <i class="bx bx-map text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Address
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        9D Chandigarh Punjab
      </p>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Contact
