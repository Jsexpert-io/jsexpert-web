'use client'
import React from 'react'
import PageHeader from '../../Components/PageHeader'
import { useGetApiDataQuery } from '@/State/apiFeatures/apiperformance.slice'
import moment from 'moment'
function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}
const statuses = { good: 'text-green-700 bg-green-700/10', bad: 'text-rose-700 bg-rose-700/10' }

export default function Page() {
 const {data} =  useGetApiDataQuery()
 if(!data){
    return null
 }
  return (
    <div>
      <PageHeader/>
      <div className='container'>
        <div className='row'>
          </div>
          <div>
          <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-black/10 text-sm leading-6 text-gray-800">
          <tr>
            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
              Path
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
              Count
            </th>
            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
             Status
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
              Avg Duration
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
              Avg Req Size
            </th>
         
            <th scope="col" className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">
             Last Request
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5">
          {data?.paginatedData?.map((item) => (
            <tr key={item._id}>
              <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                  <div className="truncate text-sm font-medium leading-loose font-mono text-black">{item._id}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="text-sm  text-gray-700"> Request {item.count}</div>
                  <div className="rounded-md bg-primary-100 px-2 py-1 text-xs 
                  font-medium text-gray-700 ring-1 ring-inset ring-black/10">
                     Failed  {item.failedRequests}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <time className="text-gray-700 sm:hidden" dateTime={item.latestRequestDate}>
                    {moment(item.latestRequestDate).format('DD MMM YYYY')}
                  </time>
                  <div className={classNames(statuses[
                      item.successfulRequests > item.failedRequests ? 'good' : 'bad'

                  ], 'flex-none rounded-full p-1')}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="hidden text-black sm:block">{
                     item.successfulRequests > item.failedRequests ? 'Good' : 'Bad'
                  }</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-700 md:table-cell lg:pr-20">
                {
                 (item.avgDuration/1000).toFixed(2)
                } Seconds
              </td>
              <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-700 md:table-cell lg:pr-20">
                {(item.avgReqSize/1000).toFixed(2)}
                  MB
              </td>
           
              <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-700 sm:table-cell sm:pr-6 lg:pr-8">
                <time dateTime={item.latestRequestDate}>{moment(item.latestRequestDate).format('DD MMM YYYY')}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
      </div>
    </div>
  )
}
