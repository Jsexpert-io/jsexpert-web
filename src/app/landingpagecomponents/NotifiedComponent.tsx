'use client'
import React, { useState } from 'react'
  import {useSnackbar} from 'notistack'
const API_URL = 'https://api.jsexpert.io'
export default function NotifiedComponent() {
    const [email, setEmail] = useState<string>()
    const {enqueueSnackbar} = useSnackbar()
    const onNotified = async () => {
      

        console.log(email)
        await fetch(`${API_URL}/marketing-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        enqueueSnackbar('We will notify you once we are live', { variant: 'success' ,anchorOrigin:{
          horizontal: 'center',
          vertical: 'top'
        }})
    }
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
    <input
      id="email-address"
      name="email"
      value={email}
        onChange={(e) => setEmail(e.target.value)}
      type="email"
      autoComplete="email"
      required
      className="min-w-0
  
  flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
      placeholder="Enter your email"
    />
    <button
        onClick={onNotified}
      className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
    >
      Get Notified
    </button>
    {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
      Live demo <span aria-hidden="true">→</span>
    </a> */}
  </div>
  )
}
