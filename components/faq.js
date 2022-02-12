import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Example() {
  const [open, setOpen] = useState(true);
  const disclosureData = [
    {
      title: 'Who can participate?',
      desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
    },
    {
      title: 'Can we apply as a team?',
      desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
    },
    {
      title: 'When will applications close?',
      desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
    },
    {
      title: 'Where can we reach out for further questions?',
      desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
    },
  ];
  return (
    <div className='mx-auto max-w-7xl px-4 pt-48'>
      <div className='flex flex-col justify-between space-y-8 md:flex-row md:space-y-0'>
        <div className='relative flex-1'>
          <h1 className='heading2 outline_text absolute -mt-10 uppercase'>
            about
          </h1>
          <img
            src='https://images.unsplash.com/photo-1560523159-6b681a1e1852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='talk'
            className='aspect-video h-auto w-full rounded-xl'
          />
        </div>
        <div className='mx-auto w-full max-w-md space-y-4 rounded-2xl bg-dark p-2 md:pl-10 '>
          {disclosureData.map((item, index) => {
            return (
              <div key={index} className='rounded-xl border border-accent'>
                <Disclosure>
                  <div onClick={() => setOpen(!open)}>
                    <Disclosure.Button className='flex w-full justify-between rounded-full bg-dark px-4 py-2 text-left text-sm font-medium text-light  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                      <span className='body text-accent'>{item.title}</span>
                      <ChevronUpIcon
                        className={`${
                          !open ? 'rotate-90 transform' : ''
                        } h-5 w-5 text-accent transition`}
                      />
                    </Disclosure.Button>
                  </div>
                  <Disclosure.Panel className='body px-4 pt-4 pb-2 text-sm text-light'>
                    {item.desc}
                  </Disclosure.Panel>
                </Disclosure>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
