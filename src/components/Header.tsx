'use client'
import React, { useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'

import LogoWhite from '../../public/logow.png';
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">JsExpert</span>
          <Image
            className="h-12 w-auto"
            src={LogoWhite}
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Jsexpert</span>
            {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>

  )
}
export const  FaqDisclosure = ({ faq }:any) => {
  return    <Disclosure as="div" key={faq.question} className="pt-6">
  {({ open }) => (
    <>
      <dt>
        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
          <span className="text-base font-semibold leading-7">{faq.question}</span>
          <span className="ml-6 flex h-7 items-center">
            {open ? (
              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
        </Disclosure.Button>
      </dt>
      <Disclosure.Panel as="dd" className="mt-2 pr-12">
        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
}