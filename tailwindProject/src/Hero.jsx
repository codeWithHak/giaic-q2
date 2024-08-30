import React from 'react'

function Hero() {
  return (
    <main>
      <div id="hero" className='h-3/4 bg-gradient-to-br from-red-50 via-white to-transparent'>
        <div id="hero-container" className='max-w-4xl mx-auto pt-6 px-6  flex flex-col text-center items-center sm:gap-6'>
            <div id="version-text" className='flex my-2 gap-2 items-center hover:border border border-orange-100  hover:border-orange-300 bg-yellow-50 px-2 py-1 rounded-lg w-fit  hover:-translate-y-1 hover:shadow-lg hover:duration-700 shadow-md transition group'>
              <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600"></div>
              <p className='font-display text-yellow-700 font-bold'>Book a call</p>
              <i class="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition pr-1 duration-700"></i>
            </div>
            <div id="hero-items" className='hidden sm:flex text-gray-600 font-medium text-sm text-center justify-center items-center'>
              <div className="flex items-center gap-2 px-4">
              <i class="fa-solid fa-file-code text-sm"></i>
              <p>Optimized Code</p>
              </div>
              <div className="flex items-center gap-2 px-4">
              <i class="fa-regular fa-hand-back-fist text-sm"></i>
              <p>Customizable Components</p>
              </div>
              <div className="flex items-center gap-2 px-4">
              <i class="fa-solid fa-window-restore text-sm"></i>
              <p>Run Anywhere</p>
              </div>
              
            </div>
            <h1 className='text-5xl font-bold mt-4 md:text-4xl lg:text-7xl'>We Build Websites For Businesses</h1>
            <p className='text-xl my-6 lg:text-2xl text-slate-500'>
            At ZeroOne Devs, we create sites that are not just seen, but remembered.</p>
            <div id="buttons-container" className='flex flex-col sm:flex-row gap-6'>
            <button className=' text-center bg-primary text-white px-4 py-4 rounded-lg font-semibold hover:opacity-85 shadow-sm'>See Examples</button>
            <button className=' text-center bg-white text-black px-4 py-4 rounded-lg font-semibold border border-gray-400 shadow-sm hover:border-gray-700 transition'>Discuss Your Idea</button>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
