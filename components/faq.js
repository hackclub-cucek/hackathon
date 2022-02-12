import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Example() {
  const [openOne, setOpenOne] = useState(true);
  const [openTwo, setOpenTwo] = useState(true);
  const [openThree, setOpenThree] = useState(true);
  const [openFour, setOpenFour] = useState(true);
  // const disclosureData = [
  //   {
  //     title: 'Who can participate?',
  //     desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
  //   },
  //   {
  //     title: 'Can we apply as a team?',
  //     desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
  //   },
  //   {
  //     title: 'When will applications close?',
  //     desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
  //   },
  //   {
  //     title: 'Where can we reach out for further questions?',
  //     desc: 'Dictum habitant amet lacus quam morbi diam. Sit posuere phasellus pretium.',
  //   },
  // ];
  return (
    <div className='mx-auto max-w-7xl px-4 pt-48'>
      <div className='flex flex-col justify-between space-y-8 md:flex-row md:space-y-0'>
        <div className='relative flex-1'>
          <h1 className='heading2 text-light absolute -mt-10 uppercase'>
            faq
          </h1>
          <img
            src='https://images.unsplash.com/photo-1560523159-6b681a1e1852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='talk'
            className='aspect-video h-auto w-full max-w-2xl rounded-xl'
          />
        </div>
        <div>
          <div className='bg-dark mx-auto w-full max-w-md space-y-4 rounded-2xl p-2 md:pl-10 '>
            <div className='border-accent rounded-xl border'>
              <Disclosure>
                <div onClick={() => setOpenOne(!openOne)}>
                  <Disclosure.Button className='bg-dark text-light flex w-full justify-between rounded-full px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                    <span className='body text-accent'>
                      Who can participate?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        openOne ? 'rotate-90 transform' : ''
                      } text-accent h-5 w-5 transition`}
                    />
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel className='body text-light px-4 pt-4 pb-2 text-sm'>
                  Dictum habitant amet lacus quam morbi diam. Sit posuere
                  phasellus pretium.
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>

          <div className='bg-dark mx-auto w-full max-w-md space-y-4 rounded-2xl p-2 md:pl-10 '>
            <div className='border-accent rounded-xl border'>
              <Disclosure>
                <div onClick={() => setOpenTwo(!openTwo)}>
                  <Disclosure.Button className='bg-dark text-light flex w-full justify-between rounded-full px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                    <span className='body text-accent'>
                      Can we apply as a team?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        openTwo ? 'rotate-90 transform' : ''
                      } text-accent h-5 w-5 transition`}
                    />
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel className='body text-light px-4 pt-4 pb-2 text-sm'>
                  Dictum habitant amet lacus quam morbi diam. Sit posuere
                  phasellus pretium.
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>

          <div className='bg-dark mx-auto w-full max-w-md space-y-4 rounded-2xl p-2 md:pl-10 '>
            <div className='border-accent rounded-xl border'>
              <Disclosure>
                <div onClick={() => setOpenThree(!openThree)}>
                  <Disclosure.Button className='bg-dark text-light flex w-full justify-between rounded-full px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                    <span className='body text-accent'>
                      When will applications close?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        openThree ? 'rotate-90 transform' : ''
                      } text-accent h-5 w-5 transition`}
                    />
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel className='body text-light px-4 pt-4 pb-2 text-sm'>
                  Dictum habitant amet lacus quam morbi diam. Sit posuere
                  phasellus pretium.
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>

          <div className='bg-dark mx-auto w-full max-w-md space-y-4 rounded-2xl p-2 md:pl-10 '>
            <div className='border-accent rounded-xl border'>
              <Disclosure>
                <div onClick={() => setOpenFour(!openFour)}>
                  <Disclosure.Button className='bg-dark text-light flex w-full justify-between rounded-full px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                    <span className='body text-accent'>
                      Where can we reach out for further questions?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        openFour ? 'rotate-90 transform' : ''
                      } text-accent h-5 w-5 transition`}
                    />
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel className='body text-light px-4 pt-4 pb-2 text-sm'>
                  Dictum habitant amet lacus quam morbi diam. Sit posuere
                  phasellus pretium.
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
