import React from 'react';

export default function Faq() {
  return (
    <div className='bg-dark pt-48 text-light'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex flex-col justify-between space-y-8 md:flex-row-reverse md:space-y-0'>
          <div className='relative flex-1'>
            <h1 className='heading2 absolute -mt-10 uppercase'>location</h1>
            <img
              src='./images/location.png'
              alt='location'
              className='aspect-video h-auto w-full'
            />
          </div>
          <div className='flex flex-1 flex-col md:pr-10'>
            <p className='body pb-3 text-accent'>When?</p>
            <p className='body pb-10'>
              Dictum habitant amet lacus quam morbi diam.{' '}
              <span className='text-accent'>Feb 21-28, 2022</span> phasellus
              pretium.
            </p>
            <p className='body pb-3 text-accent'>Where?</p>
            <p className='body'>
              Dictum habitant amet{' '}
              <span className='text-accent'>100% Remote</span> morbi diam. Sit
              posuere phasellus pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
