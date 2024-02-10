
'use client'
import RequestDistribution from './components/RequestDistributions'
import { EndpointsTable } from './endpoint/components/EndpointsTable'

export default function page() {
  // const {data: requestDistributionData } = useGetRequestDistributionQuery()

  return (
    <div className='flex flex-col space-y-4 w-full'>
      <div className='grid md:grid-cols-3 gap-16 w-full grid-cols-1'>
        <RequestDistribution />
        <RequestDistribution />
        <RequestDistribution />

        {/* <MemoryUsageTrendChart/> */}
      </div>
      <EndpointsTable />
    </div>

  )
}
