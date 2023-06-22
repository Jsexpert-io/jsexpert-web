'use client'
import { useDeleteProjectMutation, useGetProjectsQuery } from '@/State/apiFeatures/project.apislice'
import React from 'react'

import CreateNewProjectContainer, { CreateNewProjectButton } from './components/Projects/NewProject/EmptyState'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useAppDispatch } from '@/State/store'
import { setProject } from '@/State/features/project.feature'
import Link from 'next/link'
import { ApiSharp, DataObjectSharp } from '@mui/icons-material'
import { ChartBarIcon, CircleStackIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useSnackbar } from 'notistack'
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Page() {
    const { data, isLoading, error } = useGetProjectsQuery()
    const [deleteProjectApi] =useDeleteProjectMutation()
    const {enqueueSnackbar} = useSnackbar()
    const dispatch = useAppDispatch()
    const deleteProject = async (id:string) => {
       await deleteProjectApi(id).unwrap()
       enqueueSnackbar('Project deleted successfully',{
              variant:'success'
       })
    }
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
            <div className="border-b border-gray-900 pb-5 sm:flex sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Projects</h3>
                <div className="mt-3 sm:ml-4 sm:mt-0">
                    <CreateNewProjectButton />
                </div>
            </div>
            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {
                    data && data?.map((project: any) => {
                     
                        const bgColor = `bg-primary-500`
                        const initials = project.name.split(' ').map((word: string) => word[0]).join('')
                        return <li
                            onClick={() => {
                                dispatch(setProject(project))
                            }}
                            key={project.name} className="col-span-1
                           
        flex rounded-md shadow-sm">
                            <div
                                className={classNames(
                                    bgColor,
                                    'flex w-16   flex-shrink-0 items-center justify-center rounded-l-md text-xl font-medium text-white'
                                )}
                            >
                                {initials}
                            </div>
                            <div className="flex-1   w-48 px-2 py-2 flex-col   justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                <div className="flex-1  px-4 py-2 w-full text-sm">
                                   <h2 className='text-lg font-medium text-gray-900'> {project.name}</h2>
                                  
                                </div>
                                <div className="w-full flex justify-between space-x-2 text-xs truncate px-4 py-2 ">
                                    <div className='flex space-x-2'>
                                    <Link 
                                    href={`/analyzer/${project.id}/apianalyzer`}
                                    className=" text-gray-600">
                                        <ChartBarIcon className='w-5 h-5 text-gray-600' />
                                    </Link>
                                    <Link 
                                 href={`/analyzer/${project.id}/dbanalyzer`}
                                   className=' text-gray-600'
                                   >
                                      <CircleStackIcon className='w-5 h-5 text-gray-600' />
                                    </Link>
                                    </div>
                                    <div className='flex space-x-2'>
                                   
                                    <button 
                                    onClick={()=>deleteProject(project.id)}
                                   className=' text-gray-600'
                                   >
                                      <TrashIcon className='w-5 h-5 text-red-600' />
                                    </button>
                                    </div>

                                </div>
                            </div>
                        </li>
                    })

                }</ul></div>
    )
}
