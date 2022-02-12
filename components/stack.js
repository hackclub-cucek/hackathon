import React from 'react';

export default function Stack() {
  return (
    <div className='bg-dark pt-48 text-light'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex flex-col justify-between space-y-8 md:flex-row md:space-y-0'>
          <div className='relative flex-1'>
            <h1 className='heading2 absolute text-light -mt-10 uppercase'>stack</h1>
            <img
              src='./images/stack.png'
              alt='stack'
              className='aspect-video h-auto w-full'
            />
          </div>
          <div className='flex flex-1 flex-col md:pl-10'>
            <p className='body pb-3 text-accent'>Web Application</p>
            <p className='body pb-10'>
              Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus
              pretium. Dictum habitant amet lacus quam morbi diam.{' '}
            </p>
            <p className='body pb-3 text-accent'>Flutter Application</p>
            <p className='body pb-10'>
              Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus
              pretium. Dictum habitant amet lacus quam morbi diam.
            </p>
            <p className='body pb-3 text-accent'>Machine Learning</p>
            <p className='body pb-10'>
              Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus
              pretium. Dictum habitant amet lacus quam.
            </p>
            <p className='body pb-3 text-accent'>Python-Django</p>
            <p className='body'>
              Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus
              pretium. Dictum habitant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
