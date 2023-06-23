import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { apiSlice } from './api.slice'

//reducers
import persistedProjectReducer from './features/project.feature'
import persistedUserReducer from './features/user.feature'
import apiMetricesFilterReducer from './features/api.matrices.feature'





export const store = configureStore({
  devTools:process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userState: persistedUserReducer,
    projectState :persistedProjectReducer,
    apiMetricesFilterState: apiMetricesFilterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector