import { RequestCountChart } from "../details/components/EndpointRequestCountChart"

const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
]

export default function EndpointStats({data}:any) {
    return (
        <div className="bg-gray-900 py-8 sm:py-8 rounded w-full">
            <div className="  px-6 lg:px-8">
                <div className=" ">

                    <dl className=" grid grid-cols-1 gap-4 overflow-hidden rounded text-left sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex w-full text-white/50 bg-white/5 p-8">
                            <ul className="w-full">
                                {[
                                    {
                                        title: 'Total Requests',
                                        value: '8,000+'
                                    }, {
                                        title: 'Failed Requests',
                                        value: '3%'
                                    },
                                    {
                                        title: 'Avg Response Time',
                                        value: '99.9%'
                                    },
                                    {
                                        title: 'Avg Response Size',
                                        value: '$70M'
                                    }
                                ].map(a => {
                                    return <li
                                        key={a.title}
                                        className="flex items-center py-2">
                                        <div className="flex justify-between w-full">
                                            <div className="text-sm font-medium text-white/80">
                                                {a.title}
                                            </div>
                                            <div className="text font-medium text-white">
                                                {a.value}
                                            </div>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className="flex w-full text-white/50 bg-white/5 p-8">
                           <RequestCountChart/>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
