
import { useGetRequestDistributionQuery, useGetRequestDurationDistributionQuery } from '@/State/apiFeatures/apiperformance.slice'
import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import { useGetApiDataByEndpointQuery, useGetApiDataQuery } from '@/State/apiFeatures/apiperformance.slice';
import { useSearchParams } from 'next/navigation';
import { lightGreen, red } from '@mui/material/colors';

ChartJS.register(ArcElement, Tooltip, Title, Legend);
export default function RequestDistribution() {
    const { data: requestDistributionData, isLoading, isError } = useGetRequestDurationDistributionQuery()
    const chartRef = useRef<any>();
    const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      console.log(getElementsAtEvent(chartRef.current, event));
    }
    //   Bar chart showing the count of different request methods (e.g., GET, POST, PUT, DELETE).
    //   Data: Count of each request method (e.g., {"GET": 10, "POST": 5, "PUT": 3, "DELETE": 2}).
    if (!requestDistributionData) {
        return null
    }

    const labels = requestDistributionData?.map((item: { _id: any; }) => item._id);
    const barChartData = {
        labels,

        datasets: [
            {
                label: 'Success',
                data: requestDistributionData?.map((item: { successfulRequests: any; }) => item.successfulRequests),

                backgroundColor: 'green',
                borderRadius: 5,

                stack: 'Stack 0',
            },
            {
                label: 'Failed With Client Error',
                data: requestDistributionData?.map((item: { failedRequests: any; }) => item.failedRequests),

                backgroundColor: '#7F56D9',
                borderRadius: 5,

                stack: 'Stack 0',
            }
        ],
    }

    return (
        <div className='flex flex-col space-y-4 p-2 bg-green-50  shadow rounded-lg'>
            <Doughnut
             ref={chartRef}
   
             onClick={onClick}
        
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
                    labels,
                    datasets: [
                        {
                            label: 'Request',
                            data:  requestDistributionData?.map((item: { successfulRequests: any; }) => item.successfulRequests),
                            backgroundColor: [
                               // four light shaeds of green 
                               '#A0C49D',
                               '#C4D7B2',
                               '#E1ECC8',
                               '#F7FFE5',
                               

                            ],
                            borderColor: [
                                


                            ],
                            borderWidth: 0,
                        },
                        {
                            label: 'Failed Request',
                            data:  requestDistributionData?.map((item: { failedRequests: any; }) => item.failedRequests),
                            backgroundColor: [
                                // four light shaeds of purple
                                '#7F56D9',
                                '#A68DE3',
                                '#C9B4ED',
                                '#E8D9F7',
                               

                            ],
                            borderColor: [
                                '#7F56D9',
                                '#F4EBFF',


                            ],
                            borderWidth: 0,
                        }]
                }} />
        </div>
    )
}

