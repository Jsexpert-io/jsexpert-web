'use client'
import React from 'react'

import { Error, Pattern } from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import LogoW from '../../../../public/logow.png'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Sidebar({ navigation }: any) {
  const pathname = usePathname()
  return (
    <div className='h-screen hidden md:flex md:w-48 text-sm p-4'>
      <div className="flex  flex-col gap-y-5  ">
        <Image
          className='h-8 w-8'
          src={LogoW} alt="Js Analyzer" />
        <nav className="flex flex-1 justify-between flex-col ">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation?.map((item: any) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        pathname.includes(item.href)
                          ? ' text-indigo-100'
                          : 'text-gray-200 ',
                        'group flex gap-x-3 items-center rounded-md p-1 text-xs leading-6 font-medium'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-indigo-100' : 'text-gray-200 group-hover:text-indigo-200',
                          'h-4 w-4 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

          </ul>


        </nav>
      </div>
    </div>
  )
}
