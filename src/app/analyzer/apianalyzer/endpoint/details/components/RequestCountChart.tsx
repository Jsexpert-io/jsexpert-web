import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetApiDataByEndpointQuery, useGetApiDataQuery } from '@/State/apiFeatures/apiperformance.slice';
import { useSearchParams } from 'next/navigation';
import { lightGreen, red } from '@mui/material/colors';

ChartJS.register(ArcElement, Tooltip,Title ,Legend );
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
        <div className='flex flex-col space-y-4 p-2 shadow rounded-lg border'>
            
            <Doughnut
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    cutout: '65%',
                    plugins: {
                        title: {
                            display: true,
                            text: 'Request Count',
                            position: 'bottom',
                            font: {
                                size: 12
                            }
                        },
                        legend: {
                            display: false,
                            position: 'top',
                            labels: {
                                font: {
                                    size: 10
                                }
                            }
                        }
                    }
                   

                }}

                className='w-40 h-40 '
                data={{
                    labels: ['Success Requests', 'Failed Requests'],
                    datasets: [
                        {
                            label: 'Request',
                            data: [endpointData?.successfulRequests, endpointData?.failedRequests],
                            backgroundColor: [
                                '#7F56D9',
                                '#F4EBFF',

                            ],
                            borderColor: [
                                '#7F56D9',
                                '#F4EBFF',
                         

                            ],
                            borderWidth: 1,
                        }]
                }} />
        </div>
    )
}
