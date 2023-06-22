import React from 'react'
import ApiAnalyzerLayout from '../Components/ApiAnalyzerLayout'



export default function layout({children}:any) {
  return (
    <ApiAnalyzerLayout
     type='api'
    >{children}</ApiAnalyzerLayout>
  )
}
