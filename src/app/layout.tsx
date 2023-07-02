import { ThemeProvider } from '@mui/material'
import React from 'react'
import './globals.css'

import Applayout from '@/app/landingpagecomponents/Applayout'



export const metadata = {
  title: 'Js Analyzer - Analyze your express APIs',
  description: 'Unleash the full power of your  APIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-gray-100">


      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Libre+Baskerville&family=Merriweather&display=swap" rel="stylesheet" />
          </head>
          <body className="h-full">
            <Applayout>
              {children}</Applayout>
          </body>
        </html>
        )
}
