
'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import {RequestCountChart} from './components/EndpointRequestCountChart';
import { RequestDistributionChart } from './components/EndpointRequestDistributionChart';
import { useGetApiDataByEndpointQuery } from '@/State/apiFeatures/apiperformance.slice';
import EndpointStats from '../components/Stats';

ChartJS.register(ArcElement, Tooltip);

export default function Page() {


  const searchParams = useSearchParams()

  const path: any = searchParams.get('path')
  const { data } = useGetApiDataByEndpointQuery(path)




  return (
    <div className='flex space-x-4 w-full'>
<EndpointStats data={data}/>

    </div>
  )
}
