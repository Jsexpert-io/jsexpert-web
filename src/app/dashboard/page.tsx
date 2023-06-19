'use client'
import { useGetProjectsQuery } from '@/State/apiFeatures/project.apislice'
import React from 'react'

import CreateNewProjectContainer, { CreateNewProjectButton } from './components/Projects/NewProject/EmptyState'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function page() {
  const { data, isLoading, error } = useGetProjectsQuery()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Please try again</div>
  }
  if (!data?.length) {
    return <div>
      <CreateNewProjectContainer />
    </div>
  }

  return (
    <div>
       <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
      <div className="mt-3 sm:ml-4 sm:mt-0">
       <CreateNewProjectButton />
      </div>
    </div>
    <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {
      data && data?.map((project: any) => {
        const bgColors = ['bg-indigo-600', 'bg-green-500', 'bg-yellow-500', 'bg-red-500',
          'bg-blue-500', 'bg-pink-500']
        const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)]
        const initials = project.name.split(' ').map((word: string) => word[0]).join('')
        return <li key={project.name} className="col-span-1
        
        flex rounded-md shadow-sm">
          <div
            className={classNames(
              bgColor,
              'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
            )}
          >
            {initials}
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <button className="font-medium text-gray-900 hover:text-gray-600">
                {project.name}
              </button>

            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </li>
      })
      
    }</ul></div>
  )
}
