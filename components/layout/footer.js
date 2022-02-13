import React from 'react';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';

export default function Footer() {
  return (
    <div className='mx-auto max-w-7xl px-4 pt-48'>
      <div className='flex flex-col space-y-0 md:space-y-2 text-light'>
        <h1 className='heading1'>Have queries?</h1>
        <h1 className='heading2'>Contact us through our socials.</h1>
      </div>
      <div className='flex pt-12 space-x-6'>
        <a href='#' className=''>
          <div className='bg-light p-1 rounded-full text-center'>
            <LinkedinFillIcon className='text-dark w-9 h-9' />
          </div>
        </a>
        <a href='#' className=''>
          <div className='bg-light p-1 rounded-full text-center'>
            <TwitterFillIcon className='text-dark w-9 h-9' />
          </div>
        </a>
        <a href='#' className=''>
          <div className='bg-light p-1 rounded-full text-center'>
            <InstagramFillIcon className='text-dark w-9 h-9' />
          </div>
        </a>
      </div>
      <div className='flex flex-col space-y-1 smallbody pt-10 text-light'>
        <p>All Rights Reserved 2022</p>
        <p>Hack Club CUCEK & TinkerHub CUCEK</p>
      </div>
    </div>
  );
}
