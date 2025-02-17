import React from 'react'

const Contact = () => {
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
  <form class="mx-auto w-full pt-10 sm:w-3/4">
    <div class="flex flex-col md:flex-row">
      <input
        class="mr-3 w-full rounded border border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
        placeholder="Name"
        type="text"
        id="name"
      />
      <input
        class="mt-6 w-full rounded border border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
        placeholder="Email"
        type="text"
        id="email"
      />
    </div>
    <textarea
      class="mt-6 w-full rounded border border-grey-50 px-4 py-3 font-body text-black md:mt-8"
      placeholder="Message"
      id="message"
      cols="30"
      rows="10"
    ></textarea>
    <button
      class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
    >
      Send
      <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
    </button>
  </form>
  <div class="flex flex-col pt-16 lg:flex-row">
    <div
      class="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
    >
      <div class="flex items-center">
        <i class="bx bx-phone text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Phone
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        (+881) 111 222 333
      </p>
    </div>
    <div
      class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div class="flex items-center">
        <i class="bx bx-envelope text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Email
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        name@mydomain.com
      </p>
    </div>
    <div
      class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
    >
      <div class="flex items-center">
        <i class="bx bx-map text-2xl text-grey-40"></i>
        <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
          My Address
        </p>
      </div>
      <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
        123 New York D Block 1100, 2011 USA
      </p>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default Contact
