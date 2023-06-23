import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetApiDataByEndpointQuery, useGetApiDataQuery } from '@/State/apiFeatures/apiperformance.slice';
import { useSearchParams } from 'next/navigation';

ChartJS.register(ArcElement, Tooltip);
export default function RequestCountChart() {
    const searchParams = useSearchParams()

    const path: any = searchParams.get('path')
    const { data: endpoinsData, refetch } = useGetApiDataQuery()
    const [endpointData, setEndpointData] = useState<{
        avgDuration: number;
        avgMemoryUsage: number; avgReqSize: number; avgResSize: number; count: number;
        failedRequests: number; latestRequestDate: string; maxDuration: number;
        minDuration: number; successfulRequests: number; _id: any;
    } | undefined>()
    useEffect(() => {
        if (endpoinsData?.paginatedData && path) {
            const endpoint = endpoinsData?.paginatedData.find((endpoint) => endpoint._id.endpoint === path)
            setEndpointData(endpoint)
        }
    }, [endpoinsData, path])
    return (
        <div className='flex flex-col space-y-4 p-8 shadow rounded-lg border'>
            <div>
                <div className='text-xs text-gray-600'>Number of Requests</div>
            </div>
            <Doughnut

                className='w-40 h-40'
                data={{

                    labels: ['Success Requests', 'Failed Requests'],
                    datasets: [
                        {
                            label: 'Request',
                            data: [endpointData?.successfulRequests, endpointData?.failedRequests],
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 99, 132, 0.2)',

                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 99, 132, 1)',

                            ],
                            borderWidth: 1,
                        }]
                }} />
        </div>
    )
}
