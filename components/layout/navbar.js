import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import CloseFillIcon from 'remixicon-react/CloseFillIcon';
import Menu5FillIcon from 'remixicon-react/Menu5FillIcon';
import { Link } from 'react-scroll';


const solutions = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Prizes',
    href: 'prize',
  },
  {
    name: 'Judges',
    href: 'judges',
  },
  {
    name: 'Faqs',
    href: 'faq',
  },
]
export default function Navbar() {
  return (
    <Popover className="sticky z-50 top-0 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-7 md:py-9">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="md:w-6 w-5 h-auto cursor-pointer"
                src="./images/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-accent">
              <span className="sr-only">Open menu</span>
              <Menu5FillIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-16">
            {solutions.map((item) => (
              <Link key={item.name} to={item.href} smooth={true}
                className="button text-light hover:text-accent focus:text-accent active:text-accent cursor-pointer">
                {item.name}
              </Link>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-accent ring-opacity-5 bg-dark divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-4">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="md:w-6 w-5 h-auto cursor-pointer"
                    src="./images/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-accent hover:text-light">
                    <span className="sr-only">Close menu</span>
                    <CloseFillIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link key={item.name} to={item.href} smooth={true}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-light/30 text-light hover:text-accent">
                      <span className="ml-3 text-base font-medium">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
