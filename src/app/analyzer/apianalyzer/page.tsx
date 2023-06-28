
'use client'
import {
  useGetRequestDistributionQuery
  , useGetMemoryUsageTrendQuery, useErrorStatusCodeDitributionQuery,
  useGetRequestDurationDistributionQuery
} from '@/State/apiFeatures/apiperformance.slice'
import React from 'react'
import RequestDistribution from './components/RequestDistributions'
import MemoryUsageTrendChart from './components/MemoryUsageTrendChart'

export default function page() {
 // const {data: requestDistributionData } = useGetRequestDistributionQuery()

  return (
    <div className='flex space-x-4 w-full'>
      <div className='grid md:grid-cols-4 gap-8 w-full grid-cols-1'>
      <RequestDistribution />
      <MemoryUsageTrendChart/>
    </div>
    </div>

  )
}
