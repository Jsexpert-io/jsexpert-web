'use client'
import Image from 'next/image'
import React from 'react'
import LogoW from '../../../../public/logow.png'
import { useGetProjectsQuery } from '@/State/apiFeatures/project.apislice'
import { useAppDispatch, useAppSelector } from '@/State/store'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { setProject } from '@/State/features/project.feature'
export default function Header() {
    const { data, isLoading, error } = useGetProjectsQuery()
    const { project } = useAppSelector(state => state.projectState)
    const dispatch = useAppDispatch()
    
    const onProjectNavigate=(project:any)=>{
        dispatch(setProject(project))
     
    }
    return (
        <div className='px-4 py-2 flex justify-between w-full'>
            <Image
                className='h-10 w-auto'
                src={LogoW} alt="Js Analyzer" />
            <div className='flex space-x-4' >
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
            </div>
        </div>
    )
}
