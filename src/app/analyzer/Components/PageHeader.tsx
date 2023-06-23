import { updateFilter } from '@/State/features/api.matrices.feature'
import { useAppDispatch, useAppSelector } from '@/State/store'
import { Input } from '@mui/material'
import React from 'react'

export default function PageHeader() {
    const {apiMetricesFilter} =  useAppSelector(state => state.apiMetricesFilterState)
    const dispatch = useAppDispatch()
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log({ ...apiMetricesFilter, search: e.target.value });
        
        dispatch(updateFilter({ ...apiMetricesFilter, search: e.target.value }))
    }
    return (
        <div className='flex  w-full items-end pb-2'>
            <div
                className={`flex flex-col space-y-1  w-2/5 '`}
            >
                <h1 className='text-lg font-bold text-gray-800'>API Endpoint Analyzer</h1>
                <p className='text-gray-600 text-sm'>
                    Analyze your API endpoints and get a report of the best practices and possible improvements
                </p>
            </div>
            <div className='flex flex-col items-end text-xs w-3/5'>
                <div className='flex flex-row gap-x-2'>
                    <input 
                    onChange={handleSearch}
                    value={apiMetricesFilter.search}
                    type="text" className='border
                  text-xs
                  border-gray-300 rounded-md p-2' placeholder='Search for an endpoint' />
                </div>
            </div>
        </div>

    )
}
