import React from 'react'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';

export default function Banner() {
  return (
    <div id='home' className='bg-dark text-light'>
      <div className="max-w-7xl mx-auto px-4">
        <div className='flex justify-between items-center pt-24 md:pt-40'>
          <div>
            <p className='subheading2 text-accent md:pb-4 pb-3'>Feb 21-28, 2022</p>
            <h1 className='heading1 md:pb-2'>Hack</h1>
            <h1 className='heading1 md:pb-2'>Kuttanad</h1>
            <h1 className='heading2 md:pb-2'>CUCEK</h1>
            <h1 className='heading2 md:pb-6 pb-5'>Hackathon 2022</h1>
            <p className='subheading2 md:pb-12 pb-10'>Earth is the third planet from the Sun and the only astronomical object known to harbor life. </p>
            <button className='button flex space-x-2 px-6 py-4 bg-accent rounded-full'>
              <p>Register Now</p>
              <ArrowRightLineIcon />
            </button>
          </div>
          <div className='hidden lg:flex'>
            <img src="./images/banner.png" alt="banner" className='w-96 h-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}
