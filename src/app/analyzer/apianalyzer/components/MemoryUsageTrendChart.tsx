import { useGetMemoryUsageTrendQuery } from '@/State/apiFeatures/apiperformance.slice';
import { Chart } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top' as const,
        },
        title: {
            display: false,
          
        }
    },
};
const MemoryUsageTrendChart = () => {
    const { data }: any = useGetMemoryUsageTrendQuery()

    if (!data) return null;
    const chartLabels = data.map((entry: any) => entry.date);
    const chartDataPoints = data.map((entry: any) => (entry.avgMemoryUsage / 1000000).toFixed(2));

    // Set up the chart configuration
    const chartConfig = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Memory Usage Trend',
                data: chartDataPoints,
                fill: true,
                //borderColor: '#4B5563',
                tension: 0.4,
                backgroundColor: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.25) 100%)',
            },
        ],
    };
    console.log(chartConfig)
    return (
        <div className='flex flex-col space-y-4 p-2 bg-green-50  shadow rounded-lg '>


            <Line
                options={{...options,scales:{
                    x:{
                        border:{
                            display:false
                        },
                        grid:{
                            display:false
                        },
                        ticks:{
                            display:false
                        }
                    },
                    y:{
                        beginAtZero:true,
                        border:{
                            display:false
                        },
                        grid:{
                            display:false,
                          
                            
                        },  
                        ticks:{
                            display:false,
                            stepSize:20,
                            
                        }
                    }
                }}}
                data={chartConfig} />
        </div>
    );
};

export default MemoryUsageTrendChart;
