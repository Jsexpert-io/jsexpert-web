import React from 'react'

export default function PageHeader() {
    return (
        <div className='flex  w-full border-b pb-2'>
            <div
                className={`flex flex-col space-y-1  w-4/5 '`}
            >
                <h1 className='text-lg font-bold text-gray-800'>API Endpoint Analyzer</h1>
                <p className='text-gray-600 text-sm'>
                    Analyze your API endpoints and get a report of the best practices and possible improvements
                </p>
            </div>
            <div className='flex flex-col w-1/5'>
                <div className='flex flex-row gap-x-2'>
           
                      <button className='border border-primary-950
                    text-primary-950 rounded-md px-4 py-1 text-sm'>Save</button>
                </div>
            </div>
        </div>

    )
}
