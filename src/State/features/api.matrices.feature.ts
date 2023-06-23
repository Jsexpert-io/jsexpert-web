import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist'
interface ApiMetricesFilter {
    sortBy: string,
    orderBy: string,
    currentPage: number,
    limit: number,
    search: string,

}
const initialState: {apiMetricesFilter:ApiMetricesFilter} = {
    apiMetricesFilter:{ sortBy: 'count',
    orderBy: 'desc',
    currentPage: 1,
    limit: 10,
    search: '',}
}
const apiMetricesFilterFeature = createSlice({
    name: 'apiMetricesFilter',
    initialState,
    reducers: {
        updateFilter(state, action) {
        
            state.apiMetricesFilter = {...action.payload};
        },
        resetFilter(state) {
            state.apiMetricesFilter = {
                sortBy: 'count',
                orderBy: 'desc',
                currentPage: 1,
                limit: 10,
                search: '',
            };
        }
    }
})

export const { updateFilter, resetFilter } = apiMetricesFilterFeature.actions;
const persistConfigProject = {
    key: 'root-api-metrices-filter',
    storage,
}


export default apiMetricesFilterFeature.reducer;