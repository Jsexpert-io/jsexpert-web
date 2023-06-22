import { apiSlice } from "../api.slice";

interface RequestObject {
    path: string;
    method: string;
    body: Record<string, unknown>;
    headers: string;
    hostname: string;
    ip: string;
    protocol: string;
    fresh: boolean;
    stale: boolean;
    secure: boolean;
    xhr: boolean;
}

interface ResponseObject {
    requestObject: RequestObject;
    durationInMilliseconds: number;
    memoryUsage: number;
    reqSize: number;
    resSize: number;
    resStatus: number;
    createdAt: string;
}




const apiPerformanceApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getApiData: builder.query<ResponseObject[], void>({
            query: () => ({
                url: '/server-data',
                method: 'GET'
            }),
            transformResponse: (response: any) => {
                return response?.map((item: any) => ({...item?.data,createdAt: item?.createdAt}));
            },
            providesTags: ['APIDATA']
        }),

    })

});

export const { useGetApiDataQuery } = apiPerformanceApiSlice;