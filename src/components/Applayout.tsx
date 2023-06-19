'use client';
import { SnackbarProvider } from 'notistack';
import React from 'react'

export default function Applayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <SnackbarProvider >
        {children}
        </SnackbarProvider>
    </div>
  )
}
