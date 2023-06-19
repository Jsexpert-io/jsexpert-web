import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    //reducerPath: 'api', //optional
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        prepareHeaders: (headers, { getState }) => {
            console.log(getState() as any)
            const token = (getState() as any)?.userState?.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Auth','category','subcategory','service',
    'service-provider',
    'Questions', 'Users', 'Projects','Project','Tag'],

    endpoints: builder => ({})
})






