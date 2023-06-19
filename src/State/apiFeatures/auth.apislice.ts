import { apiSlice } from "../api.slice";

const authApiSlice =  apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/user/login',
                method: 'POST',
                body: {
                    email,
                    password
                }
            }),
            invalidatesTags: ['Auth']
        }),
        register: builder.mutation({
            query: ({ email, password, name }) => ({
                url: '/user/register',
                method: 'POST',
                body: {
                    email,
                    password

                }
            }),
            invalidatesTags: ['Auth']
        }),
    })

})

export const { useLoginMutation, useRegisterMutation } = authApiSlice;