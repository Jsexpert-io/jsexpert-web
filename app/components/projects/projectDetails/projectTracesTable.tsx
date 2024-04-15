
import { Link } from '@remix-run/react'
import moment from 'moment'
export default function ProjectTracesTable({ traces }: {
    traces: any[]
}) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Endpoints</h1>
                    <p className="mt-2 text-sm text-gray-700">

                    </p>
                </div>

            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr className="divide-x divide-gray-200">
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Name
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Duration
                                        (milliseconds)
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        StartTime
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        EndTime
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {traces.map((trace) => (
                                    <tr key={trace.id} className="divide-x divide-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                            <div className='flex flex-col gap-y-2'>
                                                <span>{trace.name}</span>
                                                <span className='text-xs font-light text-green-800'>{trace.path}</span>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{
                                            trace.duration
                                        }</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{
                                            moment(trace.startTime / 1000000).format('DD-MM-YYYY, h:mm:ss a')
                                        }</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{

                                            moment(trace.endTime / 1000000).format('DD-MM-YYYY, h:mm:ss a')
                                        }</td>

                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                            <Link to={`${trace.traceId}/details`}>
                                                <span className="text-indigo-600 hover:text-indigo-900">
                                                    View More
                                                </span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
