import { Menu } from '@headlessui/react'
import { MoreHorizOutlined, MoreOutlined, MoreVertOutlined } from '@mui/icons-material'
import React from 'react'
import MemoryUsageTrendChart from './MemoryUsageTrendChart'
import { useGetMemoryUsageTrendQuery } from '@/State/apiFeatures/apiperformance.slice'

export default function RequestDistributions() {
    const { data }: any = useGetMemoryUsageTrendQuery()
    return (
        <div className='rounded shadow-md flex flex-col
        space-y-2
        bg-white p-2  border-gray-400'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xs'>Request Distribution</h2>
                <MoreVertOutlined className='cursor-pointer h-4 w-4 text-gray-400' />
            </div>
            <div className='flex  justify-between items-center'>
                <div className='flex flex-col space-y-2'>
                    <h3 className='text-xl font-bold tracking-wider'>{
                        
                            data?.length
                        
                    }</h3>
                    <p className='text-xs text-gray-500'>Total Requests</p>
                </div>
                <div className='h-16 w-40'>
                    <MemoryUsageTrendChart data={data}/>
                </div>

            </div>
        </div>
    )
}


const LineGraphSVG = () => {
    return <svg width="131" height="66"
        className='h-20 w-20'
        viewBox="0 0 131 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33334 65C19.5188 58.9382 25.4537 35.6316 44 33C61.0989 30.5738 69.6936 52.9402 86.6667 49C107.25 44.2218 108.537 2.73299 129.333 1" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

}