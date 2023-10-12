'use client'
import React from 'react'
import PageHeader from '../../Components/PageHeader'
import { useAppDispatch, useAppSelector } from '@/State/store'
import { updateFilter } from '@/State/features/api.matrices.feature'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import { EndpointsTable } from './components/EndpointsTable'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const statuses = { good: 'text-green-700 bg-green-700/10', bad: 'text-rose-700 bg-rose-700/10' }

export default function Page() {
  
  return (
    <div>
      <PageHeader />
      <div className='container'>
        <div className='row'>
        </div>
        <EndpointsTable />
      </div>
    </div>
  )
}


