'use client';
import { store } from '@/State/store';
import { SnackbarProvider } from 'notistack';
import React from 'react'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
export default function Applayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <SnackbarProvider >
        {children}
      </SnackbarProvider>
    </Provider>
  )
}
