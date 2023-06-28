import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from './store';
import { removeUser } from './features/user.feature';
import { logout } from './features/auth.feature';

const devMode = process.env.NODE_ENV === 'development';
export const apiSlice = createApi({
    //reducerPath: 'api', //optional
    baseQuery: fetchBaseQuery({
        baseUrl: devMode ?
        'http://localhost:3001':'https://api.jsexpert.io',
        responseHandler:(response)=>{
            console.log('response',response);
            
            if(response.status === 401){
                logout()

            }
            return response.json()
        },
        prepareHeaders: (headers, { getState }) => {
          
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
        'Questions', 'Users', 'Projects', 'Project', 'APIDATA_METRICES'],

    endpoints: builder => ({})
})






