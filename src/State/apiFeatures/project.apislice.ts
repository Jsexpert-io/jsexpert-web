import { apiSlice } from "../api.slice";

interface Project {
    _id: string,
    name: string,
    description: string,
}
const projectApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query<Project[],void>({
            query: () => ({
                url: '/project/findMyProjects',
                method: 'GET'
            }),
            providesTags: ['Projects']
        }),
        getProject: builder.query({
            query: (id) => ({
                url: `/project/${id}`,
                method: 'GET'
            }),
            providesTags: ['Project']
        }),
        createProject: builder.mutation({
            query: (project:{
                name:string,
                description:string,
            }) => ({
                url: '/project',
                method: 'POST',
                body: project
            }),
            invalidatesTags: ['Projects']
        }),
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `/project/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Projects']
        }),
    })

});

export const { useGetProjectsQuery, useGetProjectQuery, useCreateProjectMutation, useDeleteProjectMutation } = projectApiSlice;