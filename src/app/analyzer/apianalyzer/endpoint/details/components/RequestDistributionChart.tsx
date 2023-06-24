import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RequestDetailModel } from '@/State/Models/RequestDetailModel';
import moment from 'moment';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
   
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [

        {
            label: 'Dataset 2',
            //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 0',
        },

    ],
};

export const RequestDistributionChart = ({ data }:{data: RequestDetailModel[] | undefined}) => {
     
    if(!data) return null
    const dates = data.map((item) => moment(item.createdAt).format('DD-MM-YYYY'));
    const uniqueDates = data
    ?.map((item) => moment(item.createdAt).format('DD-MM-YYYY'))
    .filter((date, index, self) => self.indexOf(date) === index);
    const labels = uniqueDates;
    const successData = data?.filter((item) => item.data.responseObject.status <=201)
    const failedWith400Data = data?.filter((item) => item.data.responseObject.status < 500)
    const failedWith500Data = data?.filter((item) => item.data.responseObject.status  >=500)


    const failedData = data?.filter((item) => ![200,201].includes(item.data.responseObject.status) )
    console.log(successData,failedData)
    const barChartData = {
        labels,
        
        datasets: [
            {
                label: 'Success',
                data: labels.map(a=>successData?.filter((item) => moment(item.createdAt).format('DD-MM-YYYY') === a).length),
               
                backgroundColor: '#53389E',
                borderRadius: 5,
           
                stack: 'Stack 0',
            },
            {
                label: 'Failed With Client Error',
                data: labels.map(a=>failedWith400Data?.filter((item) => moment(item.createdAt).format('DD-MM-YYYY') === a).length),
                backgroundColor: '#7F56D9',
                borderRadius: 5,
                
                stack: 'Stack 0',
            },
            {
                label: 'Failed With Server Error',
                data: labels.map(a=>failedWith500Data?.filter((item) => moment(item.createdAt).format('DD-MM-YYYY') === a).length),
              
                backgroundColor: '#9E77ED',
                borderRadius: 5,
                stack: 'Stack 0',
            },
        ],
    }


    return (
        <div className='flex flex-col space-y-4 p-2 shadow rounded-lg border'>
            <Bar data={barChartData} options={{
                
                 plugins: {
                    title: {
                        display: true,
                        text: 'Request Distribution',
                        position: 'bottom',
                    },
                    legend: {
                        display: false,
                       
                    },

                },
                
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'index' as const,
                    intersect: false,
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks:{
                            display:false
                        },
                        grid:{
                            display:false
                        }
                    },
                    y: {
                        stacked: true,
                        ticks:{
                            display:false
                        },
                        grid:{
                            display:false
                        }
                    },
                    
                },
            }} />
        </div>
    );
}
