import { Disclosure } from '@headlessui/react';
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

export default function Faq() {
  return (
    <div id='faq' className='mx-auto max-w-7xl px-4 pt-48'>
      <div className='flex flex-col justify-between space-y-8 md:flex-row md:space-y-0'>
        <div className='relative flex-1'>
          <h1 className='heading2 text-light absolute -mt-10 uppercase'>
            faq
          </h1>
          <img
            src='./images/faq.png'
            alt='faq'
            className='aspect-video h-auto w-full'
          />
        </div>
        <div className='flex-1 md:pl-10 space-y-3'>
          <div className='rounded-xl border-25 border-accent'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`${open ? 'text-accent subheading1 pb-3' : 'text-light body hover:subheading1 hover:text-accent pb-4'} flex justify-between w-full px-4 pt-4 text-left bg-transparent`}>
                    <span>Who can participate?</span>
                    <ArrowRightSLineIcon
                      className={`${open ? 'transform rotate-90' : ''
                        } text-light`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 body text-light">
                    All the students of CUCEK can participate.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className='rounded-xl border-25 border-accent'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`${open ? 'text-accent subheading1 pb-3' : 'text-light body hover:subheading1 hover:text-accent pb-4'} flex justify-between w-full px-4 pt-4 text-left bg-transparent`}>
                    <span>Can we apply as a team?</span>
                    <ArrowRightSLineIcon
                      className={`${open ? 'transform rotate-90' : ''
                        } text-light`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 body text-light">
                    Yes! You can apply as a team of 2 to 4 members.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className='rounded-xl border-25 border-accent'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`${open ? 'text-accent subheading1 pb-3' : 'text-light body hover:subheading1 hover:text-accent pb-4'} flex justify-between w-full px-4 pt-4 text-left bg-transparent`}>
                    <span>When will applications close?</span>
                    <ArrowRightSLineIcon
                      className={`${open ? 'transform rotate-90' : ''
                        } text-light`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 body text-light">
                    You can apply on or before 15th March 2022.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className='rounded-xl border-25 border-accent'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`${open ? 'text-accent subheading1 pb-3' : 'text-light body hover:subheading1 hover:text-accent pb-4'} flex justify-between w-full px-4 pt-4 text-left bg-transparent`}>
                    <span>Where can we reach out for further questions?</span>
                    <ArrowRightSLineIcon
                      className={`${open ? 'transform rotate-90' : ''
                        } text-light`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 body text-light">
                    For further queries you can connect with us at  <a className='text-accent' href="mailto:hello@kuttanadhacks.com">hello@kuttanadhacks.com</a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
