

'use client'
import { useLoginMutation } from '@/State/apiFeatures/auth.apislice';
import { setUserFailure, setUserStart, setUserSuccess } from '@/State/features/user.feature';
import { useAppDispatch, useAppSelector } from '@/State/store';
import { Alert } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import LogoBlack from '../../../../public/logob.png';
export default function Example() {
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const [loginapi] = useLoginMutation()
  const { error, user: loggedInUser, loading } = useAppSelector(state => state.userState)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  useEffect(() => {
    if (loggedInUser?.id) {
      router.push('/project')
    }

    return () => {

    }
  }, [loggedInUser,router])


  const onChange = (event: any) => {

    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })

  }
  const onSubmit = async (event: any) => {
    try {
      dispatch(setUserStart())


      const data: any = await loginapi(user).unwrap()
      console.log(data);

      dispatch(setUserSuccess(data))

    } catch (error: any) {

      console.log(error)
      dispatch(setUserFailure(error?.data?.message || error?.message || 'Something went wrong'))
    }



  }
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Image
                className="h-20 w-auto"
                src={LogoBlack}
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member?{' '}
                <Link href="/auth/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Start a 14 day free trial
                </Link>
              </p>
              {error && <Alert severity="error" className="mt-4">
                <div className="text-sm">
                  <p>
                    {error}
                  </p>
                </div>
              </Alert>}
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={onChange}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={onChange}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={onSubmit}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-screen w-full object-cover"
            src="https://images.unsplash.com/photo-1610972221114-c48c6bb5d2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=100"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
