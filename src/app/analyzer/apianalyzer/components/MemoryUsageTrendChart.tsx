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
    elements: {
        point:{
            radius: 0
        }
    },
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
const MemoryUsageTrendChart = ({data}:any) => {
    
    
    if (!data) return null;
    const chartLabels = data.map((entry: any) => entry.date);
    const chartDataPoints = (data )
   
    .map((entry: any) => (entry.avgMemoryUsage / 1000000).toFixed(2));

    // Set up the chart configuration
    const chartConfig = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Memory Usage Trend',
                data: chartDataPoints,
                fill: false,
                color: '#000',
                borderWidth: 1,
                borderColor: 'green',
                tension: 0.8,
                backgroundColor: '#000',
            },
        ],
    };
    console.log(chartConfig)
    return (
       

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
                            display:false,
                  
                        }
                    },
                    y:{
                        //beginAtZero:true,
                        border:{
                            display:false
                        },
                        grid:{
                            display:false,
                          
                            
                        },  
                        ticks:{
                            display:false,
                            stepSize:200,
                            
                        }
                    }
                }}}
                data={chartConfig} />
     
    );
};

export default MemoryUsageTrendChart;
