import { RequestDetailModel } from "../Models/RequestDetailModel";
import { apiSlice } from "../api.slice";
import { store } from "../store";

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
        avgDuration: number
        avgMemoryUsage: number
        avgReqSize: number
        avgResSize: number
        count: number
        failedRequests: number
        latestRequestDate: string
        maxDuration: number
        minDuration: number
        successfulRequests: number
        _id: {
            endpoint: string
            method: string
        }

    }[];
    total: number;
}


const apiPerformanceApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => {
        // access state in here with builder.getState()

        return {
            getApiData: builder.query<Response, void>({
                query: () => {
                    const { apiMetricesFilter } = store.getState().apiMetricesFilterState;
                    return {
                        url: '/server-data',
                        params: {
                            sortBy: apiMetricesFilter.sortBy,
                            orderBy: apiMetricesFilter.orderBy,
                            page: apiMetricesFilter.currentPage,
                            limit: apiMetricesFilter.limit,
                            search: apiMetricesFilter.search,
                        },
                        method: 'GET'
                    }
                },

                providesTags: ['APIDATA_METRICES']
            }),
            getApiDataByEndpoint: builder.query<RequestDetailModel[], string>({
                query: (path:string) => {
                  
                    return {
                        url: `/server-data/findByEndpoint?endpoint=${path}`,
                       
                        method: 'GET'
                    }
                },

                providesTags: ['APIDATA_METRICES']
            }),
            getRequestDistribution: builder.query<any, void>({
                query: () => {
                    return {
                        url: '/server-data/getRequestDistribution',
                        method: 'GET'
                    }
                }
            }),
            getRequestDurationDistribution: builder.query<any, void>({
                query: () => {
                    return {
                        url: '/server-data/getRequestDurationDistribution',
                        method: 'GET'
                    }
                }
            }),
            getMemoryUsageTrend: builder.query<Response, void>({
                query: () => {
                    return {
                        url: '/server-data/getMemoryUsageTrend',
                        method: 'GET'
                    }
                }
            }),
            errorStatusCodeDitribution: builder.query<Response, void>({
                query: () => {
                    return {
                        url: '/server-data/errorStatusCodeDitribution',
                        method: 'GET'
                    }
                }
            }),
        }
    }

});

export const { useGetApiDataQuery , useGetApiDataByEndpointQuery,
    useGetRequestDistributionQuery,
    useGetRequestDurationDistributionQuery,
    useGetMemoryUsageTrendQuery,
    useErrorStatusCodeDitributionQuery
} = apiPerformanceApiSlice;