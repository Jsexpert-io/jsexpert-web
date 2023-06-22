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

interface Response {
    paginatedData: {
        avgDuration:number
        avgMemoryUsage:number
        avgReqSize:number
        avgResSize:number
        count:number
        failedRequests:number
        latestRequestDate:string
        maxDuration:number
        minDuration:number
        successfulRequests:number
        _id:string

    }[];
    total: number;
}


const apiPerformanceApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getApiData: builder.query<Response, void>({
            query: () => ({
                url: '/server-data/1/5',
                method: 'GET'
            }),
          
            providesTags: ['APIDATA_METRICES']
        }),

    })

});

export const { useGetApiDataQuery } = apiPerformanceApiSlice;