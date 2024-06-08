'use client';

import React, { Fragment } from "react";
import Link from "next/link";
import { Popover, Menu, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MobileAuthMenu from "@/components/nav/MobileAuthMenu";
import AuthMenu from "@/components/nav/AuthMenu";
import ThemeSelector from "@/components/nav/ThemeSelector";
import Search from "@/components/Search";
import { useCookies } from 'next-client-cookies';
import Image from "next/image";
import clsx from 'clsx'


const Navbar: React.FC = () => {
  const cookies = useCookies();
  const theme = cookies.get('x-theme') || 'light';

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={clsx(
          {'fixed inset-x-0 top-0 z-50': open},
          'shadow-sm dark:shadow-dark lg:static lg:overflow-y-visible'
        )}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                      <Image
                        className="h-8 w-auto"
                        src="/favicons/favicon-32x32.png"
                        alt="Permesso"
                        width={32}
                        height={32}
                      />
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                    <div className="w-full">
                      <Search />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button
                    className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue"
                  >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <ThemeSelector theme={theme}/>


                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-5 flex-shrink-0">
                    <div>
                      <Menu.Button className="relative flex rounded-full p-1 bg-gray-100 dark:bg-gray-700 text-gray-400 hover:text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <UserIcon className="h-6 w-6" aria-hidden="true" />
                        {/* Use the user's profile image here */}
                        {/* <img className="h-8 w-8 rounded-full" src={user.} alt="" /> */}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                              <AuthMenu active={ active } />
                            )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>











                  <Link
                    href="/posts"
                    className="ml-6 inline-flex items-center rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                  >
                    New Post
                  </Link>
                </div>
              </div>
            </div>



            {/* Mobile menu, show/hide based on menu state. */}
            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <MobileAuthMenu />
            </Popover.Panel>


          </>
        )}
      </Popover>
    </>
  )
};

export default Navbar;