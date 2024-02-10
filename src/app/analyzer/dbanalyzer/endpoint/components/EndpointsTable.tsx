'use client';
import React, { useEffect } from 'react';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '@/State/store';
import Pagination from './pagination';
import { updateFilter } from '@/State/features/api.matrices.feature';
import Link from 'next/link';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { useGetDbDataQuery } from '@/State/apiFeatures/dbapiperformance.slice';

export const TableHeader = () => {
  const { apiMetricesFilter } = useAppSelector(state => state.apiMetricesFilterState)
  const dispatch = useAppDispatch()
  const onclick = (key: string) => {
    let sort = apiMetricesFilter.sortBy
    let order = apiMetricesFilter.orderBy
    if (sort === key) {
      order = order === 'asc' ? 'desc' : 'asc'
    } else {
      sort = key
      order = 'asc'
    }
    dispatch(updateFilter({ ...apiMetricesFilter, sortBy: sort, orderBy: order }))



  }
  return <thead className="border-b border-black/10 text-xs leading-6 text-gray-800">
    <tr>
      {[
        //'Path', 'Avg Duration', 'Latest Date', 'Count'
        {
          key: 'Path',
          value: 'endpoint'
        }
        , {
          key: 'Avg Duration',
          value: 'avgDuration'
        }
        , {
          key: 'Latest Date',
          value: 'latestRequestDate'
        }
        , {
          key: 'Count',
          value: 'count'
        }

      ].map((a, i) => {
        return <th
          onClick={() => onclick(a.value)}
          key={i} className="px-6 py-2 font-semibold text-left">
          <div className='flex items-center'>
            <span className="mr-1">
              {a.key}
            </span>
            {
              apiMetricesFilter.sortBy === a.value && <span className="ml-1">
                {apiMetricesFilter.orderBy === 'asc' ?
                  <ArrowUpIcon className="w-4 h-4" />
                  : <ArrowDownIcon className="w-4 h-4" />
                }
              </span>
            }
          </div>


        </th>
      })}
    </tr>
  </thead>
}
export const EndpointsTable = () => {
  const { data, refetch } = useGetDbDataQuery();
  const { project } = useAppSelector(state => state.projectState);
  const { apiMetricesFilter } = useAppSelector(state => state.apiMetricesFilterState);
  const dispatch = useAppDispatch();
  const onPageChange = (currentPage: number) => {
    console.log({ ...apiMetricesFilter, currentPage });

    dispatch(updateFilter({ ...apiMetricesFilter, currentPage }));
  };
  useEffect(() => {
    if (project?._id && apiMetricesFilter) {

      refetch();
    }

    return () => {
    };
  }, [project, apiMetricesFilter,refetch]);

  if (!data) {
    return null;
  }
  return <div>
    <table className="mt-6 w-full whitespace-nowrap text-left">

      <TableHeader />
      <tbody className="border-b border-black/10  leading-6 text-gray-800">
        {data?.paginatedData.map((a, i: number) => {
          return <tr key={i} className="
          
          ">
            <td className="px-6 py-2 whitespace-nowrap">
              <div className='flex '>
                <div className='flex space-x-2 items-center'>
                  <div className='text-sm text-gray-600'>{a._id.method}</div>
                  <div className='px-2  rounded-full bg-green-300/30'>
                  <Link
                    href={`/analyzer/apianalyzer/endpoint/details?path=${a._id.endpoint}`}
                    className='text-sm  leading-loose text-green-800'>
                    {a._id.endpoint}</Link>
                    </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
              {(a.avgDuration / 1000).toFixed(2)} s
            </td>
           
            <td className="px-6 py-2 whitespace-nowrap">
              {moment(a.latestRequestDate).format('DD-MM-YYYY HH:mm:ss')}
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
              {a.count}
            </td>
          </tr>;
        })}
      </tbody>
    </table>
    <Pagination
      totalResults={data.total}
      onPageChange={onPageChange}
      currentPage={apiMetricesFilter.currentPage}
      resultsPerPage={apiMetricesFilter.limit} />
  </div>;
};
