
import React from 'react'
import { AppLayout } from './AppLayout'

export default function layout({children}:any) {
  return (
    <div className='bg-gradient-to-t
    to-indigo-200
    from-primary-300

    flex h-screen w-screen justify-center  p-16'>
      <AppLayout>
      {children}
      </AppLayout>
     </div>
  )
}



