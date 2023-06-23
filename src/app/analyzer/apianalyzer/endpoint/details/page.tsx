
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetApiDataByEndpointQuery, useGetApiDataQuery } from '@/State/apiFeatures/apiperformance.slice';
import RequestCountChart from './RequestCountChart';

ChartJS.register(ArcElement, Tooltip);

export default function page() {


  const searchParams = useSearchParams()

  const path: any = searchParams.get('path')
  const { data } = useGetApiDataByEndpointQuery(path)




  return (
    <div className='flex space-x-4'>
      <div className='grid md:grid-cols-3  grid-cols-1'>
        <RequestCountChart />
      </div>

    </div>
  )
}
