'use client'
import Image from 'next/image'
import React from 'react'
import LogoW from '../../../../public/logow.png'
import { useGetProjectsQuery } from '@/State/apiFeatures/project.apislice'
import { useAppDispatch, useAppSelector } from '@/State/store'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { setProject } from '@/State/features/project.feature'
import ProjectListDropDown from './ProjectListDropdown'
export default function Header() {
    const { data, isLoading, error } = useGetProjectsQuery()
    const { project } = useAppSelector(state => state.projectState)
    const dispatch = useAppDispatch()

    const onProjectNavigate = (project: any) => {
        dispatch(setProject(project))

    }
    return (
        <div className=' flex justify-between w-full items-center'>
            <div className='flex flex-col space-y-1 '>
                <h1 className='text-gray-700 text-2xl font-semibold'>
                    Js Analyzer make your APIs better
                </h1>
                <p className='text-gray-500 text-xs'>
                    Analyze your express APIs and make them better
                </p>
            </div>
            <div className='flex w-48' >
               <ProjectListDropDown />
            </div>
        </div>
    )
}
{/* <div className='flex space-x-4' >
<select 
value={project?.id}
onChange={(e) => {
    const id = e.target.value
    const project = data?.find((a: any) => a.id === id)
    onProjectNavigate(project)
}}
className='bg-primary-950 text-gray-100
onfocus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
text-xs rounded-md px-4'>
    {data && data?.map((a: any) => {
        return <option key={a.id} value={a.id}>
            {
                project?.id === a.id && <CheckBadgeIcon className='w-4 h-4
                 text-green-50 mx-2' />
            }
            {a.name}</option>
    })}
</select>
</div> */}