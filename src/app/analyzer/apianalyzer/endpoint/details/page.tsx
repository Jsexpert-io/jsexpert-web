
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetApiDataByEndpointQuery } from '@/State/apiFeatures/apiperformance.slice';
import {RequestCountChart} from './components/EndpointRequestCountChart';
import { RequestDistributionChart } from './components/EndpointRequestDistributionChart';

ChartJS.register(ArcElement, Tooltip);

export default function Page() {


  const searchParams = useSearchParams()

  const path: any = searchParams.get('path')
  const { data } = useGetApiDataByEndpointQuery(path)




  return (
    <div className='flex space-x-4 w-full'>
      <div className='grid md:grid-cols-4 gap-8 w-full grid-cols-1'>
        <RequestCountChart />
        <RequestDistributionChart data={data} />
      </div>

    </div>
  )
}
