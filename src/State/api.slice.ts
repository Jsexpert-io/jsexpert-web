import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    //reducerPath: 'api', //optional
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.jsexpert.io',
        prepareHeaders: (headers, { getState }) => {
            console.log(getState() as any)
            const token = (getState() as any)?.userState?.token;
            const project = (getState() as any)?.projectState?.project;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            if (project?._id) {
                headers.set('clientId', project.clientId);
                headers.set('clientSecret', project.clientSecret);

            }
            return headers;
        }
    }),
    tagTypes: ['Auth', 'category', 'APIDATA', 'service',
        'service-provider',
        'Questions', 'Users', 'Projects', 'Project', 'Tag'],

    endpoints: builder => ({})
})






