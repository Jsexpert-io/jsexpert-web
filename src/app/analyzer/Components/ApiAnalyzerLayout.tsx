'use client'

import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  ChartPieIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  FolderIcon,
  HomeIcon,
  LightBulbIcon,
  Square2StackIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Lato } from 'next/font/google'

const font = Lato({
  subsets: ['latin'],
  weight: '400',

})

const apinavigation = [
  { name: 'Endpoint Analyser', href: '/analyzer/apianalyzer/endpoint', icon: ChartBarIcon, current: true },
  { name: 'Patterns', href: '/analyzer/apianalyzer/pattern', icon: ChartPieIcon, current: false },
  { name: 'Error Analyzer', href: '/analyzer/apianalyzer/erroranalyzer', icon: ExclamationTriangleIcon, current: false },
  { name: 'Insights', href: '/analyzer/apianalyzer/insight', icon: LightBulbIcon, current: false },
  { name: 'Integration', href: '/analyzer/apianalyzer/integration', icon: CodeBracketIcon, current: false },
  { name: 'Questions', href: '/analyzer/apianalyzer/questions', icon: Square2StackIcon, current: false },
]

const dbnavigation = [
  { name: 'Queries Analyser', href: '/analyzer/apianalyzer/endpoint', icon: ChartBarIcon, current: true },
  { name: 'Patterns', href: '/analyzer/apianalyzer/pattern', icon: ChartPieIcon, current: false },

  { name: 'Insights', href: '/analyzer/apianalyzer/insight', icon: LightBulbIcon, current: false },
  { name: 'Integration', href: '/analyzer/apianalyzer/integration', icon: CodeBracketIcon, current: false },
  { name: 'Questions', href: '/analyzer/apianalyzer/questions', icon: Square2StackIcon, current: false },
]
export default function ApiAnalyzerLayout({ children, type }: any) {
  return (
    <div className={`${font.className} bg-primary-950 text-gray-100 flex flex-col`}>
      <Header />
      <div className=' flex'>


        <Sidebar navigation={type == 'api' ? apinavigation : dbnavigation} />
        <div className='text-gray-800 p-8 flex-1  md:rounded-l-3xl bg-white'>
          {children}</div>
      </div>
    </div>
  )
}
